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
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};
