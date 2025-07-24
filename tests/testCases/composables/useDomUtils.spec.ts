import { describe, it, expect, vi } from 'vitest'
import { scrollToElementBottom } from '~/composables/useDomUtils'

describe('scrollToElementBottom', () => {
  it('sets scrollTop to scrollHeight after timeout', () => {
    vi.useFakeTimers()
    const container = { scrollTop: 0, scrollHeight: 100 } as HTMLElement
    scrollToElementBottom(container)
    expect(container.scrollTop).toBe(0)
    vi.advanceTimersByTime(50)
    expect(container.scrollTop).toBe(100)
    vi.useRealTimers()
  })
})
