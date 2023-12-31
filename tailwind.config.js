/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens:{
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',

      },
    },

    extend: {
      spacing:{
        '128' : '32rem',
      }
    },
    

  },
  plugins: [],
  
}

