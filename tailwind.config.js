/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        s9: "100%",
        res: "15vw",
      },
      width: {
        s9: "99%",
        res: "20vw",
      },
      fontSize: {
        vs: "0.5rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
