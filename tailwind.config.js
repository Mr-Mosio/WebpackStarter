/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.hbs"],
  theme: {
    extend: {
      container: {
        padding : "1rem",
        center: true
      },
      colors: {
        gray: {
          30: "#1D203A4D"
        },
        orange: {
          first: "#FABB44",
          last: "#F69522"
        }
      },
      fontFamily: {
        primary : "YekanBakh"
      }
    },
  },
  plugins: [],
}
