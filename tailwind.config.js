/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A",
        secondary: "#F97316",
        neutral: "#F3F4F6",
        darkBg: "#1F2937",
        darkNeutral: "#374151",
      },

      // colors: {
      //   primary: "#EA580C",
      //   secondary: "#4F46E5",
      //   neutral: "#E5E7EB",
      //   darkBg: "#0F172A",
      //   darkNeutral: "#1E293B",
      // },
    },
  },
  plugins: [],
};
