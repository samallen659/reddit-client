/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './features/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                white: '#FCFCFC',
                gray: '#DBE0E5',
            },
        },
    },
    plugins: [],
};
