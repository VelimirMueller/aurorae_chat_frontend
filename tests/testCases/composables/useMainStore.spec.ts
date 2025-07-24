import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach } from 'vitest'
import { useMainStore } from '~/composables/useMainStore'

describe('useMainStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('has default state', () => {
    const store = useMainStore()
    expect(store.isLoading).toBe(false)
    expect(store.isMenu).toBe(false)
  })

  it('can update isLoading', () => {
    const store = useMainStore()
    store.isLoading = true
    expect(store.isLoading).toBe(true)
  })

  it('can update isMenu', () => {
    const store = useMainStore()
    store.isMenu = true
    expect(store.isMenu).toBe(true)
  })
})
