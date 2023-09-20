/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
	],
	theme: {
		colors: {
			current: 'currentColor',
			cinnabar: '#E0492B',
			alabaster: '#EDEBE8',
			'chinese-black': '#161616',
			onyx: '#3C3C3F',
			'raisin-black': '#2A2A2D',
			lime: '#DBF447'
		},
		fontFamily: {
			silka: ['Silka', 'Roboto'],
			inter: ['Inter', 'Roboto'],
		},
		extend: {},
	},
	plugins: [],
}
