import hljs from 'highlight.js/lib/core';
import React, { useEffect } from 'react';

export default function Code({ code, language }) {
  useEffect(() => {
    hljs.highlightElement(document.querySelector('pre code'));
  }, []);

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
