import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Type from '~/components/Aurorae/Button/Type.vue'

describe('Type.vue', () => {
  it('renders default button text and class', () => {
    const wrapper = mount(Type, {
      global: {
        mocks: {
          findObjectByKey: vi.fn()
        }
      }
    })
    const button = wrapper.find('button')
    expect(button.text()).toBe('default')
    expect(button.classes()).toContain('btn-outline')
  })

  it('renders custom button text', () => {
    const wrapper = mount(Type, {
      global: {
        mocks: {
          findObjectByKey: vi.fn()
        }
      },
      props: { buttonText: 'Submit' }
    })
    expect(wrapper.find('button').text()).toBe('Submit')
  })

  it('applies submit type class', () => {
    const wrapper = mount(Type, {
      global: {
        mocks: {
          findObjectByKey: vi.fn()
        }
      },
      props: { buttonType: 'submit' }
    })
    expect(wrapper.find('button').classes()).toContain('btn-primary')
  })

  it('applies reset type class', () => {
    const wrapper = mount(Type, {
      global: {
        mocks: {
          findObjectByKey: vi.fn()
        }
      },
      props: { buttonType: 'reset' }
    })
    expect(wrapper.find('button').classes()).toContain('btn-secondary')
  })

  it('disables the button when isDisabled is true', () => {
    const wrapper = mount(Type, {
      global: {
        mocks: {
          findObjectByKey: vi.fn()
        }
      },
      props: { isDisabled: true }
    })
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
  })
})
