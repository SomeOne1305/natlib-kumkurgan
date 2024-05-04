/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem',
				screens: {
					sm: '100%',
					md: '748px',
					lg: '1004px',
					xl: '1200px',
					'2xl': '1440px',
					'3xl': '1440px',
				},
			},
			screens: {
				xs: '400px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				primary: '#222840',
				secondary: '#ecedf0',
			},
			backgroundImage: {
				crumbs: "#264DB1,url('./src/assets/patterns/moroccan.svg')",
			},
		},
	},
	darkMode: 'class',
	plugins: [],
}
