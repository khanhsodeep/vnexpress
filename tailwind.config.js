/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        14: "14px",
      },
      colors: {
        'menu-gray': '#757575;',
      },
    },
  },
  plugins: [],
}