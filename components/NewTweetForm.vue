<script setup>
import ButtonComponent from './ButtonComponent.vue'

const tweet = ref('')

</script>

<template>
  <form
    class="flex flex-col gap-2 border-b px-4 py-2"
  >
    <div class="flex gap-4">
      <ProfileImage />
      <textarea
        v-model="tweet"
        name="tweet"
        class="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        placeholder="What's happening?"
      />
    </div>
    <ButtonComponent class-name="self-end">
      Tweet
    </ButtonComponent>
  </form>
  <p>{{ tweet }}</p>
</template>
