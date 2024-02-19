<template>
  <div class="w-full">
    <button :class="buttonType ? findObjectByKey(props.buttonType, types) : types.default">
      {{ props.buttonText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { findObjectByKey } from '~/composables/useUtils'
const props = defineProps({
  buttonText: {
    type: String,
    required: false,
    default: 'button'
  },

  buttonType: {
    type: String,
    required: false,
    default: ''
  },

  isLoading: {
    type: Boolean,
    required: false,
    default: false
  }
})

const types = {
  default: 'w-full h-12 opacity-100 border-2 border-gray-900 rounded-lg active:bg-cyan-100 active:text-gray-800 active:border-gray-900 bg-white',
  submit: `w-full mt-2 mr-2 ml-auto h-4/6 bg-gray-700 text-gray-200 hover:bg-gray-500 hover:text-gray-300 hover:border-gray-300 border-2 active:bg-cyan-100 active:text-gray-700 active:border-cyan-400 rounded-md ${props.isLoading ? 'bg-cyan-900 text-gray-100 pointer-events-none' : ''}`,
  reset: `w-full mt-2 mr-2 ml-auto h-4/6 bg-gray-200 text-gray-900 hover:bg-gray-300 border-2 hover:text-gray-800 hover:border-gray-600 active:bg-cyan-100 rounded-md active:bg-cyan-100 active:text-gray-800 active:border-cyan-400 ${props.isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`
}
</script>
