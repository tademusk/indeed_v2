
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
         backgroundImage: {
          'senae': 'linear-gradient(116deg, #00E1E7 -3.86%, #5F41D9 61.74%)',
          'tade': 'linear-gradient(116deg, #ddf542 -3.86%, #0aa34f 61.74%)',
          'nahom': 'linear-gradient(116deg, #ffa500 -3.86%, #f5610c 61.74%)',
          'kalab': 'linear-gradient(116deg, #818196 -3.86%, #1b1b1c 61.74%)',
          'kume': 'linear-gradient(116deg, #eb1eeb -3.86%, #9653bd 61.74%)',
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