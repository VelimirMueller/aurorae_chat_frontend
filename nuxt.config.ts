// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/css/global.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/test-utils/module'
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true
  },
  nitro: {
    preset: 'static' // forces static output
  }
})
