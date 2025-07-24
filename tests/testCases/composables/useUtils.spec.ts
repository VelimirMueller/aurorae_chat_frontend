import { describe, it, expect } from 'vitest'
import { findObjectByKey } from '~/composables/useUtils'

describe('findObjectByKey', () => {
  it('returns the value for an existing key', () => {
    const obj = { a: 1, b: 2 }
    expect(findObjectByKey('a', obj)).toBe(1)
    expect(findObjectByKey('b', obj)).toBe(2)
  })

  it('returns undefined for a missing key', () => {
    const obj = { a: 1, b: 2 }
    expect(findObjectByKey('c', obj)).toBeUndefined()
  })

  it('works with nested objects (shallow only)', () => {
    const obj = { a: 1, b: { c: 3 } }
    expect(findObjectByKey('b', obj)).toEqual({ c: 3 })
    expect(findObjectByKey('c', obj)).toBeUndefined()
  })
})
