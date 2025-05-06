/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "brown-primary": "#A0522D",
        "brown-secondary": "#D2691E",
        "brown-dark": "#4E342E",
        "brown-medium": "#795548",
        "brown-light": "#D7CCC8",
        "gold-accent": "#FFD700",
        cream: "#F5F5DC",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
