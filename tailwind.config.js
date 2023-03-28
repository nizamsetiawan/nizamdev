/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','blog.html',"./node_modules/flowbite/**/*.js",'project.html'],
  theme: {
    container : {
      center : true,
      padding: '20px',
    },
    extend: {
      colors : {
        primary:  '#fca311',
        green : '#03C988',
        secondary : '#000000',
        light : '#fff',
        succes : '#1C82AD',
        grey:'#e5e5e5',
        a : '#171923',
        b : '#1A202C',
      },
      fontFamily: {
        sans: ['Poppins'],
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
