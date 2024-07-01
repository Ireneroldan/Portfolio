/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        animated:'radial-gradient(circle, #fbc2eb, #a18cd1)',
        background: '#f5f7f8',
        primary: '#45474B',
        secundary: '#1E0342',
        accent: '#379777',
        nav: '#FEFEFE', 
        text: '#45474b',
        green: '#7FD1AE'
      },
      backgroundImage: theme => ({
        'animated': 'radial-gradient(circle, #fbc2eb, #a18cd1)',
      }),

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