/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
    theme: {
        colors: {
            primary: "#4D46FA",
            orange: "#F06336",
            white: "#fff",
            black: "#000",
        },
        extend: {
            backgroundImage: {
                homepage: "url('./src/assests/image/homepage.jpg')",
            },
        },
    },
    plugins: [],
};
