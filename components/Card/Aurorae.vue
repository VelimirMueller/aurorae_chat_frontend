<template>
  <div class="flex flex-col h-full">
    <div :class="`h-1/6 ${ props.isBg ? 'bg-card-header bg-cover' : '' }`">
      <slot name="card-header" />
    </div>
    <div class="h-4/6">
      <slot name="card-body" />
    </div>
    <div class="h-1/6">
      <slot name="card-footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  isBg: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>
