import { resolve } from 'path'
import { format } from 'date-fns'
import { loadEnv } from 'vite'
import { defineConfig } from 'vitest/config'
import ViteVue from '@vitejs/plugin-vue'
import ViteVueJsx from '@vitejs/plugin-vue-jsx'
import ViteLegacy from '@vitejs/plugin-legacy'
import ViteAutoImport from 'unplugin-auto-import/vite'
import ViteComponents from 'unplugin-vue-components/vite'
import ViteIcons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ViteI18n from '@intlify/unplugin-vue-i18n/vite'
import ViteFonts from 'unplugin-fonts/vite'

import { VitePWA } from 'vite-plugin-pwa'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import * as pkg from './package.json'

const resolvePath = (path: string): string => {
  return resolve(__dirname, path)
}

export default ({ command, mode }) => {
  const isBuild = command === 'build'
  const env = loadEnv(mode, process.cwd(), '')
  const viteEnv = loadEnv(mode, process.cwd())
  const injectData = {
    isBuild,
    pkgName: pkg.name,
    pkgVersion: pkg.version,
    buildTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss-SSS'),
    ...viteEnv,
  }
  console.log(injectData)
  return defineConfig({
    server: {
      port: 3101,
      proxy: {
        '/api': {
          target: env.DEV_HOST,
          changeOrigin: true,
          // rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@/': `${resolvePath('src')}/`,
      },
    },
    plugins: [
      ViteVue(),
      ViteLegacy({ targets: ['defaults', 'not IE 11'] }),
      ViteVueJsx(),
      ViteIcons({
        // experimental
        autoInstall: true,
      }),
      ViteAutoImport({
        dts: resolvePath('src/types/auto-imports.d.ts'),
        imports: [
          'vue',
          'vue-router',
          'vue-i18n',
          '@vueuse/head',
          '@vueuse/core',
          //
        ],
        dirs: [],
        vueTemplate: true,
        eslintrc: { enabled: true },
      }),
      ViteComponents({
        dts: resolvePath('src/types/auto-components.d.ts'),
        resolvers: [IconsResolver()],
      }),
      VitePWA({
        includeAssets: ['favicon.svg', 'apple-touch-icon.svg', 'mask-icon.svg'],
        manifest: {
          name: viteEnv.VITE_TITLE,
          short_name: viteEnv.VITE_TITLE,
          description: viteEnv.VITE_TITLE,
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        registerType: 'autoUpdate',
        selfDestroying: true,
        devOptions: {
          // enabled: true,
        },
      }),
      ViteI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [`${resolvePath('src/plugins/i18n/locales')}/**`],
      }),
      ViteFonts(),
      createHtmlPlugin({
        minify: isBuild,
        inject: { data: injectData },
      }),
      createSvgIconsPlugin({
        iconDirs: [resolvePath('src/assets/svgicons')],
        symbolId: 'svgicon-[dir]-[name]',
      }),
    ],
    // https://github.com/vitest-dev/vitest
    test: {
      include: ['test/**/*.test.ts', 'test/**/*.spec.ts'],
      environment: 'jsdom',
      deps: {
        inline: ['@vue', '@vueuse', 'vue-demi'],
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      exclude: ['vue-demi'],
    },
  })
}
