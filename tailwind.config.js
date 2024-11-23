/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          100: '#D1DAE44F',
          200: '#B5C4D3',
          900: '#121712',
          950: '#111'
        },
        green: {
          100: '#D9EEE8',
          500: '#01A58A'
        }
      }
    },
  },
  plugins: [],
}

