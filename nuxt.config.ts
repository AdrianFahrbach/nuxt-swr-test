export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  routeRules: {
    '/**': { swr: 10 },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
    },
    routeRules: {
      '/**': { swr: 10 },
    },
  },

  compatibilityDate: '2024-07-18',
});
