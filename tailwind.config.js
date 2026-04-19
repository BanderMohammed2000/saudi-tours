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
        whiteSoft: "rgba(255, 255, 255, 0.9)",
        grayLight: "#EEEEEE",
        graySoft: "#D6D6D6",
        grayMuted: "#E0E0E0",
        oliveAccent: "#9AA23D",
        blackSoft: "#040404",
      },
    },
  },
  plugins: [],
};
