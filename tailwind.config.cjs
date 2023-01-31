/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: [
      {
        myne: {
          primary: "#002d72",

          secondary: "#ece5f0",

          accent: "#96a9c7",

          neutral: "#c3cede",

          "base-100": "#e1e4e8",

          info: "#3ABFF8",

          success: "#659157",

          warning: "#FBBD23",

          error: "#f76c5e",
          
          vault: "#5d6169"
        },
      },
    ],
  },
  theme: {
    color: {
      'jewelry': '#F192E8',
      'wacthes': '#2B2C31',
      'art': '#FFE609',
      'leather': '#984E1D',
      'clothes': '#59898A',
      'sneakers': '#B3F5F7',
      'gun': '#3A5130',
      'technology': '#080631',
      'trading': '#FCF7DE',
      'collectibles': '#61E1A3',
      'crypto':    
    }.
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
