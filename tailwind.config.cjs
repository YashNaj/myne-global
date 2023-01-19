/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui:{
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes:[
      {
        myne:{
           
        "primary": "#2f3847",
                
      "secondary": "#ece5f0",
                
      "accent": "#96a9c7",
                
      "neutral": "#002d72",
                
      "base-100": "#2A303C",
                
      "info": "#3ABFF8",
                
      "success": "#659157",
                
      "warning": "#FBBD23",
                
      "error": "#f76c5e",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
