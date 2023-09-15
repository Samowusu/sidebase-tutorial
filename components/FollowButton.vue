<script setup>
defineProps({
  isFollowing: {
    type: Boolean, default: false
  },
  isLoading: { type: Boolean, default: false }
})

const handleClick = () => {
  alert('clicked')
}
</script>

<template>
  <ButtonComponent :disabled="isLoading" @click="handleClick">
    {{ isFollowing ? "Unfollow" : "Follow" }}
  </ButtonComponent>
</template>
