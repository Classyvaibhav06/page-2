/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rose:  '#e8536a',
        gold:  '#f5c842',
        primary: '#C41E3A',
        'primary-light': '#e8536a',
      },
      fontFamily: {
        inter:    ['Inter', 'system-ui', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
