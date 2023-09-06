/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,css,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#435C34",
          secondary: "#83B366",
          accent: "#FA9F42",
          neutral: "#513B3C",
          "base-100": "#f5f5f4",
          info: "#3ABFF8",
          success: "#003E1F",
          warning: "red",
          error: "#C84C09",
        },
      },
      "garden",
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
