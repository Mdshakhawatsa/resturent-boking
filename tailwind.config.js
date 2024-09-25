/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary : "#8aba51",
        secondary : "#334A55",
        base : "#E9EbF8"

      }
    },
    container: {
      center: true,
      screens: {
        "2xl" : "1500px"
      }
    }
     
  },
  plugins: [],
}

