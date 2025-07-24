module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxtjs/eslint-config-typescript'],
  rules: {
    'vue/html-closing-bracket-newline': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/multi-word-component-names': 0
  },
  ignorePatterns: ['.nuxt/**/*']
}
