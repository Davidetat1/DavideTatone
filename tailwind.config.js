/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        garet: ["Garet", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        NotoSans: ["Noto-sans", "sans-serif"],
      },
      colors: {
        customBg: "#rgb(59 130 246 / var(--tw-border-opacity, 1));",
        customBlue: "#00487a",
      },
      backgroundImage: {
        "circular-gradient":
          "radial-gradient(circle at 50%, rgba(0, 0, 0, 0), rgba(0, 72, 122, 0.4))",
        "custom-linear":
          "linear-gradient(90deg, hsla(191, 75%, 30%, 1) 0%, hsla(248, 87%, 36%, 1) 100%)",
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
