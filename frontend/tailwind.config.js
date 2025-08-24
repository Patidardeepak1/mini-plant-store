/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 enables class-based dark mode (toggle with "dark" class)
  theme: {
    extend: {
      boxShadow: {
        card: "0 4px 6px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
