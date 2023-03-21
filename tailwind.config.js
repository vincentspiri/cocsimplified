/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      transformOrigin: {
        'fifty': '50% 50%',
      },
      animation: {
        "card-enter": "enter 400ms ease",
      },
      keyframes: {
        enter: {
          "0%": { opacity: 0, transform: 'scale(0.5)' },
          "100%": { opacity: 1, transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}