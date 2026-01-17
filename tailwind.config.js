/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./**/*.html",
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{

      },
      
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}