/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E1644E',
        secondary: '#F2F3F4',
        dark: '#101010',
      },
    },
  },
  plugins: [],
}