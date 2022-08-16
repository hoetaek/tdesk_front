/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        104: "27rem",
      },
      colors: {
        "light-grey": "#6B6B6B",
        primary: "#2690FF",
        secondary: "#4FC3F7",
        overlay: "#B8B8B8CC",
      },
    },
  },

  plugins: [],
};
