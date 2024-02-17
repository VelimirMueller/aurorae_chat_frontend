// @vitest-environment nuxt
import { beforeAll, it, describe, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { conf } from './config/config'
import { WsMockServer } from './utils/webSocketFactory'

import ChatWrapper from '~/components/Chat/Wrapper.vue'

describe('Check if ChatWrapper.vue behaves and mounts correctly', () => {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })

  beforeAll(() => {
    const server = new WsMockServer(conf.WS_URL, conf.WS_API, conf.WS_PORT)
    server.on('message', (socket) => {
      socket.send('hi there, im a mock websocket server.')
    })
  })

  it('Check if date header is set in correct format', () => {
    const dateHeader = mount(ChatWrapper).find('#date')
    expect(dateHeader.text()).toBe(formattedDate)
  })

  it('Renders Card Header Text', () => {
    const header = mount(ChatWrapper).find('#chatHeader')
    const chatHeaderDefaultTextSegment = 'STATUS'
    expect(header.text().indexOf(chatHeaderDefaultTextSegment)).not.toBe(-1)
  })

  it('Has Send and clear prompt buttons', () => {
    const component = mount(ChatWrapper).find('#controls')
    const componentHtml = component.html()
    expect(component.findAll('button').length).toBe(2)
    expect(componentHtml).toContain('SEND')
    expect(componentHtml).toContain('clear prompt')
  })
})
