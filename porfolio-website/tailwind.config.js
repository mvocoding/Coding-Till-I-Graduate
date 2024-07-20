/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-100": "#A3DEFF",
        "primary-200": "#67A8E9",
        "primary-300": "#202740",
        "primary-400": "#343E66",
        "primary-900": "#141728"
      }
    },
  },
  plugins: [
    function({ addComponents }){
    }
  ],
}

