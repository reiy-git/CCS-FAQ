/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            carbon: '#222222',
            tiger: '#FE6123',
            paprika: '#E2551E',
            brandy: '#74361E',
            ochre: '#C64919',
          }
    },
  },
  plugins: [],
}
