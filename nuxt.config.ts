// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@import "@/assets/scss/function.scss";'
        }
      }
    }
  },
  css: [
    '~/assets/scss/style.scss',
  ]
})
