/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#FBF7F7",
        "secondary": "#F1E9E3",
        "tertiary": "#EE712B",
        "quaternary": "#DC4712",
      }
    },
  },
  plugins: [],
}

