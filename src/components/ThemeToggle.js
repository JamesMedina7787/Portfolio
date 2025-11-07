// src/components/ThemeToggle.js
import React from 'react';
import { useTheme } from '../theme/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      onClick={toggle}
      className="rounded-xl border px-3 py-1.5 text-sm transition hover:bg-black/5 dark:hover:bg-white/10"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
