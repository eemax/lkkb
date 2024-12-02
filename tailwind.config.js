/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-cyan': {
          400: '#00b4d8',
          600: '#0077b6'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
