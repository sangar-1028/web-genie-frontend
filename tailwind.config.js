/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrument: "Instrument Sans",
        playfair: "Playfair Display"
      }
    },
  },
  plugins: [],
}