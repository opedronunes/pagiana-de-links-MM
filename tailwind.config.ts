import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "bg-dots": "url('/dot.svg')"
      },
      colors: {
        'yellow-600': '#FFF112 ',
        'red-600': '#EC3237',
        'gray-50': '#F4F3F3',
        'gray-600': '#424242'
      }
    },
  },
  plugins: [],
};
export default config;
