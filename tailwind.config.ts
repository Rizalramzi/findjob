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
      animation: {
        'skew-right': 'skewRight 4s infinite',
        'skew-left': 'skewLeft 3s infinite',
      },
      keyframes: {
        skewRight: {
          '0%, 100%': { transform: 'translateY(0) skewX(-6deg) skewY(-2deg)' },
          '50%': { transform: 'translateY(-10px) skewX(-6deg) skewY(-2deg)' },
        },
        skewLeft: {
          '0%, 100%': { transform: 'translateY(0) skewX(3deg) skewY(1deg)' },
          '50%': { transform: 'translateY(-10px) skewX(3deg) skewY(1deg)' },
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
} satisfies Config;
