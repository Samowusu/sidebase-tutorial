<script setup>
import FollowingTweets from '../components/FollowingTweets.vue'
import RecentTweets from '../components/RecentTweets.vue'

const selectedTabState = ref('Recent')
// const selectedTabState = useState('Tab', () => 'Recent')

const TABS = ['Recent', 'Following']

const handleToggleTab = (tab) => {
  selectedTabState.value = tab
}
</script>

<template>
  <div>
    <header className="sticky top-0 z-10 border-b bg-white pt-2">
      <h1 className="mb-2 px-4 text-lg font-bold">
        Home
      </h1>

      <div v-for="tab in TABS" :key="tab" className="flex">
        <button
          :class="['focus-visible:bg-gray-20 flex-grow p-2 hover:bg-gray-200', tab === selectedTabState ? 'border-b-4 border-b-blue-500 font-bold' : '']"
          @click="handleToggleTab(tab)"
        >
          {{ tab }}
        </button>
      </div>
    </header>
    <NewTweetForm />
    <RecentTweets v-if="selectedTabState === 'Recent'" />
    <FollowingTweets v-else />
  </div>
</template>
