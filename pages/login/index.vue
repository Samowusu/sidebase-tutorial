<script setup>

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/'
  }
})

const { signIn, status, signOut } = useAuth()

const isLoggedIn = computed(() => status.value === 'authenticated')

const handleSignIn = async () => {
  await signIn('github', { callbackUrl: '/profiles/4' })
}

const handleSignOut = async () => {
  await signOut()
}
</script>

<template>
  <div class="p-10 space-y-4">
    <h1 class="text-3xl text-black">
      Login Page
    </h1>
    <button v-if="isLoggedIn" class="bg-blue-500 rounded-sm p-5 text-white" @click="handleSignOut">
      SigOut
    </button>
    <button v-else class="bg-red-500 rounded-sm p-5 text-white ml-4" @click="handleSignIn">
      SigIn With Gihub
    </button>
  </div>
</template>
