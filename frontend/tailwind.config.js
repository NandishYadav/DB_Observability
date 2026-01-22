/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1337ec",
        "background-light": "#f6f6f8",
        "background-dark": "#0f111a",
        "accent-mint": "#0bda65",
        "accent-amber": "#fa6538",
        "card-dark": "#161b2c",
        "border-dark": "#282b39",
        "primary": "#0d59f2",
        "background-dark": "#0b0c10",
        "card-dark": "#161b22",
        "panel-dark": "#0d1117",
        "success-neon": "#39FF14",
        "warning-amber": "#FFBF00",
        "critical-red": "#FF3131"
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")],
};
