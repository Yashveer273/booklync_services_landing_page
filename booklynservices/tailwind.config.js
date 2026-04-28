/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/landing/*.{js,ts,jsx,tsx}", // Make sure this covers your 'landing' folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}