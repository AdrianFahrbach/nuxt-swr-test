export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],

  routeRules: {
    '/**': { swr: 10 },
  },
  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/page-1', '/page-2', '/page-3'],
    },
    routeRules: {
      '/**': { swr: 10 },
    },
  },

  compatibilityDate: '2024-07-18',
});
