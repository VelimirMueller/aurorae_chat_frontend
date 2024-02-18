<template>
  <div :class="props.containerType === 'page' ? containerDefaults.container : 'hidden'">
    <div :class="props.containerType === 'page' ? containerDefaults.content : 'hidden' ">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  containerType: {
    type: String,
    required: false,
    default: 'page'
  }
})
const containerDefaults = {
  container: 'w-full h-full flex justify-center items-center',
  content: 'flex flex-row px-12 md:px-0 w-full h-full content-center justify-center'
}
</script>
