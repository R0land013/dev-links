/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    darkMode: "class",
    content: ["./**/*.tsx"],
    plugins: [],
    theme: {
        extend: {
            colors: {
                'header-color': '#652F9E',
                'app-background': '#F1ECEC',
                'action-color': '#8C63CB',
                'hover-action-color': '#AE8AE3',
                'focus-color': '#EDE3FA',
                'text-color': '#3C125A',
                'divider-color': '#B1B2B5',
                'modal-bg-container-color': 'rgb(206, 197, 212, 0.5)',
            },
        },
    },
};