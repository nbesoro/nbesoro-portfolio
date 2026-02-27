import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "white": "#ffffff",

        "dark": {
          "50": "#FDFDFD",
          "100": "#F3F3F3",
          "200": "#E7E7E7",
          "300": "#BABABA",
          "400": "#757575",
          "500": "#191919",
          "600": "#151212",
          "700": "#120C0D",
          "800": "#0E0709",
          "900": "#0C0407",
        },

        "blue": {
          "50": "#E5F3FC",
          "100": "#D1E4F7",
          "200": "#A6C8F0",
          "300": "#719BD3",
          "400": "#466CA7",
          "500": "#19376D",
          "600": "#122A5D",
          "700": "#0C1F4E",
          "800": "#07153F",
          "900": "#040E34",
        },

      },
    },
  },
  plugins: [],
}
export default config
