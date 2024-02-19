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
    default: 'default'
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
  default: 'btn-outline',
  submit: `btn-primary ${props.isLoading ? 'pointer-events-none opacity-50' : ''}`,
  reset: `btn-secondary ${props.isLoading ? 'pointer-events-none opacity-50' : ''}`
}
</script>
