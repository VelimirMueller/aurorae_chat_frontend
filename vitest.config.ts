import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    coverage: {
      provider: 'v8',
      reportsDirectory: './tests/coverage',
      reporter: ['text', 'html', 'lcov'],
      include: [
        'components/**',
        'composables/**',
        'layouts/**',
        'pages/**',
        'server/**',
        'app.vue'
      ]
    }
  }
})
