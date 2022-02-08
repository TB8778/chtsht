import 'highlight.js/styles/stackoverflow-dark.css';
import hljs from 'highlight.js/lib/core';
import sql from 'highlight.js/lib/languages/sql';
import shell from 'highlight.js/lib/languages/shell';
import powershell from 'highlight.js/lib/languages/powershell';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import scss from 'highlight.js/lib/languages/scss';
import csharp from 'highlight.js/lib/languages/csharp';
import php from 'highlight.js/lib/languages/php';
import './highlightjs-copy.css';

hljs.registerLanguage('sql', sql);
hljs.registerLanguage('shell', shell);
hljs.registerLanguage('powershell', powershell);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('scss', scss);
hljs.registerLanguage('csharp', csharp);
hljs.registerLanguage('php', php);

hljs.addPlugin({
  'after:highlightElement': ({ el, text }: any) => {
    let button = Object.assign(document.createElement('button'), { innerHTML: 'Copy', className: 'hljs-copy-button' });
    button.dataset.copied = false as any;
    el.parentElement.classList.add('hljs-copy-wrapper');
    el.parentElement.appendChild(button);
    el.parentElement.style.setProperty('--hljs-theme-background', window.getComputedStyle(el).backgroundColor);
    button.onclick = () => {
      if (!navigator.clipboard) return;
      let newText = text;
      // if (hook && typeof hook === 'function') {
      //   newText = hook(text, el) || text;
      // }
      navigator.clipboard
        .writeText(newText)
        .then(function () {
          button.innerHTML = 'Copied!';
          button.dataset.copied = true as any;
          let alert = Object.assign(document.createElement('div'), {
            role: 'status',
            className: 'hljs-copy-alert',
            innerHTML: 'Copied to clipboard',
          });
          el.parentElement.appendChild(alert);
          setTimeout(() => {
            button.innerHTML = 'Copy';
            button.dataset.copied = false as any;
            el.parentElement.removeChild(alert);
            alert = null as any;
          }, 2e3);
        })
        .then(function () {
          // if (typeof callback === 'function') return callback(newText, el);
        });
    };
  },
});

export function ImportHighlightJs() {
  return null;
}
