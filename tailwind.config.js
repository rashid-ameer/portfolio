const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				blue: {
					50: "#F8F9FD",
					DEFAULT: "#00B6DE",
					600: "#00A2C6",
					...colors.blue,
				},
				dark: {
					100: "#4B5563",
					200: "#222B39",
				},
			},
		},
	},
	plugins: [],
};
