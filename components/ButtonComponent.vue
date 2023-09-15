<script setup>
const props = defineProps({
  small: Boolean,
  gray: { type: Boolean, default: false },
  className: {
    type: String,
    default: ''
  }
})

const sizeClasses = computed(() => {
  return props.small ? 'px-2 py-1' : 'px-4 py-2 font-bold'
})

const colorClasses = computed(() => {
  return props.gray ? 'bg-gray-400 hover:bg-gray-300 focus-visible:bg-gray-300' : 'bg-blue-500 hover:bg-blue-400 focus-visible:bg-blue-400'
})

</script>

<template>
  <button
    :class="['rounded-full text-white transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50',className, sizeClasses, colorClasses]"

    v-bind="props"
  >
    <slot />
  </button>
</template>
