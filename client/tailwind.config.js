/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      input: {
        '::-webkit-datetime-edit, ::-webkit-inner-spin-button, ::-webkit-calendar-picker-indicator': {
          display: 'none',
        },
      },

      boxShadow: {
        secondary: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
    },
  },
  plugins: [],
}
