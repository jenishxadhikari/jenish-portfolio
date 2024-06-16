/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        navBg: "#171923",
        navHover: "#292b34",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
