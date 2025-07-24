<template>
  <nav class="h-12 flex border-b-2 border-gray-100">
    <a class="flex items-center h-full" href="#">
      <img
        class="w-12"
        src="~/assets/img/aurorae-fav-logo.png"
        alt="Aurorae logo">
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
    <span class="flex items-center h-full space-x-3 w-40 justify-center">
      <button
        aria-label="Side menu toggle"
        @click="toggleMenu">
        <PhDotsThreeOutline :size="32" />
      </button>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { PhDotsThreeOutline } from '@phosphor-icons/vue'
import { useMainStore } from '~/composables/useMainStore'

const { isMenu } = storeToRefs(useMainStore())
const toggleMenu = () => {
  isMenu.value = !isMenu.value
}
const navLinks = [
  { href: '/', text: 'back to app' }
]
</script>
