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
			lime: '#DBF447',
			white: '#FFF'
		},
		fontFamily: {
			silka: ['Silka', 'Roboto'],
			inter: ['Inter', 'Roboto'],
		},
		// Force below class to be loaded during build phase so that they can be
		// used dynamically (nu-logo).
		safelist: [
			'text-lime',
			'text-cinnabar',
			'text-chinese-black',
			'text-onyx',
			'text-raisin-black',
			'text-lime',
			'bg-lime',
			'bg-cinnabar',
			'bg-chinese-black',
			'bg-onyx',
			'bg-raisin-black',
			'bg-lime',
		],

		extend: {},
	},
	plugins: [],
}
