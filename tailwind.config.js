/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary:{
          DEFAULT:"#FF9C01",
          100:"#FF9001",
          200:"#FF8C00",
        },
        black:{
          DEFAULT:"#000000",
          100:"#333333",
          200:"#666666",
        },
        gray:{
          100:'#CDCDE0',
        },
      },
    },
  },
  plugins: [],
}

