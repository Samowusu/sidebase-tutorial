export default defineNuxtRouteMiddleware((to, from) => {
  const { status } = useAuth()
  console.log('signing in....')
  if (status.value === 'authenticated') {
    console.log('user signed in...')
    return
  }
  return navigateTo('/login')
})
