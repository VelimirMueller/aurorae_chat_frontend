<template>
  <div class="w-full lg:w-full h-[90vh] relative">
    <ph-x-square
      class="absolute top-0 right-0"
      :size="32"
      @click="closeModal" />
    {{ 'it`s a side-menu' }}
  </div>
</template>
<script setup lang="ts">
import { PhXSquare } from '@phosphor-icons/vue'

const emit = defineEmits(['toggleModal'])
const closeModal = () => {
  emit('toggleModal')
}
</script>
