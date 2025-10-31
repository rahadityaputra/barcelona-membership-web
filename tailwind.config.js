/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                barcelonaBlue: '#004D98',
                barcelonaRed: '#A50044',
                barcelonaGold: '#EDBB00',
                barcelonaYellow: '#FFED02',
                barcelonaDarkRed: '#DB0030',
            },
        },
    },
    plugins: [],
}
