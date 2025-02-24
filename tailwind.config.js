import { theme } from "./src/theme/theme"

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "selector",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: "1rem",
            },
            colors: theme,
            fontSize: {
                xs: "12px",
                sm: "14px",
                base: "16px",
                md: "18px",
                lg: "20px",
                xl: "24px",
                "2xl": "30px",
                "3xl": "36px",
                "4xl": "48px",
                "5xl": "60px",
                "6xl": "72px",
                "7xl": "96px",
                "8xl": "128px",
                "9xl": "160px",
            },
        },
        keyframes: {
            question: {
                "0%": { opacity: "0%" },
                "100%": { opacity: "100%" },
            },
            pulse: {
                "0%": { opacity: "0%" },
                "100%": { opacity: "100%" },
            },
            spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
        },
        animation: {
            question: "question 0.5s ease-out forwards",
            pulse: "pulse 0.8s ease-out infinite alternate",
            spin: "spin 1s linear infinite",
        },
    },
    plugins: [],
}
/*
    screens: {
                sm: "640px",
                md: "768px",
                lg: "968px",
                xl: "1280px",
                "2xl": "1536px",
            },
*/
