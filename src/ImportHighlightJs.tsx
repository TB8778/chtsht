import 'highlight.js/styles/stackoverflow-dark.css';
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';

hljs.registerLanguage('sql', sql);

export function ImportHighlightJs() {
  return null;
}
