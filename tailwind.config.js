/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garet: ["Garet", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBlack: "#000000",
        customBlue: "#00487a",
      },
      backgroundImage: {
        "circular-gradient":
          "radial-gradient(circle at 50%, rgba(0, 0, 0, 0), rgba(0, 72, 122, 0.4))",
      },
      borderWidth: {
        1: "1px", // Aggiungi una classe personalizzata per il bordo con spessore di 1px
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
      spacing: {
        22: "5.5rem",
        24: "6rem",
      },
    },
  },
  plugins: [],
};
