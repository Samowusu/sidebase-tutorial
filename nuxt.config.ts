import { setAbsoluteSqliteDatabaseUrlForPrisma } from './prisma/utils'

setAbsoluteSqliteDatabaseUrlForPrisma()

export default defineNuxtConfig({
  routeRules: {
    '/profiles/**': { ssr: false },
    '/': { ssr: true }
  },
  runtimeConfig: {
    version: '0.0.1'
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', 'nuxt-icons', 'nuxt-icon'],
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  build: {
    transpile: ['oh-vue-icons'],
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
})
