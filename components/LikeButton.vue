<script setup>
import IconHoverEffect from './IconHoverEffect.vue'

const props = defineProps({
  likedByMe: {
    type: Boolean,
    default: false
  }
})

const iconName = computed(() => {
  return props.likedByMe ? 'heartFilled' : 'heart'
})

const iconClasses = computed(() => {
  return `transition-colors duration-200 w-10 h-10  ${
    props.red
      ? 'fill-red-500'
      : 'fill-gray-500 group-hover:fill-red-500 group-focus-visible:fill-red-500'
  }`
})
</script>

<template>
  <button
    :class="[
      'group',
      '-ml-2',
      'flex',
      'items-center',
      'gap-1',
      'self-start',
      'transition-colors',
      'duration-200',
      likedByMe ? 'text-red-500' : 'text-gray-500',
      'hover:text-red-500',
      'focus-visible:text-red-500'
    ]"
  >
    <IconHoverEffect red>
      <nuxt-icon :name="iconName" :class="iconClasses" />
    </IconHoverEffect>
    <span>5</span>
  </button>
</template>
