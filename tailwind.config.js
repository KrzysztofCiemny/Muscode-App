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
        background: "#fff",
      },
    },
  },
  plugins: [],
};
