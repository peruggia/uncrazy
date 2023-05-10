export default defineNuxtConfig({
  typescript: {
    shim: false,
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ['@vueuse/nuxt'],

  devtools: {
    enabled: process.env.NODE_ENV === 'development',
  },
})
