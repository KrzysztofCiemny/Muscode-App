/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "font-default": "#384a5c",
        "header-default": "#333",
        "button-active": " #862583",
        "border-default": " #b2b2b2",
        "row-background-hover": "#f5f8fa",
        "card-background": "#fff",
      },
      boxShadow: {
        "card-shadow": "2px 1px 8px 0px rgba(66, 68, 90, 0.35)",
      },
    },
  },
  plugins: [],
};
