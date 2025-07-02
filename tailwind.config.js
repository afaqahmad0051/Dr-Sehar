/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8f9fa",
          100: "#f1f3f4",
          200: "#e8eaed",
          300: "#dadce0",
          400: "#bdc1c6",
          500: "#9aa0a6",
          600: "#80868b",
          700: "#5f6368",
          800: "#3c4043",
          900: "#202124",
        },
        accent: {
          50: "#ffffff",
          100: "#f8f9fa",
          200: "#f1f3f4",
          300: "#e8eaed",
          400: "#dadce0",
          500: "#9aa0a6",
          600: "#5f6368",
          700: "#3c4043",
          800: "#202124",
          900: "#000000",
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
