<template>
  <div class="w-full h-full">
    <div class="h-full flex flex-col pb-2 px-4">
      <input
        v-model="prompt"
        :disabled="props.isLoading"
        :placeholder="`${!props.isLoading ? 'Prompt:' : 'Please wait'}`"
        :class="`transit box-border p-2 h-3/6 w-full border-2 ring-cyan-400 rounded outline-none focus:border-cyan-400 focus:ring-1 focus:cyan-sky-400 ${!props.isLoading ? 'outline-none border-cyan-400' : 'border-white'}`"
        type="text"
        @keyup.enter="submitPrompt">
      <div class="h-full w-full flex items-center justify-center ">
        <AuroraeButtonTypes
          :class="`w-full h-full px-1 ${props.isLoading ? 'pointer-events-none opacity-50' : ''}`"
          button-text="clear prompt"
          :is-disabled="props.isLoading"
          button-type="reset"
          @click="resetPrompt" />
        <AuroraeButtonTypes
          :class="`w-full h-full px-1 ${props.isLoading ? 'pointer-events-none opacity-50' : ''}`"
          :is-disabled="props.isLoading"
          button-text="SEND"
          button-type="submit"
          @click="submitPrompt" />
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
const emit = defineEmits(['submit', 'reset'])

const props = defineProps({
  isLoading: {
    required: true,
    type: Boolean
  }
})

const prompt: Ref<string> = ref('')

const resetPrompt = (): void => {
  prompt.value = resetString()
}

const submitPrompt = (): void => {
  if (!props.isLoading && prompt.value) {
    emit('submit', prompt.value)
    resetPrompt()
  }
}

const resetString = (): string => {
  return ''
}
</script>
