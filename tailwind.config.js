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
        padding:"4.25rem",
        center:true,
      },
      fontFamily:{
        Roboto :["Roboto,sans-serif"],
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"992px",
        xl:"1200px"
      },
      minHeight:{
        "128":"32rem"
      }

    },
  },
  plugins: [],
}

