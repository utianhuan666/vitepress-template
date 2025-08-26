import { getHighlighter } from "shiki";

let highlighter: any;

export const highlight = (str: string, lang: string) => {
  if (!highlighter) {
    return `<pre><code>${str}</code></pre>`;
  }

  try {
    return highlighter.codeToHtml(str, { lang });
  } catch (err) {
    return `<pre><code>${str}</code></pre>`;
  }
};

// 初始化高亮器
getHighlighter({
  themes: ["github-light", "github-dark"],
  langs: ["vue", "typescript", "javascript", "css", "html", "bash"],
}).then((hl) => {
  highlighter = hl;
});
