// @vitest-environment nuxt
import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import Conversation from '~/components/Chat/Conversation.vue'

describe('ChatConversation.vue', () => {
  it('renders requests', () => {
    const component = mount(Conversation, { props: { request: 'request' } })
    expect(component.html()).toContain('request')
  })

  it('can wait for responses', () => {
    const component = mount(Conversation, { props: { request: 'request', answsers: [''] } })
    expect(component.html()).toContain('request')
    expect(component.html()).not.toContain('response')
  })

  it('can render the correct response', () => {
    const answers = ['test', 'number_1']
    const index = 1
    const component = mount(Conversation, { props: { request: 'request', answers, index } })
    expect(answers.length - 1).toBe(index)
    expect(component.text()).toContain(answers[index])
  })
})
