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
      },
      animation: {
        'appearq': 'appearq 0.7s ease-out'
      },
      keyframes: {
        appearq: {
          '0%': {
            opacity: 0,
            transform: 'translateY(60px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          }
        }
      }
    },

  },
  plugins: [],
}

