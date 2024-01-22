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
			transparent: 'transparent',
			cinnabar: '#E0492B',
			alabaster: '#EDEBE8',
			silver: '#E1E0DD',
			'dark-black': '#000000',
			'chinese-black': '#161616',
			onyx: '#3C3C3F',
			'raisin-black': '#2A2A2D',
			lime: '#DBF447',
			white: '#FFF',
		},
		fontFamily: {
			silka: ['Silka', 'Roboto'],
			inter: ['Inter', 'Roboto'],
		},
		container: {
			center: true
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
			{pattern: /bg-.*/},
		],

		extend: {
			containers: {
				'xs': '320px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
			},
		},
		textFillColor: theme => theme('borderColor'),
		textStrokeColor: theme => theme('borderColor'),
		textStrokeWidth: theme => theme('borderWidth'),
		paintOrder: {
			'fsm': { paintOrder: 'fill stroke markers' },
			'fms': { paintOrder: 'fill markers stroke' },
			'sfm': { paintOrder: 'stroke fill markers' },
			'smf': { paintOrder: 'stroke markers fill' },
			'mfs': { paintOrder: 'markers fill stroke' },
			'msf': { paintOrder: 'markers stroke fill' },
		},
	},
	plugins: [
		require('tailwindcss-text-fill-stroke'),
		require('@tailwindcss/container-queries')
	],
}
