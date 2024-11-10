export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F2937", // Dark Gray
        secondary: "#4B5563", // Light Gray
        accent: "#22C55E", // Green
        background: "#F3F4F6", // Light Background
        textPrimary: "#111827", // Almost Black
        textSecondary: "#6B7280", // Mid Gray
      },
      container: {
        center: true,
        padding: "15px",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

