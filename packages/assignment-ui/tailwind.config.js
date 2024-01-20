/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: ["./**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        softPink: "#ef89b1",
      },
    },
  },
};
