const plugin = require("tailwindcss/plugin");
const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
      "-moz-backface-visibility": "visible",
      "-webkit-backface-visibility": "visible",
      "-ms-backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
  });
});
// const flipCardUtils = plugin(function ({ addUtilities }) {
//   addUtilities({
//     ".flip-card-inner": {
//       'position': "relative",
//       'width': "100%",
//       'height': "100%",
//       "text-align": "center",
//       'transition': "transform 0.6s",
//       "-webkit-transition": "transform 0.6s",
//       "-webkit-transform-style": "preserve-3d",
//       "transform-style": "preserve-3d",
//       "-webkit-transform": "translateZ(0)",
//       "-webkit-transform:": "rotateY(180deg)",
//       "-moz-transform": "translateZ(0)",
//       "-moz-transform:": "rotateY(180deg)",
//       "-ms-transform": "translateZ(0)",
//       "-ms-transform:": "rotateY(180deg)",
//       'transform': "rotateY(180deg)",
//       'width': "100%",
//       'height': "100%",
      
//     },
//     ".flip-card": {
//       "-webkit-transform": "translateZ(0)",
//       "-webkit-transform:": "rotateY(180deg)",
//       "-moz-transform": "translateZ(0)",
//       "-moz-transform:": "rotateY(180deg)",
//       "-ms-transform": "translateZ(0)",
//       "-ms-transform:": "rotateY(180deg)",
//       'transform': "rotateY(180deg)",
//       'width': "100%",
//       'height': "100%",
//       'perspective': '1000px'
//     },
//     ".flipped": {
//       "-webkit-transform": "translateZ(0)",
//       "-webkit-transform": "rotateY(180deg)",
//       "-moz-transform": "translateZ(0)",
//       "-moz-transform:": "rotateY(180deg)",
//       "-ms-transform": "translateZ(0)",
//       "-ms-transform:": "rotateY(180deg)",
//       'transform': "rotateY(180deg)",
//       'width': "100%",
//       'height': "100%",
//     },
//     ".backface-hidden": {
//       "backface-visibility": "hidden",
//       "-moz-backface-visibility": "hidden",
//       "-webkit-backface-visibility": "hidden",
//       "-ms-backface-visibility": "hidden",
//     },
//     '.flip-card-front': {
//       'position': 'absolute',
//       'width': '100%',
//       'height': '100%',
//       '-webkit-transform': 'translateZ(0)',
//       "-moz-transform": "translateZ(0)",
//       '-webkit-backface-visibility': 'hidden',
//       "backface-visibility": "hidden",
//       "-moz-backface-visibility": "hidden",
//       "-webkit-backface-visibility": "hidden",
//       "-ms-backface-visibility": "hidden",   
//      },
//     '.flip-card-back':  {
//       'position': 'absolute',
//       'width': '100%',
//       'height': '100%',
//       '-webkit-transform': 'translateZ(0)',
//       "-moz-transform": "translateZ(0)",
//       '-webkit-backface-visibility': 'hidden',
//       "backface-visibility": "hidden",
//       "-moz-backface-visibility": "hidden",
//       "-webkit-backface-visibility": "hidden",
//       "-ms-backface-visibility": "hidden",   
//      }
//   });
// });
const flipCardUtils = plugin(function ({ addUtilities }) {
  addUtilities({
    ".flip-card-inner": {
      'position': "relative",
      'width': "100%",
      'height': "100%",
      "text-align": "center",
      'transition': "transform 0.6s",
      "-webkit-transition": "transform 0.6s",
      "-webkit-transform-style": "preserve-3d",
      "transform-style": "preserve-3d",
    },
    ".flip-card": {
      'width': "100%",
      'height': "100%",
      'perspective': '1000px'
    },
    ".flipped .flip-card-inner": {
      "-webkit-transform": "rotateY(180deg)",
      "-moz-transform": "rotateY(180deg)",
      "-ms-transform": "rotateY(180deg)",
      'transform': "rotateY(180deg)",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
    '.flip-card-front': {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'z-index': 1,
    },
    '.flip-card-back':  {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      '-webkit-transform': 'rotateY(180deg)',
      "-moz-transform": "rotateY(180deg)",
      '-ms-transform': 'rotateY(180deg)',
      'transform': 'rotateY(180deg)',
    },
  });
});


/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        jewelry: "#F192E8",
        watch: "#2B2C31",
        art: "#FFE609",
        leather: "#984E1D",
        clothes: "#59898A",
        sneakers: "#B3F5F7",
        gun: "#3A5130",
        technology: "#080631",
        trading: "#FCF7DE",
        collectibles: "#61E1A3",
        crypto: "#B6B1B1",
        nft: "#7C1EB6",
        vintage: "#FF5F09",
        motor: "#E10909",
        animal: "#278001",
        childId: "#00BFFF",
        other: "#ffffff",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    backfaceVisibility,
    flipCardUtils
  ],
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

          vault: "#5d6169",
        },
      },
    ],
  },
};
