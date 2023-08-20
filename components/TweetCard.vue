<template>
  <li class="flex gap-4 border-b p-4">
    <NuxtLink href="https://youtube.com">
      Youtube
    </NuxtLink>
    <div class="flex flex-grow flex-col">
      <div class="flex gap-1">
        <NuxtLink
          href="https://twitter.com"
          class="font-bold outline-none hover:underline focus-visible:underline"
        >
          user name
        </NuxtLink>
        <span class="text-gray-500">-</span>
        <span class="text-gray-500">
          date
        </span>
      </div>
      <p class="whitespace-pre-wrap">
        content
      </p>
      <LikeButton />
    </div>
  </li>
</template>
