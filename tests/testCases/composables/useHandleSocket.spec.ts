import { beforeAll, describe, it, expect, vi } from 'vitest'
import { scrollToElementBottom } from '~/composables/useDomUtils'

vi.mock('~/composables/useDomUtils', () => ({
  scrollToElementBottom: vi.fn().mockReturnValue({ test: 'mocked scroll' })
}))
describe('connect/reconnect to socket tests', () => {
  let mockWebSocket: any
  let originalWebSocket: any

  beforeAll(() => {
    mockWebSocket = vi.fn(function (this: any, url: string) {
      this.url = url
    })
    globalThis.WebSocket = mockWebSocket
    originalWebSocket = globalThis.WebSocket
  })

  it('websocket sever runs - request ok - chat connection established', () => {
    connectChat()
    expect(mockWebSocket).toHaveBeenCalledWith('ws://0.0.0.0:5000/api_ws')

    // Restore the original WebSocket
    globalThis.WebSocket = originalWebSocket
  })

  it('websocket sever runs - request ok and chat connection established - returns a successful response', () => {
    // Use a plain object as the socket
    const socket: any = {}
    listenToSocket(socket, [], {} as HTMLElement)
    expect(mockWebSocket).toHaveBeenCalledWith('ws://0.0.0.0:5000/api_ws')

    // Restore the original WebSocket
    globalThis.WebSocket = originalWebSocket
  })

  it('sets onmessage and pushes data to answers, calls scrollToElementBottom', () => {
    const answers: string[] = []
    const socket: any = {}
    listenToSocket(socket, answers, {} as any)
    expect(typeof socket.onmessage).toBe('function')
    // Simulate a message
    socket.onmessage({ data: { foo: 'bar' } })
    expect(answers.length).toBe(1)
    expect(answers[0]).toContain('foo')
    expect(scrollToElementBottom).toHaveReturnedWith({ test: 'mocked scroll' })
  })

  it('websocket sever runs - request ok - reconnect to chat successful', () => {
    // Use a plain object as the socket
    const socket: any = {}
    reconnectSocketOnDc(socket)
    socket.onclose() // Simulate the onclose event

    expect(mockWebSocket).toHaveBeenCalledWith('ws://0.0.0.0:5000/api_ws')

    // Restore the original WebSocket
    globalThis.WebSocket = originalWebSocket
  })
})
