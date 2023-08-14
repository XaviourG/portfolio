import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/panels/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Barlow', 'sans-serif'],
        'body': ['Poppins', 'sans-serif']
      },
      colors: {
        PRIMARY: '#FFFFFF',
        SECONDARY: '#DCF0F6',
        SECONDARY50: '#DCF0F650',
        NEUTRAL_LIGHT: '#FFFFFF',
        NEUTRAL_LIGHT50: '#FFFFFF50',
        NEUTRAL: '#EDF2F4',
        NEUTRAL50: '#EDF2F450',
        NEUTRAL_DARK: '#8D99AE',
        BACKGROUND: '#120A28',
        BACKGROUND_START: '#080413',
        BACKGROUND_END: '#080413',
      },
    },
  },
  plugins: [],
}
export default config
