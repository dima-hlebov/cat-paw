import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FF868E",
        secondary: "#F8F8F7",
        dark: "#1D1D1D",
        "light-dark": "#8C8C8C "
      },
      screens: {
        '2xl': '1440px',
        '3xl': '1920px',
      },
      borderRadius: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px"
      },
      padding: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
        "2xl": "50px",
      },
      margin: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
        xl: "40px",
        "2xl": "50px"
      },
      gap: {
        xs: "5px",
        sm: "10px",
        md: "20px",
        lg: "30px",
      },
      cursor: {
        'maxwell': 'url("../public/cursor/maxwell-cat.gif"), pointer',
      }
    },
  },
  plugins: [],
}
export default config
