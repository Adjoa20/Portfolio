/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    backgroundImage: {
      "landingbg":"url('/images/LandingPage.png')",
      "lpgbg":"url('/images/LPG.png')",
      "greenbg":"url('/images/GreenPage.png')",
      "neutralbg":"url('/images/Netural.png')",
    },
  },
  colors: {
    ...colors,
    primary: colors.red,
    secondary: colors.red
  }
};
export const plugins = [];
