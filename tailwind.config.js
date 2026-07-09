/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        card: 'var(--card)',
        brass: 'var(--brass)',
        lamp: 'var(--lamp)',
        stamp: 'var(--stamp)',
        edge: 'var(--border)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        shimmer: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.4s infinite',
      },
    },
  },
  plugins: [],
};
