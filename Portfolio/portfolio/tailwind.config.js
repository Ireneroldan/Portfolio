/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        background: '#00001e',
        primary: '#cdceee',
        secundary: '#a2a4df',
        accent: 'hsl(96, 95%, 59%)',
      },

      fontFamily: {
        sans: ['Afacad', 'sans-serif'],
        mono: ['monospace']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}