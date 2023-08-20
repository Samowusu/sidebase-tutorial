<script setup>
defineProps({
  user: {
    type: String, default: null
  }
})
</script>

<template>
  <nav class="sticky top-0 px-2 py-4">
    <ul class="flex flex-col items-start gap-2 whitespace-nowrap">
      <li>
        <NuxtLink href="/">
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="ic:outline-home" size="32px" />
              <span class="hidden text-lg md:inline">Home</span>
            </span>
          </IconHoverEffect>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink href="">
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="material-symbols:account-box-sharp" size="32px" />
              <span class="hidden text-lg md:inline">Profile</span>
            </span>
          </IconHoverEffect>
        </NuxtLink>
      </li>

      <li v-if="user">
        <button>
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="ph:sign-in" size="32px" class="fill-green-700" />
              <span class="hidden text-lg text-green-700 md:inline">
                Log In
              </span>
            </span>
          </IconHoverEffect>
        </button>
      </li>

      <li v-else>
        <button>
          <IconHoverEffect>
            <span class="flex items-center gap-4">
              <Icon name="ph:sign-out" size="32px" class="fill-red-700" />
              <span class="hidden text-lg text-red-700 md:inline">
                Log Out
              </span>
            </span>
          </IconHoverEffect>
        </button>
      </li>
    </ul>
  </nav>
</template>
