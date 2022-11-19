/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            keyframes: {
                flickerlights: {
                    "0%": { "background-color": "rgba(254, 213, 131, 0.65)" },
                    "50%": { "background-color": "rgba(252, 113, 77, 0.95)" },
                    "100%": { "background-color": "rgba(120, 67, 31, 0.85)" }
                }
            },
            animation: {
                flickerlights: "flickerlights 2.5s infinite"
            }
        }
    },
    plugins: []
};
