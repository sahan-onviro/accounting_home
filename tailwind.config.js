/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        noto: '"Noto Sans", sans-serif;',
      },
      colors: {
        primary: "#FEDB00",
        secondary: "#1F1F1F",
        grey: "#E0E0E0",
      },
    },
  },
  plugins: [],
};
