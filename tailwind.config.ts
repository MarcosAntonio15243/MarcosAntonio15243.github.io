/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx}",
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["var(--font-roboto)", "sans-serif"],
				serif: ["var(--font-source-serif-4)", "serif"],
			},
		},
	},
	plugins: [],
};
