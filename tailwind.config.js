// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // Dentro de extend
      colors: {
        primary: "#6D4C41",
        secondary: "#FFB7C5",
        accent: "#FFD700",
        light: "#FFF8E1",
        dark: "#4E342E",
      },
      container: {
        // ... sua configuração de container
      },
      // --- ADICIONE O CÓDIGO ABAIXO ---
      animation: {
        "pulse-custom": "pulse-custom 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "pulse-custom": {
          "0%, 100%": {
            opacity: 1,
            transform: "scale(1)",
          },
          "50%": {
            opacity: 0.95,
            transform: "scale(1.05)",
          },
        },
      },
      // --- FIM DO CÓDIGO ADICIONADO ---
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
