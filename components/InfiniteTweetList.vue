<script setup lang="ts">
import { useInfiniteScroll } from '@vueuse/core'

const infiniteScrollTarget = ref<HTMLElement>(null)
const data = ref([1, 2, 3, 4, 5, 6])

function onLoadMore () {
  const length = data.value.length + 1
  data.value.push(...Array.from({ length: 5 }, (_, i) => length + i))
}
useInfiniteScroll(infiniteScrollTarget, onLoadMore, { distance: 10 })
</script>

<template>
  <div ref="infiniteScrollTarget">
    <div v-for="item in data" :key="item">
      {{ item }}
    </div>
  </div>
</template>
