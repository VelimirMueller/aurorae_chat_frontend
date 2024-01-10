<template>
  <div>
    <h4 v-text="`YOU: (${initialTime ?? props.time})`" />
    <p class="text-gray-900 mb-2 bg-gray-200 w-4/5 p-2 rounded">
      {{ props.request }}
    </p>
    <h4 class="text-right">
      {{ 'AURORAE: ' }}
    </h4>
    <p
      v-if="props.answers[props.index]"
      class="text-cyan-900 bg-cyan-100 mb-2 w-4/5 ml-auto p-2 rounded"
      v-text="props.answers[props.index]" />
    <div
      v-else
      class="loader ml-auto" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const emits = defineEmits(['new'])

const props = defineProps({
  answers: {
    type: Array,
    required: false,
    default: () => []
  },
  index: {
    type: Number,
    required: false,
    default: 0
  },
  request: {
    type: String,
    required: false,
    default: ''
  },
  time: {
    type: String,
    required: true
  }
})

onMounted(() => {
  emits('new')
})
</script>
