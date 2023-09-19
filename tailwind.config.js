/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "theme-orange": "#e64c1b",
                "theme-blue": "#002d72",
            },
            screens: {
                smallMobile: "280px",
                mobile: "320px",
                tablet: "640px",
                laptop: "1024px",
                desktop: "1280px",
                largeDesktop: "1920px",
            },
        },
    },
    plugins: [],
};
