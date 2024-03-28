// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl    : '',
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      'postcss-hexrgba'       : {},
      'postcss-lighten-darken': {},
      'autoprefixer'          : {},
    },
  },
  css    : ['~/assets/css/style.css'],
  devtools: { enabled: true }
})
