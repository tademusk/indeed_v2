
/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        '2xl':'2px 4px 8px 5px rgba(80, 61, 25, 0.30)',
        'xl':'0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'primary': '#1a1a1af7',
        'secondary': '#FFFFFF',
        'tertiary': '#DAA520',
        'titleTxt': '#',
        'paragraphTxt': '#'
        }, 
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
         },
       screens: {
         xs: "380px",
         ss: "560px",
         sm: "767px",
         sd: "840px",
         md: "992px",
         lg: "1080px",
         lx: "1200px",
         xl: "1360px",
         xxl: "1700px",
      },
    },
  },
  plugins: [],
}