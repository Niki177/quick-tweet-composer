import React, { useEffect, useState, useCallback, useRef } from 'react';

const MAX = 280;

export default function TwitterWriter() {
  const [text, setText] = useState('');
  const [dark, setDark] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const remaining = MAX - text.length;
  const pct = Math.max(0, Math.min(100, (text.length / MAX) * 100));

  const submit = useCallback(() => {
    // For this repo: simulate posting. Integrate real OAuth/backend as documented in README.
    alert('Simulated post:\n' + text);
  }, [text]);

  // ctrl/cmd + Enter to submit
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      if ((e.key === 'Enter' || e.keyCode === 13) && (e.ctrlKey || (isMac && e.metaKey))) {
        e.preventDefault();
        submit();
      }
    }
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [submit]);

  // small animation: pulse the submit when near limit
  useEffect(() => {
    const btn = document.getElementById('tweet-btn');
    if (!btn) return;
    if (text.length > MAX - 20) {
      btn.classList.add('animate-pulse');
    } else {
      btn.classList.remove('animate-pulse');
    }
  }, [text]);

  return (
    <div className={`w-full max-w-2xl rounded-2xl shadow-2xl p-6 ${dark ? 'bg-slate-900/80' : 'bg-white'} backdrop-blur-sm`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">Q</div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className={`text-lg font-semibold ${dark ? 'text-white' : 'text-slate-900'}`}>Quick Tweet Composer</h2>
            <div className="flex items-center gap-2">
              <label className="text-sm text-slate-400">Dark</label>
              <input type="checkbox" checked={dark} onChange={() => setDark(!dark)} className="toggle-checkbox" />
            </div>
          </div>

          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="What's happening?"
            className={`mt-4 w-full min-h-[120px] resize-none rounded-lg p-4 ${dark ? 'bg-slate-800 text-white placeholder-slate-400' : 'bg-slate-50 text-slate-900 placeholder-slate-500'}`}
            maxLength={MAX}
          />

          <div className="mt-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-400">{text.length}/{MAX}</div>
              <div className="w-40 h-2 bg-slate-700 rounded overflow-hidden">
                <div style={{ width: pct + '%' }} className="h-full bg-gradient-to-r from-sky-400 to-pink-500" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button id="tweet-btn" onClick={submit} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow hover:scale-105 transition-transform">Tweet</button>
            </div>
          </div>

          <div className="mt-4 text-sm text-slate-400">
            Tip: Press <kbd className="border rounded px-2 py-1 bg-slate-700 text-white">Ctrl</kbd>/<kbd className="border rounded px-2 py-1 bg-slate-700 text-white">⌘</kbd> + <kbd className="border rounded px-2 py-1 bg-slate-700 text-white">Enter</kbd> to post.
          </div>
        </div>
      </div>
    </div>
  );
}
