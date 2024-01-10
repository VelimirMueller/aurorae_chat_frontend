<template>
  <div>
    <template v-if="props.headline">
      <hr
        v-if="highlightHeadline"
        aria-hidden="true"
        class="w-5/6 mr-auto ml-auto my-4">
      <h4 class="text-2xl px-4 font-bold">
        {{ props.headline }}
      </h4>
      <hr
        v-if="highlightHeadline"
        aria-hidden="true"
        class="w-5/6 mr-auto ml-auto my-4">
    </template>
    <blockquote class="p-12 flex justify-center items-center">
      <slot />
    </blockquote>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  headline: {
    type: String,
    required: false,
    default: ''
  },
  highlightHeadline: {
    type: Boolean,
    required: false,
    default: false
  }
})
</script>

<style scoped>
blockquote {
  font-style: italic;
  line-height: 1.618;
  font-size: 1.2em;
  width: 100%;
  position: relative;
  padding: 40px 40px;
}

blockquote::before {
  content: open-quote;
  top: 0;
  left: 0;
}

blockquote::after {
  content: close-quote;
  bottom:-40px;
  right: 50px;
}

blockquote::before,
blockquote::after {
  display: block;
  line-height: 1.618;
  font-size: 3em;
  border-radius: 100%;
  text-align: center;
  position: absolute;
}
</style>
