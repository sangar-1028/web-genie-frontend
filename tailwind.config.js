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
      },
      screens: {
        xs: '330px',
        xs2: '453px',
        xsm: '576px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1400px',
        '3xl': '1536px'
      }
    },
  },
  plugins: [],
}