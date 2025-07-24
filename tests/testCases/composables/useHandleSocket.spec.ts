import { describe, it, expect, vi } from 'vitest'
import { connectChat } from '~/composables/useHandleSocket'
import MockPage from '~/tests/fixtures/components/MockPage.vue'

vi.mock('~/composables/useDomUtils', () => ({
  scrollToElementBottom: vi.fn()
}))

// @ts-ignore
globalThis.WebSocket = class {
  static readonly CONNECTING = 0
  static readonly OPEN = 1
  static readonly CLOSING = 2
  static readonly CLOSED = 3

  constructor (url: string) {
    this.url = url
  }

  url: string
}

describe('connectChat', () => {
  it('returns a WebSocket instance with correct url', async () => {
    const ws = await connectChat()
    expect(ws).toBeInstanceOf(WebSocket)
    expect(ws.url).toBe('ws://0.0.0.0:5000/api_ws')
  })
})

describe('listenToSocket', () => {
  it('sets onmessage and pushes data to answers', () => {
    const answers: string[] = []
    const socket: any = {}
    listenToSocket(socket, answers, MockPage.container)
    expect(typeof socket.onmessage).toBe('function')
    // Simulate a message
    socket.onmessage({ data: { foo: 'bar' } })
    expect(answers.length).toBe(1)
    expect(answers[0]).toContain('foo')
  })
})

describe('reconnectSocketOnDc', () => {
  it('sets onclose handler that creates a new WebSocket', () => {
    // Save the original WebSocket
    const OriginalWebSocket = globalThis.WebSocket
    // Mock WebSocket constructor
    const mockWebSocket = vi.fn(function (this: any, url: string) {
      this.url = url
    })
    globalThis.WebSocket = mockWebSocket as any

    const ws = new OriginalWebSocket('ws://0.0.0.0:6000/api_ws')
    reconnectSocketOnDc(ws)
    // @ts-expect-error - throws error hence this can be seen as workaround
    ws.onclose() // Simulate the onclose event
    expect(mockWebSocket).toHaveBeenCalledWith('ws://0.0.0.0:5000/api_ws')

    // Restore the original WebSocket
    globalThis.WebSocket = OriginalWebSocket
  })
})
