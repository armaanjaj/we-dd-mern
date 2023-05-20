/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                "theme-orange": "#e64c1b",
                "theme-blue": "#002d72"
            },
            screens: {
                smallMobile: "280px",
                mobile: "320px",
                tablet: "640px",
                laptop: "1024px",
                desktop: "1280px",
            },
        },
    },
    plugins: [],
};
