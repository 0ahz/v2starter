import path from 'path'

import dayjs from 'dayjs'
import { defineConfig, loadEnv } from 'vite'
import ViteVue from '@vitejs/plugin-vue'
import ViteHtml from 'vite-plugin-html'
import ViteWindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'
import VitePurgeIcons from 'vite-plugin-purge-icons'
import ViteI18n from '@intlify/vite-plugin-vue-i18n'

const rootDir = path.resolve(__dirname, './')

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
        '@/': `${rootDir}/src/`,
      },
    },
    plugins: [
      ViteVue(),
      ViteWindiCSS(),
      VitePurgeIcons(),
      ViteComponents(),
      ViteI18n({
        include: `${rootDir}/locales/**`,
      }),
      ViteHtml({
        inject: {
          injectData: { ...env },
        },
        minify: isProdMode,
      }),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${rootDir}/src/styles/variables.scss";`,
        },
        less: {
          additionalData: `@import "${rootDir}/src/styles/variables.less";`,
        },
      },
    },
  })
}
