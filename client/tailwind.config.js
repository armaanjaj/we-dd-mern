/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
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
