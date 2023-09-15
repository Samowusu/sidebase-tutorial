<script setup lang="ts">
definePageMeta({ middleware: 'auth' })
</script>

<template>
  <div>
    <header class="sticky top-0 z-10 flex items-center border-b bg-white px-4 py-2">
      <NuxtLink href="" class-name="mr-2">
        <IconHoverEffect>
          <Icon name="formkit:arrowleft" size="24px" />
        </IconHoverEffect>
      </NuxtLink>
      <ProfileImage class-name="flex-shrink-0" />
      <div class="ml-2 flex-grow">
        <h1 class="text-lg font-bold">
          NKB
        </h1>
        <div class="text-gray-500">
          other useful info
        </div>
      </div>
      <FollowButton
        :is-following="false"
        :is-loading="true"
      />
    </header>
    <main>
      <InfiniteTweetList />
    </main>
  </div>
</template>
