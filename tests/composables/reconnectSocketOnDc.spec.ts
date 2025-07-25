import { describe, it, expect, vi } from 'vitest'
import { reconnectSocketOnDc } from '~/composables/useHandleSocket'

// @ts-ignore
// Mock WebSocket globally for testing purposes
global.WebSocket = class {
  constructor (url: string) {
    this.url = url
  }

  url
}

describe('reconnectSocketOnDc', () => {
  it('sets onclose handler that creates a new WebSocket', () => {
    const socket: any = {}
    reconnectSocketOnDc(socket)
    expect(typeof socket.onclose).toBe('function')
    socket.onclose()
    expect(socket.url).toBeUndefined() // the new socket is not assigned to the original variable
    // To test the new WebSocket creation, spy on the constructor
    const wsSpy = vi.spyOn(global, 'WebSocket')
    reconnectSocketOnDc(socket)
    socket.onclose()
    expect(wsSpy).toHaveBeenCalledWith('ws://0.0.0.0:5000/api_ws')
    wsSpy.mockRestore()
  })
})
