/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "#64ffda",
        white: "#fafafa",
        gray1: "#ccd6f6",
        gray2: "#a8b2d1",
        gray3: "#8892b0",
        mainBg: "#0a192f",
        mainBg2: "#112240",
        mainBg3: "#233554",
      },
    },
  },
  plugins: [],
};
