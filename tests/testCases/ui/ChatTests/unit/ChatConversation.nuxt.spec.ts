// @vitest-environment nuxt
import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import Conversation from '~/components/Chat/Conversation.vue'

describe('ChatConversation.vue', () => {
  it('component mounts - prompt submitted - prompt will be rendered', () => {
    const component = mount(Conversation, { props: { request: 'request' } })
    expect(component.html()).toContain('request')
  })

  it('prompt submitted - answer received - renders response and answer', () => {
    const component = mount(Conversation, { props: { request: 'request', answsers: ['response'] } })
    expect(component.html()).toContain('request')
    expect(component.html()).toContain('response')
  })
})
