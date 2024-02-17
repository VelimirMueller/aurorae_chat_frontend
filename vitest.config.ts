import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  optimizeDeps: {
    esbuildOptions: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true
        }
      }
    }
  }
})
