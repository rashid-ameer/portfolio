const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				md: "3rem",
				lg: "4.5rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		extend: {
			colors: {
				blue: {
					50: "#f8f9fd",
					300: "#33c5e5",
					400: "#1abde1",
					DEFAULT: "#00B6DE",
					// ...colors.blue,
				},
				dark: {
					100: "#4B5563",
					200: "#222B39",
				},
			},
			height: {
				"dynamic-full": "100dvh",
			},
			minHeight: {
				"dynamic-full": "100dvh",
			},
		},
	},
	plugins: [],
};
