/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        
        
      },
      container:{
        padding:"1rem",
        center:true,
      },
      fontFamily:{
        Roboto :["Roboto,sans-serif"],
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"992px"
      }

    },
  },
  plugins: [],
}

