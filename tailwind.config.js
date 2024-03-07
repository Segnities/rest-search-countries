/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
       colors: {
        'db-elements__color': 'hsl(209, 23%, 22%)',
        'vdb-bg__color': 'hsl(207, 26%, 17%)',
        'vdb-text__color': 'hsl(200, 15%, 8%)',
        'dg-input__color': 'hsl(0, 0%, 52%)',
        'vlgbg__color': 'hsl(0, 0%, 98%)',
       }
    },
  },
  plugins: [],
}

