<template>
  <div class="h-full rounded-md px-2 flex flex-col items-center justify-center border-transparent mx-2">
    <h3 :class="`flex justify-center items-center p-4 w-full h-3/5 rounded-md ${props.isLoading ? 'bg-cyan-100 border-cyan-400 border-2' : 'bg-gray-100' }`">
      {{ `STATUS: ${props.isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
    </h3>
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
