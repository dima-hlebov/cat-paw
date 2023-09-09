import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF868E",
        secondary: "#F8F8F7",
        accent: "#1D1D1D",
      },
      screens: {
        'xl': '1440px',
      },
      borderRadius: {
        xs: "5px",
        sm: "10px",
        md: "20px"
      },
      padding: {
        sm: "10px",
        md: "20px",
        lg: "30px"
      },
      margin: {
        sm: "10px",
        md: "20px",
        lg: "30px",
        "2xl": "50px"
      },
      gap: {
        sm: "10px",
        md: "20px",
        lg: "30px",
      }
    },
  },
  plugins: [],
}
export default config
