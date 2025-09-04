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
          pink: '#D2691E', // Rojo terracota que combina mejor con la paleta
          cream: '#FFF8DC',
          brown: '#503114',  //#D2691E
          gold: '#FFD700'
        }
      }
    },
  },
  plugins: [],
}
