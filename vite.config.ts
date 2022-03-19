import path from 'path'
import dayjs from 'dayjs'
import { defineConfig, loadEnv } from 'vite'
import ViteVue from '@vitejs/plugin-vue'
import ViteWindiCSS from 'vite-plugin-windicss'
import ViteAutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import VitePurgeIcons from 'vite-plugin-purge-icons'
import ViteI18n from '@intlify/vite-plugin-vue-i18n'

import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin } from 'vite-plugin-style-import'

import pkg from './package.json'

const rootDir = path.resolve(__dirname, './')

export default ({ mode }) => {
  const isProd = mode === 'production'
  const processEnv = loadEnv(mode, process.cwd())
  const injectData = {
    mode,
    isProd,
    BUILD_AT: dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss'),
    BUILD_VERSION: pkg.version,
    VITE_TITLE: pkg.name,
    ...processEnv,
  }
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
    base: processEnv.VITE_BASE,
    resolve: {
      alias: {
        '@/': `${rootDir}/src/`,
      },
    },
    plugins: [
      ViteVue(),
      ViteWindiCSS(),
      VitePurgeIcons(),
      ViteAutoImport(),
      ViteComponents(),
      ViteI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [`${rootDir}/locales/**`],
      }),
      createStyleImportPlugin({
        resolves: [],
      }),
      createHtmlPlugin({
        minify: isProd,
        inject: { data: injectData },
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${rootDir}/src/styles/variables.less";`,
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      exclude: ['vue-demi'],
    },
  })
}
