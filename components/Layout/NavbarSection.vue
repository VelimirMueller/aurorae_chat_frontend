<template>
  <nav class="h-12 flex">
    <a class="flex items-center h-full" href="#">
      <img class="w-12" src="~/assets/img/aurorae-fav-logo.png">
      <p class="w-60 text-m font-bold">The Aurorae Project</p>
    </a>
    <ul class="flex flex-row gap-4 h-full justify-center space-between flex-wrap items-center w-full">
      <!-- Navigation Items -->
      <template
        v-for="link, idx in navLinks"
        :key="idx">
        <li v-if="!isMenu">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </template>
    </ul>
    <span v-if="!isMenu" class="flex items-center h-full space-x-3 w-40 justify-center">
      <button @click="toggleMenu">
        <ph-dots-three-outline :size="32" />
      </button>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { PhDotsThreeOutline } from '@phosphor-icons/vue'

const isMenu = ref(false)
const toggleMenu = () => {
  isMenu.value = !isMenu.value
  console.log(isMenu.value)
}
const navLinks = [
  { href: '#', text: 'back to app' }
]
</script>
