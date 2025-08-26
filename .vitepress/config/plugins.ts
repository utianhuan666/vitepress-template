import MarkdownIt from "markdown-it";
import mdContainer from "markdown-it-container";

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1) {
        const description = m && m.length > 1 ? m[1] : "";
        const sourceFileToken = tokens[idx + 2];
        let source = "";
        const sourceFile = sourceFileToken.children?.[0].content ?? "";

        if (sourceFileToken.type === "inline") {
          source = sourceFile;
        }

        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

        return `<Demo source="${encodeURIComponent(
          source
        )}" path="${sourceFile}" description="${encodeURIComponent(
          description
        )}">`;
      } else {
        return "</Demo>";
      }
    },
  });

  md.use(mdContainer, "tip");
  md.use(mdContainer, "warning");
  md.use(mdContainer, "danger");
};
