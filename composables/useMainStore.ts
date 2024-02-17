import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    isLoading: ref(false),
    isMenu: false as boolean
  })
})
