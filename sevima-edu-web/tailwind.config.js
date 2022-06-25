const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue['500'],
        'primary-darker': colors.blue['600']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
