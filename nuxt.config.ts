// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite:{
    css:{
      preprocessorOptions:{
        scss:{
          additionalData: '@import "@/assets/scss/_global.scss";@import "@/assets/scss/_mixin.scss";@import "@/assets/scss/_function.scss";'
        }
      }
    }
  },
  css: [
    '~/assets/scss/front.scss',
  ]
})
