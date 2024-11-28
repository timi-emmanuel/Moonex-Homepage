/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './public/js/**/*.js',],
  theme: {
    extend: {

      colors:{
        lightYellow:'#EDD955'
      },
      fontFamily:{
        raleway:["Raleway"],
        firacode:["Fira Code"],
        roboto:["Roboto"]

      }

    },
  },
  plugins: [
    
  ],
}

