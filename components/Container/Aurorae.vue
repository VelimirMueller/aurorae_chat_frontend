<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="flex flex-row px-12 md:px-0 w-full h-full content-center justify-center">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default defineComponent({
  name: 'AuroraeContainer'
})
</script>
