/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppins': ['Poppins', 'sans-serif'],
        'BebasNeue': ['Bebas Neue', 'sans-serif'],
        'DMSans': ['DM Sans', 'sans-serif'],
        'Lato': ['Lato', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
      },
      colors: {
        'primary': '#16A75C',
        'second': '#1E88E5',
        'outline': '#9E9E9E',
      }
    },
  },
  plugins: [],
}
