// @vitest-environment nuxt
import { expect, it, describe } from 'vitest'
import { mount } from '@vue/test-utils'

import NuxtLayout from '~/layouts/default.vue'

describe('NuxtLayout', () => {
  describe('navbar', () => {
    it('layout mounted - navbar rendered - contains a logo', () => {
      const component = mount(NuxtLayout)
      const navbar = component.find('nav')
      const logo = navbar.find('img')

      expect(navbar.exists()).toBe(true)
      expect(logo.exists()).toBe(true)
      expect(logo.attributes('alt')).toContain('Aurorae logo')
    })

    it('layout mounted - navbar rendered - contains a menu', () => {
      const component = mount(NuxtLayout)
      const navbar = component.find('nav')
      const menuButton = navbar.find('button')

      expect(navbar.exists()).toBe(true)
      expect(menuButton.exists()).toBe(true)
      expect(menuButton.attributes('aria-label')).toContain('Side menu toggle')
    })

    it('layout mounted - navbar rendered - contains a `back to app` link', () => {
      const component = mount(NuxtLayout)
      const navbar = component.find('nav')
      const links = navbar.findAll('a')

      expect(navbar.exists()).toBe(true)
      const backToAppLink = links.find(link => link.attributes('href') === '/')
      expect(backToAppLink).toBeDefined()
      expect(backToAppLink?.text()).toContain('back to app')
    })

    it('layout mounted - navbar rendered - contains a `The Aurorae Project` link in the logo', () => {
      const component = mount(NuxtLayout)
      const navbar = component.find('nav')
      const link = navbar.find('nav a')
      const logoLink = navbar.find('a img')

      expect(logoLink.exists()).toBe(true)
      expect(link.attributes('href')).toBe('#')
      expect(link.text()).toContain('The Aurorae Project')
    })
  })

  describe('footer', () => {
    it('layout mounted - footer rendered - contains a `The Aurorae Project` link', () => {
      const component = mount(NuxtLayout)
      const footer = component.find('footer')

      expect(footer.exists()).toBe(true)
      expect(footer.text()).toContain('© 2023 The Aurorae Project. All rights reserved.')
    })
  })
})
