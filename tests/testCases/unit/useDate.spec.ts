import { describe, it, expect } from 'vitest'
import dayjs from 'dayjs'
import { useDate } from '~/composables/useDate'

describe('useDate', () => {
  it('returns a correctly formatted date', () => {
    const result = useDate('YYYY-MM-DD')
    expect(result).toBe(dayjs().format('YYYY-MM-DD'))
  })
})
