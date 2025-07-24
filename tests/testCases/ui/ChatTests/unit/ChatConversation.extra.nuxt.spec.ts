import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Conversation from '~/components/Chat/Conversation.vue'

// Mock useDate composable
vi.mock('~/composables/useDate', () => ({
  useDate: () => '12:34'
}))

describe('Conversation.vue', () => {
  it('renders user prompt and timestamp', () => {
    const wrapper = mount(Conversation, {
      props: { request: 'Hello', answers: ['Hi!'], index: 0 }
    })
    expect(wrapper.html()).toContain('YOU: (12:34)')
    expect(wrapper.html()).toContain('Hello')
  })

  it('renders answer at given index', () => {
    const wrapper = mount(Conversation, {
      props: { request: 'Q', answers: ['A1', 'A2'], index: 1 }
    })
    expect(wrapper.html()).toContain('AURORAE:')
    expect(wrapper.html()).toContain('A2')
  })
})
