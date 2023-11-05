
/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
         ss: "560px",
         sm: "767px",
         md: "992px",
         lg: "1080px",
         xl: "1360px",
         xxl: "1700px",
      },
    },
  },
  plugins: [],
}