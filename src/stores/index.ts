import { defineStore } from 'pinia'

type StateData = {
  count: number
  [k: string]: any
}

export const useCountStore = defineStore({
  id: 'count',
  state: (): StateData => {
    return {
      count: 0,
    }
  },
})
