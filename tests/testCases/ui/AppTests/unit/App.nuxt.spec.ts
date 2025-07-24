// @vitest-environment nuxt
import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import MockPage from '~/tests/fixtures/components/MockPage.vue'
import App from '~/app.vue'

// ✅ Mock Nuxt routing internals
vi.mock('#app', async () => {
  const actual = await vi.importActual<any>('#app')
  return {
    ...actual,
    useRoute: () => ({
      path: '/',
      meta: {
        layout: 'default',
        layoutTransition: { name: 'fade' }
      },
      params: {},
      query: {}
    }),
    useRouter: () => ({
      push: vi.fn(),
      replace: vi.fn(),
      back: vi.fn(),
      currentRoute: {
        value: {
          path: '/',
          meta: {
            layout: 'default',
            layoutTransition: { name: 'fade' }
          }
        }
      }
    })
  }
})

describe('App.vue with <NuxtLayout><NuxtPage/></NuxtLayout>', () => {
  it('app.vue mounts - <NuxtLayout> exists - content will be rendered in <NuxtLayout>', () => {
    const wrapper = mount(App, {
      global: {
        stubs: {
          NuxtPage: MockPage,
          NuxtLayout: {
            template: '<div class="layout"><slot /></div>'
          }
        }
      }
    })

    expect(wrapper.html()).toContain('Mock Page Content')
    expect(wrapper.find('.layout').exists()).toBe(true)
  })
})
