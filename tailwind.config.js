/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Add your custom color definitions here
        'primary': '#f6f5f8',
        'secondary': '#00b7aa',
        'text-color':'#333e48'
      },
    },
  },
  plugins: [],
}