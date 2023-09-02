/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#eaeaea",
      navy: "#242526",
      teal: "#1B9C85",
      gray: {
        100: "#DDDDDD",
        200: "#D9D9D9",
        500: "#9AA4AF",
        900: "#97A0A7",
      },
      pink: "#FF2E63",
      orange: "#FD6504",
      black: "#525353",
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: ["Spoqa Han Sans Neo", ...defaultTheme.fontFamily.sans],
//       },
//     },
//   },
// };
