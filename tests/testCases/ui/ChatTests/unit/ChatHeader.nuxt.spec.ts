// @vitest-environment nuxt
import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import ChatHeader from '~/components/Chat/Header.vue'

describe('ChatHeader', () => {
  it('renders correctly', () => {
    const wrapper = mount(ChatHeader)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders `awaiting response` when loading', () => {
    const wrapper = mount(ChatHeader, { props: { isLoading: true } })
    expect(wrapper.html()).toContain('awaiting response')
  })

  it('renders `awaiting response` when loading', () => {
    const wrapper = mount(ChatHeader, { props: { isLoading: false } })
    expect(wrapper.html()).toContain('awaiting prompt')
  })
})
