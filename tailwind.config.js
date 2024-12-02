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
          500: '#0077b6',
          600: '#005c8a',
          700: '#004166'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
      },
      boxShadow: {
        'brand-glow': '0 0 15px rgba(0, 119, 182, 0.3)',
        'brand-hover': '0 10px 25px rgba(0, 119, 182, 0.2)'
      }
    },
  },
  plugins: [],
}
