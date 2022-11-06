import { defineStore } from 'pinia'

type CountState = {
  count: number
  [k: string]: any
}

export const useCountStore = defineStore({
  id: 'count',
  state: (): CountState => {
    return {
      count: 0,
    }
  },
})
