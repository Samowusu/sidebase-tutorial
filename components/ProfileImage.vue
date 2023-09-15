<script setup>
defineProps({
  src: {
    type: String, default: null
  },
  className: { type: String, default: '' }
})
</script>

<template>
  <div
    :class="['relative h-12 w-12 overflow-hidden rounded-full', className]"
  >
    <Icon v-if="src === null" name="healthicons:ui-user-profile-outline" size="48px" />
    <img v-else :src="src" alt="profile image">
  </div>
</template>
