import type { WebsocketResponse } from '~/types'
import { scrollToElementBottom } from '~/composables/useDomUtils'

const connectChat = (): Promise<WebSocket> => {
  return new Promise((resolve) => {
    const socket = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
    resolve(socket)
  })
}

const listenToSocket = (socket: WebSocket, answers: string[], conversationContainer: HTMLElement): void => {
  if (socket) {
    socket.onmessage = (response: WebsocketResponse): void => {
      answers.push(JSON.stringify(response.data))
      scrollToElementBottom(conversationContainer)
    }
  }
}

const reconnectSocketOnDc = (socket: WebSocket): void => {
  socket.onclose = (): void => {
    socket = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
  }
}

export {
  connectChat,
  listenToSocket,
  reconnectSocketOnDc
}
