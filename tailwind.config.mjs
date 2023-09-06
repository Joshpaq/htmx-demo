/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
  },
  plugins: [],
};
