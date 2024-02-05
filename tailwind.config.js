/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "currency": "url('./src/assets/currencyImg.jpg')",
      },
    },
  },
  plugins: [],
};
