/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primaryBlue': '#1849A9',
        'secondaryBlue': '#2E90FA',
        'navBarHoverBlue': '#175CD3'
      }
    },
  },
  plugins: [],
}

