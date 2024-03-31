/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    darkMode: "class",
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
