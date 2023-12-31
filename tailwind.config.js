/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,css,js,jsx,ts,tsx}"],
  theme: {
    keyframes: {
      loading: {
        '0%': { right: '-100%' },
        '100%': { right: '0' },
        },
    },
    animation: {
      loading: 'loading 0.5s linear',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b25a40",
          secondary: "#f9d0d6",
          accent: "#3c0919",
          neutral: "#273e47",
          "base-100": "#fcf2f4",
          info: "#b25a40",
          success: "#273e47",
          warning: "#f5f5f4",
          error: "#f87272",
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
