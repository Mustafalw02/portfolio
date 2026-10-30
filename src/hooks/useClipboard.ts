import { useState, useCallback } from 'react';

export function useClipboard(timeout = 2000) {
  const [hasCopied, setHasCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          // Fallback for non-secure context
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
        }
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), timeout);
        return true;
      } catch (err) {
        console.error('Failed to copy to clipboard', err);
        setHasCopied(false);
        return false;
      }
    },
    [timeout]
  );

  return { hasCopied, copy };
}
