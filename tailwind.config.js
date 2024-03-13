/** @type {import('tailwindcss').Config} */
// Next UI
import { nextui } from "@nextui-org/theme";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|navbar|tabs|tab|input|spinner).js",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    fontFamily: {
      Prata: ["var(--font-prata)"],
      Plus_Jakarta_Sans: ["var(--font-plus_Jakarta_Sans)"],
    },
    extend: {
      colors: {
        grey: {
          50: "#3A3A3A",
          100: "#434343",
          150: "#3C3C3C",
        },
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#408B04",
            secondary: "#1C3E00",
          },
        },
      },
    }),
  ],
};
