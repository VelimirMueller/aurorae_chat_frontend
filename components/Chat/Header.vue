<template>
  <div class="h-full rounded-md px-2 flex flex-col items-center">
    <h3 :class="`flex justify-center items-center p-4 w-full h-1/2 rounded-md ${props.isLoading ? 'bg-cyan-100' : 'bg-gray-100' }`">
      {{ `STATUS: ${props.isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
    </h3>
    <div class="h-1/2 w-full flex items-center">
      test
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
})
</script>
