const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        hithere: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        hithere: "hithere 5s ease-in-out infinite",
      },
      colors: {
        "yellow-0": "#fde047",
        "red-0": "#AD1917",
        footer: "#171213",
      },
      borderColor: {

      }
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#fde047",
            secondary: "#AD1917",
          },
        },
      },
      layout: {
        borderWidth: {
          medium: "1px",
        },
      },
      
    }),
  ],
};
