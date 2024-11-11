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
  },
  plugins: [],
}

