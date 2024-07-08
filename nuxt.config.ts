// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-06',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Aprel',
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: 'https://api.kinopoisk.dev/v1.4',
      apiKey: 'WQFSW3N-AD84MPY-J02PSNX-HYX1THC',
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/ui',
        global: true,
      },
      '~/components',
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  css: ['~/assets/style/index.scss'],
  typescript: {
    // typeCheck: true,
    strict: true,
  },
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        arrowParens: true,
      },
    },
    checker: true,
  },
})
