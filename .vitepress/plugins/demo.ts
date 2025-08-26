import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/highlight'

interface DemoBlockOptions {
  validate?: (params: string) => boolean
  render?: (tokens: any[], idx: number, _options: any, env: any, renderer: any) => string
}

const scriptRE = /<script[^>]*>([\s\S]*?)<\/script>/g
const scriptLangTsRE = /<script[^>]*\blang=['"]ts['"][^>]*>([\s\S]*?)<\/script>/g
const scriptSetupRE = /<script[^>]*\bsetup\b[^>]*>([\s\S]*?)<\/script>/g

export const demoBlockPlugin = (md: MarkdownIt, options: DemoBlockOptions = {}) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx, _options, env, renderer) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        let rawSource = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(env.docDir, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
          rawSource = encodeURIComponent(source)
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        const highlightedSource = highlight(source, 'vue', 'vue')

        return `<vp-demo 
          :source="source" 
          :path="${sourceFile}" 
          :raw-source="rawSource" 
          :description="description">
          <template #source><${sourceFile.replace(/\//, '-')} /></template>
          ${renderer.rules.html_block(tokens, idx, _options, env, renderer)}
        `
          .replace(/source="source"/, `source="${highlightedSource}"`)
          .replace(/raw-source="rawSource"/, `raw-source="${rawSource}"`)
          .replace(/description="description"/, `description="${encodeURIComponent(description)}"`)
      } else {
        return '</vp-demo>'
      }
    },
  })
}

export default demoBlockPlugin