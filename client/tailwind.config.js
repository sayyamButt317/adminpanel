/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
   theme: {
      extend: {
        colors: {
          primaryColor: "#8873ef",
          headingColor: "#081e21",
          smallTextColor: "#193256",
          logobgColor: "#581c87",
          containercolor:"#36454F",
          tilecolor:"#EOEOEO"
        
        },
        fontSize: {
          sm: '0.8rem',
          base: '1rem',
          xl: '1.25rem',
          '2xl': '1.563rem',
          '3xl': '1.953rem',
          '4xl': '2.441rem',
          '5xl': '3.052rem',
        },
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui',],
          'serif': ['ui-serif', 'Georgia',],
          'mono': ['ui-monospace', 'SFMono-Regular', ],
          'display': ['Oswald', ],
          'body': ['"Open Sans"', ],
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
        width:{
          'sm' : "640px",
          'md' : "768px",
          'lg' : "1024px",
          'xl' : "1280px",
          '2xl' : "1536px",
        },
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        },
   
      },
    },
    plugins: [],
  }
  
  