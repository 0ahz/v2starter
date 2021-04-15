export interface IPlugin {
  name: string
  create: () => any
}
