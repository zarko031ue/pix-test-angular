/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // brand --primary / --primary-hover
        brand: { DEFAULT: "#7c3aed", hover: "#6d28d9" },
        accent: "#f59e0b",
        // --surface / --surface-elevated
        surface: { DEFAULT: "#f9fafb", raised: "#ffffff" },
        // --text-primary / --text-secondary / --text-muted
        ink: { DEFAULT: "#111827", soft: "#6b7280", faint: "#9ca3af" },
        line: "#e5e7eb", // --border
        success: "#10b981",
        danger: "#ef4444",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
