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
  modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@huntersofbook/naive-ui-nuxt', 'nuxt-icons', 'nuxt-icon', '@sidebase/nuxt-auth'],
  auth: {
    provider: {
      type: 'authjs'
    }
  },
  extends: ['@sidebase/core'],
  typescript: {
    shim: false
  },
  build: {
    transpile: ['oh-vue-icons', 'trpc-nuxt'],
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
