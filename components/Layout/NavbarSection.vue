<template>
  <div class="h-12 flex">
    <a class="flex items-center h-full" href="#">
      <img class="w-12" src="~/assets/img/aurorae-fav-logo.png">
      <p class="w-60 text-m font-bold">The Aurorae Project</p>
    </a>
    <ul class="flex flex-row gap-4 h-full justify-center space-between flex-wrap items-center w-full">
      <!-- Navigation Items -->
      <template
        v-for="link, idx in navLinks"
        :key="idx">
        <li>
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </template>
    </ul>
    <span class="flex items-center h-full space-x-3 w-40 flex justify-center items-center">
      <button>click me</button>
    </span>
  </div>
</template>

<script setup lang="ts">
const navLinks = [
  { href: '#', text: 'link-1' },
  { href: '#', text: 'link-2' },
  { href: '#', text: 'link-3' }
]
</script>
