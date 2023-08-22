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
      },
      animation: {
        "waving-hand": "wave 3s ease-in infinite",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms"),
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#D5B1A5",
            secondary: "#BF8070",
          },
        },
      },
    }),
  ],
};
