// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{vue,html,jsx,tsx}',
    './index.html',
    //
  ],
  theme: {
    extend: {
      height: {
        screen: ['100vh', '100dvh'],
      },
      minHeight: {
        screen: ['100vh', '100dvh'],
      },
      maxHeight: {
        screen: ['100vh', '100dvh'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    //
    plugin(({ addUtilities }) => {
      addUtilities({
        '.scrollbar-hidden': {
          scrollbarWidth: 'none',
          '-ms-overflow-style': 'none',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
            display: 'none',
          },
          '& *': {
            scrollbarWidth: 'none',
            '-ms-overflow-style': 'none',
          },
        },
      })
    }),
  ],
}
