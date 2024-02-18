<template>
  <div class="flex flex-row gap-2">
    <button class="w-40 h-12 opacity-100 border-2 border-red-900 rounded-lg bg-white">
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  buttonText: {
    type: String,
    required: false,
    default: 'button'
  }
})
</script>
