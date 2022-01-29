/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare interface Window {}

interface ImportMetaEnv {
  readonly VITE_BASE: string
  readonly VITE_TITLE: string
  readonly VITE_FAVICON_EMOJI: string
  //
  readonly VITE_PARTNER_CODE: string
  readonly VITE_APP_ID: string
  readonly VITE_REQUEST_TIMEOUT: number
  readonly VITE_ACCESS_TOKEN_KEY: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
