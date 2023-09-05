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
      backgroundImage: {
        'home-page': "url('../public/img/girl-and-pet.png')",
      },
      screens: {
        'xl': '1440px',
      },
    },
  },
  plugins: [],
}
export default config
