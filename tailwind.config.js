/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(20px)" },
        },
      },
      animation: {
        scroll: "scroll 1s linear infinite",
      },
      fontFamily: {
        garet: ["Garet", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        customBg: "#rgb(59 130 246 / var(--tw-border-opacity, 1));",
        customBlue: "#00487a",
      },
      backgroundImage: {
        "circular-gradient":
          "radial-gradient(circle at 50%, rgba(0, 0, 0, 0), rgba(0, 72, 122, 0.4))",
        "custom-linear":
          "linear-gradient(90deg, hsla(181, 45%, 5%, 1) 0%, hsla(238, 87%, 50%, 1) 100%)",
        "custom-gradient":
          "linear-gradient(90deg, hsla(224, 84%, 25%, 1) 0%, hsla(217, 74%, 52%, 1) 51%, hsla(225, 100%, 13%, 1) 100%)",
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
      screens: {
        xxs: { "max:": "375px" },
      },
    },
  },
  plugins: [],
};
