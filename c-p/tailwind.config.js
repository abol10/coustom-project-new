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
        'primary-100':'#FFFFFF',
        'primary-200':'#F6EAEB',
        'primary-300':'#EDD5D8',
        'primary-400':'#E5C1C4',
        'primary-500':'#DCAC81',
        'primary-600':'#CAB289',
        'primary-700':'#895D62',
        'primary-800':'#86262F',
        'primary-900':'#641C23',
        'primary-1000':'#431318',
        'primary-1100':'#320E12',
        'primary-1200':'#21090C',
        'primary-1300':'#110506',
        'primary-1400':'#000000',
      }
    },
    fontSize: {
      ff:'11px',
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
  plugins: [
    require('daisyui'),
  ],
   daisyui: {
    themes:true,
    darkTheme:"dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
   }
}

