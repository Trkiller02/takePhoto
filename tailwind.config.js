// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(alert|button|card|dropdown|image|input|kbd|link|modal|navbar|pagination|scroll-shadow|skeleton|popover|user|ripple|spinner|menu|divider|form|avatar).js"
  ],
	theme: {
		extend: {},
	},
	darkMode: "class",
	plugins: [nextui()],
};
