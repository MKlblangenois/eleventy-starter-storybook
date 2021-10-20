module.exports = {
   mode: "jit",
   purge: [
      "./_site/**/*.html",
      "./src/**/*.njk",
      "./src/**/*.md",
      "./src/**/*.js",
   ],
   darkMode: false, // or 'media' or 'class'
   theme: {
      fontFamily: {
         display: ["sans-serif"],
         body: ["sans-serif"],
         heading: ["sans-serif"],
      },
      screens: {
         xs: "480px",
         xxs: "360px",
         sm: "640px",
         md: "768px",
         lg: "1024px",
         xl: "1280px",
         "2xl": "1536px",
      },
      extend: {
         minHeight: {
            "60vh": "60vh",
         },
         maxWidth: {
            xxs: "15.625rem",
            "430px": "430px",
         },
         padding: {
            "16/9": "56.25%",
            "9/16": "177.77%",
            "4/3": "75%",
            "3/4": "120%",
            "1/1": "100%",
         },
         boxShadow: {
            lg: "0px 4px 24px 0px rgba(0, 0, 0, 0.8)",
            "2xl": "0px 16px 24px 0px rgba(0,0,0,0.15)",
            "3xl": "0px 20px 28px 0px rgba(0,0,0,0.25)",
         },
         outline: {
            white: ["2px dotted #fff", "3px"],
            black: ["2px dotted #000", "3px"],
         },
         colors: {},
      },
   },
   variants: {
      extend: {
         scale: ["group-hover", "group-focus"],
         translate: ["group-hover", "group-focus"],
         outline: ["group-focus"],
         backgroundColor: ["group-focus", "group-hover"],
         backgroundOpacity: ["group-focus", "group-hover"],
      },
   },
};
