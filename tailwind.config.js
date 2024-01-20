/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{html,js,vue}',
    './pages/**/*.{html,js,vue}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-bg': "url('/img/Aurorae-drk.png')",
        'logo-bg': "url('/img/logo.png')",
        'card-header': "url('/img/card-bg.png')"
      }
    }
  },
  experimental: {
    optimizeUniversalDefaults: true
  },
  plugins: [],
  safelist: [
    {
      pattern: /hue-rotate-+/ // 👈  This includes all hue filters
    }
  ]
}
