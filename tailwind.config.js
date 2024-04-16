/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        k2d: ["K2D", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        grypen: ["Qwitcher Grypen", "cursive"],
      },
    },
  },
  plugins: [],
};
