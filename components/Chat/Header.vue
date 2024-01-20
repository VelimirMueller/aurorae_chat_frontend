<template>
  <h3 class="p-8">
    <div :class="`flex justify-center items-center rounded-md py-4 w-full h-1/8 ${props.isLoading ? 'bg-gray-100' : 'bg-cyan-100' }`">
      {{ `STATUS: ${props.isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
    </div>
  </h3>
</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>
