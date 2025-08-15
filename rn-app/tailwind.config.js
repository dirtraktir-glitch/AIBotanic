/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
	presets: [require('nativewind/tailwind')],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2e7d32',
					light: '#66bb6a',
					extra: '#a5d6a7',
				},
			},
		},
	},
};