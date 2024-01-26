/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        dmsans: "DM Sans",
        singleday: "Single Day"
      }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // }
}