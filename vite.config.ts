import path from 'path'

import dayjs from 'dayjs'
import { defineConfig, loadEnv } from 'vite'
import ViteVue from '@vitejs/plugin-vue'
import ViteHtml from 'vite-plugin-html'
import ViteWindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import VitePurgeIcons from 'vite-plugin-purge-icons'

const pathSrc = path.resolve(__dirname, './src')

export default ({ mode }) => {
  const isProdMode = mode === 'production'
  const env = {
    mode,
    isProdMode,
    built: dayjs().format('YYYY-MM-DDTHH:mm:ssZ[Z]'),
    ...loadEnv(mode, process.cwd()),
  }
  console.log(env)
  return defineConfig({
    server: {
      host: '0.0.0.0',
      port: 3101,
      proxy: {
        '/api': {
          target: 'http://localhost:7700',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@/': `${pathSrc}/`,
      },
    },
    plugins: [
      ViteVue(),
      ViteWindiCSS(),
      VitePurgeIcons(),
      ViteComponents(),
      ViteHtml({
        inject: {
          injectData: { ...env },
        },
        minify: isProdMode,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: { additionalData: `@import "${pathSrc}/styles/variables.scss";` },
        less: { additionalData: `@import "${pathSrc}/styles/variables.less";` },
      },
    },
  })
}
