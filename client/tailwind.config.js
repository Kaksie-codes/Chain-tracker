/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        black: 'var(--black-color)',
        secondary: 'var(--secondary-color)',
        glass_effect: 'var(glass-effect-color)',
        purple: {
          Default: 'var(--purple-color)',
          light: 'var(--purple2-color)',
        },
        red: 'var(--red-color)',
        gradient: 'var(--background-gradient)'
      }
    },
  },
  plugins: [],
}