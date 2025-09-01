/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados para la pastelería
        pastel: {
          pink: '#FFB6C1',
          cream: '#FFF8DC',
          brown: '#D2691E',
          gold: '#FFD700'
        }
      }
    },
  },
  plugins: [],
}
