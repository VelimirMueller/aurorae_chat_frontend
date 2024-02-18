<template>
  <div class="w-full h-full">
    <div class="h-full flex flex-col pb-2 px-4">
      <input
        v-model="prompt"
        :placeholder="`${!props.isLoading ? 'Prompt:' : 'Please wait'}`"
        class="p-2 h-3/6 w-full border-2 rounded"
        type="text"
        @keyup.enter="submitPrompt">
      <div class="h-full w-full flex items-center justify-center ">
        <AuroraeButtonTypes
          class="w-full h-full px-1"
          button-text="clear prompt"
          button-type="reset"
          @click="resetPrompt" />
        <AuroraeButtonTypes
          class="w-full h-full px-1"
          button-text="SUBMIT"
          button-type="submit"
          @click="submitPrompt" />
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
const prompt: Ref<string> = ref('')
const emit = defineEmits(['submit', 'reset'])

const props = defineProps({
  isLoading: {
    required: true,
    type: Boolean
  }
})

const resetPrompt = (): void => {
  prompt.value = resetString()
}

const submitPrompt = (): void => {
  if (!props.isLoading) {
    emit('submit', prompt.value)
    resetPrompt()
  }
}

const resetString = (): string => {
  return ''
}
</script>
