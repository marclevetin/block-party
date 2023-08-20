/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        orange: "#ff6600",
        blue: "#339999",
        pink: "#cc0066",
        green: "#99cc33",
        purple: "#663399",
      },
    },
  },
  plugins: [],
};
