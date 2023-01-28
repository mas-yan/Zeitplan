/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','ui-sans-serif', 'system-ui'],
        'sans': ['Source Sans Pro', 'system-ui'],
        'patua': ['Patua One', 'system-ui']
      },
      "colors": {
        "cream": {
          50: "#FFFBFA",
          100: "#FFFBFA",
          200: "#FFFBFA",
          300: "#FFF6F5",
          400: "#FFF6F5",
          500: "#FFF4F2",
          600: "#FFD8D1",
          700: "#FFB1A3",
          800: "#FF7D66",
          900: "#E62200"
        },
        "primary": {
          50: "#FFEDEB",
          100: "#FFE0DB",
          200: "#FFBDB3",
          300: "#FE9E8F",
          400: "#FE7B67",
          500: "#FE5E44",
          600: "#FE2301",
          700: "#C11B01",
          800: "#7F1201",
          900: "#420900"
        },
        "dark": {
          50: "#DDDFF9",
          100: "#B6BCF1",
          200: "#717DE4",
          300: "#293AD6",
          400: "#1C2792",
          500: "#0E144A",
          600: "#0B103C",
          700: "#080C2B",
          800: "#06081E",
          900: "#02030D"
        }
      }
    },
  },
  plugins: [],
}
