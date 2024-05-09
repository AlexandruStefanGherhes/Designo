/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      peach:"#E7816B",
      lightPeach:"#FFAD9B",
      black:"#1D1C1E",
      darkGrey:"#333136",
      lightGrey:'#F1F3F5',
      white:"#FFFFFF",
    }
  },
  
  theme: {
    extend: {
      backgroundImage:{
        'mobile':"url(assets/contact/mobile/bg-pattern-hero-contact-mobile.svg)",
        'tablet':"url()",
        'desktop':"url()"
      },
      fontFamily:{
        "jost":["Jost",'sans-serif']
      },
    },
  },
  plugins: [],
}

