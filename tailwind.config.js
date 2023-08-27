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
        wave: {
          "0%": { borderColor: "black", color: "black" },
          "50%": { borderColor: "white", color: "white" },
          "100%": { borderColor: "black", color: "black" },
        },
        hithere: {
          "30%": { transform: "scale(1.05)" },
          "40%, 60%": { transform: "rotate(-5deg) scale(1.1)" },
          "50%": { transform: "rotate(5deg) scale(1.1)" },
          "70%": { transform: "rotate(0deg) scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "waving-hand": "wave 10s ease-in infinite",
        hithere: "hithere 4s ease infinite",
      },
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
    }),
  ],
};
