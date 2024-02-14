/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
 
      "./node_modules/flowbite/**/*.js"
  
  ],
  theme: {
    colors:{
      'blue_button': {
        light: '#AFD3E2',
        DEFAULT: '#AFD3E2',
        dark: '#AFD3E2',
      },

    },
    extend: {

    },
  },
  plugins: [
    require('flowbite/plugin')
]
}