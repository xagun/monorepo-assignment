/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "../../packages/assignment-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
