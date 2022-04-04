import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  // preflight: false,
  darkMode: 'class',
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}', 'index.html'],
    exclude: ['node_modules', 'dist', 'locals', 'public', '.git'],
  },
  shortcuts: {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  theme: {},
})
