/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'logo': ['Allerta Stencil'],
      'page': ['Tomorrow']
    },
    extend: {
      dropShadow: {
        'dropMenu': '0 0 20px rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}