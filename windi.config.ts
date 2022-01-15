import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'class',
  safelist: 'select-none',
  corePlugins: {
    outline: false,
  },
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'index.html'],
    exclude: ['node_modules', 'dist', 'locals', 'public', '.git'],
  },
  theme: {},
  shortcuts: {},
})
