/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/App.jsx"
  ],
  theme: {
   extend: {
  colors: {
        primary: 'var(--color-primary)',
        bg: 'var(--color-bg)',
        text: 'var(--color-text)',
  },
},

  },
  plugins: [],
};
