/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#861206",
        secondary: "#fff",
        thirdairy: "ffcdc8",
        "black-0": "#000",
        "light-black": "#131314",
        "very-light-dark": "#374151",
        "gray-1": "#888",
        "white-1": "#f9f9f9",
        "white-2": "#f3f4f6",
      },
      backgroundImage: {
        "mobile-wave-pattern":
          "url('../src/assets/Background/mbile-wave.webp')",
        "wave-pattern": "url('../src/assets/Background/nav-bg-wave.png')",
        "footer-pattern": "url('../src/assets/Background/footer-bg.jpeg')",
        think: "url('../src/assets/Background/think.webp')",
        watooTijay: "url('../src/assets/Background/WatooTijay.jpeg')",
      },
      backgroundColor: {
        primary: "#861206",
        secondary: "#fff",
        thirdiary: "#F9F9F9",
        fourth: "#F3F4F6",
        "semi-primary": "#F1C3BE",
        "red-primary": "#F8CCC8",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {},
      fontSize: {
        f12: "12px",
        f13: "13px",
        f14: "14px",
        f16: "16px",
        f18: "18px",
        f20: "20px",
        f24: "24px",
        f26: "26px",
      },
    },
  },
  plugins: [],
};
