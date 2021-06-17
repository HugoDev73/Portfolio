// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#0F3057',
        secondary: '#E94560',
        fondo: '#111827'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}