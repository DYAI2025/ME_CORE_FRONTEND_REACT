/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0f13',
        panel: '#121821',
        text: '#E6EDF5',
        accent: '#F2C14E',
        danger: '#F9625F',
      }
    },
  },
  plugins: [],
}
