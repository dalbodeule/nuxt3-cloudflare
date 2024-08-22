// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-22',
  devtools: { enabled: true },
  modules: ["@nuxtjs/turnstile", "@nuxthub/core", "@nuxt/eslint"]
})