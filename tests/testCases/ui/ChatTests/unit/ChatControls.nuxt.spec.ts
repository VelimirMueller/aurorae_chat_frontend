import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Controls from '~/components/Chat/Controls.vue'

// Mock child component
vi.mock('~/components/Aurorae/Button/Type.vue', () => ({
  default: {
    name: 'AuroraeButtonType',
    template: '<button @click="$emit(\'click\')"><slot /></button>'
  }
}))

describe('Controls.vue', () => {
  it('renders input and buttons', () => {
    const wrapper = mount(Controls, { props: { isLoading: false } })
    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.findAllComponents({ name: 'AuroraeButtonType' }).length).toBe(2)
  })

  it('disables input and buttons when loading', () => {
    const wrapper = mount(Controls, { props: { isLoading: true } })
    expect(wrapper.find('input').attributes('disabled')).toBeDefined()
    wrapper.findAllComponents({ name: 'AuroraeButtonType' }).forEach((btn) => {
      expect(btn.attributes('is-disabled')).toBe('true')
    })
  })

  it('emits submit event with prompt value and resets input', async () => {
    const wrapper = mount(Controls, { props: { isLoading: false } })
    const input = wrapper.find('input')
    await input.setValue('test prompt')
    await input.trigger('keyup.enter')
    expect(wrapper.emitted('submit')).toBeTruthy()
    expect(wrapper.emitted('submit')[0][0]).toBe('test prompt')
    expect(input.element.value).toBe('')
  })

  it('does not emit submit if loading or prompt is empty', async () => {
    const wrapper = mount(Controls, { props: { isLoading: true } })
    const input = wrapper.find('input')
    await input.setValue('should not submit')
    await input.trigger('keyup.enter')
    expect(wrapper.emitted('submit')).toBeFalsy()

    const wrapper2 = mount(Controls, { props: { isLoading: false } })
    await wrapper2.find('input').trigger('keyup.enter')
    expect(wrapper2.emitted('submit')).toBeFalsy()
  })
})
