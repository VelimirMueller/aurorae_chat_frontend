<template>
  <div class="w-full h-full">
    <div class="h-full flex flex-col pb-2 px-4">
      <input
        v-model="prompt"
        :placeholder="`${!props.isLoading ? 'Prompt:' : 'Please wait'}`"
        class="p-2 h-3/6 w-full border-2 rounded"
        type="text"
        @keyup.enter="submitPrompt">
      <div class="h-full w-full flex items-center">
        <button
          type="button"
          :class="`w-1/2 lg:w-1/4 mt-2 mr-2 ml-auto h-4/6 bg-gray-200 text-gray-900 hover:bg-gray-600 active:bg-green-700 active:m-1 ${isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`"
          @click="resetPrompt">
          {{ 'clear prompt' }}
        </button>
        <button
          type="button"
          :class="`w-1/2 lg:w-1/4 mt-2 h-4/6 bg-gray-900 text-white hover:bg-gray-600 active:bg-green-700 active:m-1 ${isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`"
          @click="submitPrompt">
          {{ !isLoading ? 'SEND' : 'AWAITING RESPONSE' }}
        </button>
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
