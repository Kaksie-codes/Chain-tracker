/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gradient: 'var(--background-gradient)',
        primary: 'var(--primary-color)',
        black: 'var(--black-color)',
        secondary: 'var(--secondary-color)',
        glass_effect: 'var(--glass-effect-color)',
        purple_dark: 'var(--purple-color)',
        purple_light: 'var(--purple2-color)',        
        red: 'var(--red-color)',
        sidebar: 'var(--sidebar-color)',
      },
       backgroundImage: {
      'custom-gradient': 'linear-gradient(to right, var(--purple-color), var(--red-color))',
    },
    },
  },
  plugins: [],
}

