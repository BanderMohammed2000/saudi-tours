/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        monda: ["Monda", "sans-serif"],
        // montserrat: ["Montserrat", "sans-serif"],
        // raleway: ["Raleway", "sans-serif"],
        saira: ["Saira Stencil", "sans-serif"],
      },
      colors: {
        whiteSoft: "#FFFFFFE6",
        grayLight: "#EEEEEE",
        graySoft: "#D6D6D6",
        grayMuted: "#E0E0E0",
        oliveAccent: "#9AA23D",
        oliveAccentDark: "#7F862F",
        blackSoft: "#040404",
      },
    },
  },
  plugins: [],
};
