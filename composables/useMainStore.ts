import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: false as boolean,
    isMenu: false as boolean
  })
})
