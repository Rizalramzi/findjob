import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main : "#0D7678",
        dark : "#2F2F2F",
        'light-dark': 'rgba(47, 47, 47, 0.5)',
      },
      fill: {
        dark: "#2F2F2F", // Untuk mengganti warna SVG saat di-hover
      },
    },
  },
  plugins: [],
} satisfies Config;
