const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{ 
        violet: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        blue: colors.blue,
        indigo: colors.indigo,
        gray: colors.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
