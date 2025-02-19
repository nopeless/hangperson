// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // this has to be true for static generation to work properly
  ssr: true, 
  nitro: {
    // static: true
  }
})
