import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    filters: {
      hueFilter: ref(0),
      filterCount: ref(0)
    }
  }),

  actions: {
    /**
     * Sets the value of the hue filter from the store.
     * @param {Number} filterValue
     */
    setHueFilter (filterValue: number): void {
      this.filters.hueFilter = filterValue

      this.filters.filterCount += 1
    }
  }
})
