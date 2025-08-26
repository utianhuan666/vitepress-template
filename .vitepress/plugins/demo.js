import path from "path";
import fs from "fs";
import mdContainer from "markdown-it-container";

export function demoBlockPlugin(md) {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx, _options, env, renderer) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          try {
            source = fs.readFileSync(
              path.resolve(process.cwd(), "examples", `${sourceFile}.vue`),
              "utf-8"
            );
          } catch (error) {
            console.warn(`Could not read demo file: ${sourceFile}.vue`);
            source = `<template><div>Demo file not found: ${sourceFile}</div></template>`;
          }
        }

        const highlightedSource = md.render(`\`\`\`vue\n${source}\n\`\`\``);
        const rawSource = encodeURIComponent(source);
        const encodedDescription = encodeURIComponent(md.render(description));

        return `<VpDemo 
          source="${encodeURIComponent(highlightedSource)}" 
          path="${sourceFile}" 
          raw-source="${rawSource}" 
          description="${encodedDescription}">
          <template #source>
            <${sourceFile.replace(/\//g, "-")} />
          </template>
        `;
      } else {
        return "</VpDemo>";
      }
    },
  });
}
