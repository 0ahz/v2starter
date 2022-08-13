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
import ViteRestart from 'vite-plugin-restart'
import ViteCompression from 'vite-plugin-compression'
import ViteBanner from 'vite-plugin-banner'

import { createHtmlPlugin } from 'vite-plugin-html'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

import * as pkg from './package.json'

const BANNER = `/**
 * name: ${pkg.name}
 * version: v${pkg.version}
 * description: ${pkg.description}
 * author: ${pkg.author}
 * homepage: ${pkg.homepage}
 * license: ${pkg.license}
**/`

const resolvePath = (path: string): string => {
  return resolve(__dirname, path)
}

export default ({ command, mode }) => {
  const isBuild = command === 'build'
  const isProduction = mode === 'production'
  const processEnv = loadEnv(mode, process.cwd())
  const injectData = {
    mode,
    isBuild,
    isProduction,
    pkgName: pkg.name,
    pkgVersion: pkg.version,
    buildTime: new Date().toISOString(),
    ...processEnv,
  }
  console.log(injectData)
  return defineConfig({
    server: {
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
        '@/': `${resolvePath('src')}/`,
      },
    },
    plugins: [
      ViteVue(),
      ViteLegacy({ targets: ['defaults', 'not IE 11'] }),
      ViteVueJsx(),
      ViteWindiCSS(),
      ViteIcons(),
      ViteAutoImport({
        dts: resolvePath('auto-imports.d.ts'),
        // imports: [],
        // resolvers: [],
      }),
      ViteComponents({
        dts: resolvePath('components.d.ts'),
        resolvers: [IconsResolver()],
      }),
      ViteI18n({
        runtimeOnly: true,
        compositionOnly: true,
        include: [`${resolvePath('src/plugins/i18n/locales')}/**`],
      }),
      ViteRestart({ restart: [] }),
      ViteCompression({
        // gzip
        ext: '.gz',
        // brotli
        // ext: '.br',
        // algorithm: 'brotliCompress',
        filter: /\.(js|css|html|svg|png)$/i,
        deleteOriginFile: false,
      }),
      ViteBanner(BANNER),
      createStyleImportPlugin({
        resolves: [],
      }),
      createHtmlPlugin({
        minify: isBuild,
        inject: { data: injectData },
      }),
      createSvgIconsPlugin({
        iconDirs: [resolvePath('src/assets/svgicons')],
        symbolId: 'svgicon-[dir]-[name]',
      }),
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import "${resolvePath(
            'src/styles/variables.less',
          )}";`,
        },
      },
    },
    optimizeDeps: {
      include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
      exclude: ['vue-demi'],
    },
  })
}
