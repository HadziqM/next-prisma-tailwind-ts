/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      stroke: {
        idk: "dasharray",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
