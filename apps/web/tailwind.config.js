/** @type {import('tailwindcss').Config} */

const sharedConfig = require("tailwind-config/tailwind.config.js");

module.exports = {
  ...sharedConfig,
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/assignment-ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
};
