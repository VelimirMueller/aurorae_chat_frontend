import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false as any,
    isMenu: false as boolean
  })
})
