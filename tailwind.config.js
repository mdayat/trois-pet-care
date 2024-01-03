/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			transitionDuration: {
				250: "250ms",
			},
		},
	},
};
