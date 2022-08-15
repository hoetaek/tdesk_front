/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "light-grey": "#6B6B6B",
      primary: "#2690FF",
      white: colors.white,
    },
  },
  plugins: [],
};
