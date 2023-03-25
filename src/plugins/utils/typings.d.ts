export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $fnName: () => string
  }
}
