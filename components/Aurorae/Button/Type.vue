<template>
  <div class="w-full">
    <button
      :disabled="isDisabled"
      :class="buttonType ? findObjectByKey(props.buttonType, types) : types.default">
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

  isDisabled: {
    type: Boolean,
    required: false,
    default: false
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
