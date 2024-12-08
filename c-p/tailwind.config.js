/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{
        '550px':'550px'
      },
      height:{
        '48px':'35px'
      },
      colors:{
        jigary:' hsla(354, 56%, 42%, 1)',
      }
    },
    fontSize: {
      ff:'8px',
      xs:'0.75rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    }
  },
  plugins: [],
}

