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
        'primary-darker': colors.blue['600'],
        danger: colors.red['600'],
        'icon-color': colors.slate['500']
      },
      animation: {
        'slide-to-right': 'slide-to-right-keyframe 500ms'
      },
      keyframes: {
        'slide-to-right-keyframe': {
          '0%': { left: '-20rem' },
          '100%': { left: '0' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
