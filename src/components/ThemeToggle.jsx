import { useTheme } from '../layouts/ThemeProvider';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="fixed bottom-4 right-4 p-3 rounded-full bg-primary text-bg shadow-lg"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
        
      {darkMode ? (
        <span className="text-xl">☀️</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
    </button>
  );
}