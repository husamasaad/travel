/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors : {
        "primary": "#DF6951",
        "secondary-bg": "#F3F3F399"
      },
      boxShadow: {
        "btnShadow": "0px 20px 35px 0px rgba(223, 105, 81, 0.15)",
        "altCardShadow" : "0px 4.32464px 51.89565px 12.97391px rgba(0, 0, 0, 0.09)",
        "cardShadow": "0px 1.85185px 3.14815px 0px rgba(0, 0, 0, 0.00), 0px 8.14815px 6.51852px 0px rgba(0, 0, 0, 0.01), 0px 20px 13px 0px rgba(0, 0, 0, 0.01), 0px 38.51852px 25.48148px 0px rgba(0, 0, 0, 0.01), 0px 64.81481px 46.85185px 0px rgba(0, 0, 0, 0.02), 0px 100px 80px 0px rgba(0, 0, 0, 0.02)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}