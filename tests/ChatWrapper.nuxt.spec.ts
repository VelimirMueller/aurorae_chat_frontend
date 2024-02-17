// @vitest-environment nuxt
import { afterAll, beforeAll, it, describe, expect } from 'vitest'
import type { Server } from 'mock-socket'
import { mount } from '@vue/test-utils'
import { conf } from './config/config'
import { WsMockServer } from './utils/webSocketFactory'

import ChatWrapper from '~/components/Chat/Wrapper.vue'

describe('ChatWrapper.vue', () => {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })

  let server: Server

  beforeAll(() => {
    server = new WsMockServer(conf.WS_URL, conf.WS_API, conf.WS_PORT)
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

  it('Receives websocket messages', async () => {
    const component = mount(ChatWrapper)
    await component.vm.$nextTick()
  })

  afterAll(() => {
    server.close()
  })
})
