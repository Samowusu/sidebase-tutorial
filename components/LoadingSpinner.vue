<script setup>
const props = defineProps({
  big: { type: Boolean, default: false }
})

const spinnerSize = props.big ? '64px' : '40px'
</script>

<template>
  <div>
    <div class="flex justify-center w-fit animate-spin">
      <Icon name="ic:outline-refresh" :size="spinnerSize" />
    </div>
  </div>
</template>
