import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import ViteVue from '@vitejs/plugin-vue'
import ViteVueJsx from '@vitejs/plugin-vue-jsx'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteWindiCSS from 'vite-plugin-windicss'
import ViteAutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import ViteIcons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ViteI18n from '@intlify/vite-plugin-vue-i18n'

import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import * as pkg from './package.json'

const rootDir = resolve(__dirname, './')

export default ({ mode }) => {
  const isProd = mode === 'production'
  const processEnv = loadEnv(mode, process.cwd())
  const injectData = {
    mode,
    isProd,
    BUILD_TIME: new Date().toISOString(),
    BUILD_VERSION: pkg.version,
    VITE_TITLE: pkg.name,
    ...processEnv,
  }
  console.log(injectData)
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
      ViteLegacy({ targets: ['defaults', 'not IE 11'] }),
      ViteVueJsx(),
      ViteWindiCSS(),
      ViteIcons(),
      ViteAutoImport({
        dts: `${rootDir}/auto-imports.d.ts`,
        // imports: [],
        // resolvers: [],
      }),
      ViteComponents({
        dts: `${rootDir}/components.d.ts`,
        resolvers: [IconsResolver()],
      }),
      ViteI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [`${rootDir}/src/plugins/i18n/locales/**`],
      }),
      createStyleImportPlugin({
        resolves: [],
      }),
      createHtmlPlugin({
        minify: isProd,
        inject: { data: injectData },
      }),
      createSvgIconsPlugin({
        iconDirs: [`${rootDir}/src/assets/svgicons`],
        symbolId: 'svgicon-[dir]-[name]',
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
