import React, { useEffect, useState } from 'react';

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(
    () =>
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      root.classList.remove('dark'); 
      localStorage.theme = 'light';
    }
  }, [isDark]);

  return (
   <button
  onClick={() => setIsDark(!isDark)}
  className="px-4 py-2 bg-primary text-white dark:text-gray-900 rounded"
>
  {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>
  );
};
