<template>
  <header
    id="cardHeader"
    class=" relative text-grey-50 h-full bg-transparent flex w-full items-center border-2 border-gray-900 bg-card-bg bg-opacity-90">
    <img class="h-full" src="~assets/img/aurorae-fav-logo.png" alt="artful image of sky full" aria-hidden="true">
    <div class="w-full -ml-24 text-white font-bold drop-shadow-[3.2px_3.2px_rgba(12,80,122,1)]">
      <h1 class="text-4xl">AURORAE</h1>
    </div>
    <span class="absolute w-full h-full flex justify-end items-end pr-2 text-white text-2xl drop-shadow-[2.2px_2.2px_rgba(12,80,122,1)]">
      <h2>{{ props.area }}</h2>
    </span>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  area: {
    type: String,
    required: false,
    default: ''
  }
})
</script>
