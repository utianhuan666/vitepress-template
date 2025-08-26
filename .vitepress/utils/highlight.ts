import { getHighlighter, type Highlighter, type Lang } from "shiki";

let highlighter: Highlighter;

export const highlight = (
  code: string,
  lang: Lang,
  filename?: string
): string => {
  if (!highlighter) {
    // 同步版本，实际使用中应该异步初始化
    return `<pre><code class="language-${lang}">${escapeHtml(
      code
    )}</code></pre>`;
  }

  return highlighter.codeToHtml(code, {
    lang,
    theme: "github-light",
    transformers: filename
      ? [
          {
            name: "add-filename",
            pre(node) {
              this.addClassToHast(node, `language-${lang}`);
            },
          },
        ]
      : [],
  });
};

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

// 异步初始化高亮器
export const initHighlighter = async () => {
  highlighter = await getHighlighter({
    themes: ["github-light", "github-dark"],
    langs: ["vue", "typescript", "javascript", "html", "css", "scss", "json"],
  });
};
