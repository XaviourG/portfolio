import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/panels/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'display': ["var(--font-main)", 'sans-serif'],
      'body': ['var(--font-main)', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        PRIMARY: '#FFFFFF',
        SECONDARY: '#7C5CD6',
        SECONDARY50: '#7C5CD650',
        HIGHLIGHT: '#7C5CD6',
        HIGHLIGHT75: '#7C5CD690',
        NEUTRAL_LIGHT: '#FFFFFF',
        NEUTRAL_LIGHT50: '#FFFFFF50',
        NEUTRAL: '#EDF2F4',
        NEUTRAL50: '#EDF2F450',
        NEUTRAL_DARK: '#8D99AE',
        BACKGROUND: '#0B051A',
        BACKGROUND_START: '#090515',
        BACKGROUND_END: '#090515',
        PERSONAL: '#442f7d',
        COMMERCIAL: '#36ebe8',
      },
    },
  },
  plugins: [],
}
export default config
