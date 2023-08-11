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
      colors: {
        PRIMARY: '#0A9396',
        SECONDARY: '#0A9396',
        NEUTRAL_LIGHT: '',
        NEUTRAL: '',
        NEUTRAL_DARK: '',
        BACKGROUND: '#0A9396',
        BACKGROUND_START: '#000000',
        BACKGROUND_END: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
export default config
