<template>
  <div class="w-full h-full">
    <div class="h-full flex flex-col pb-2 px-4">
      <input
        v-model="prompt"
        :placeholder="`${!props.isLoading ? 'Prompt:' : 'Please wait'}`"
        class="p-2 h-3/6 w-full border-2 border-gray-900 focus:ring-1 focus:ring-slate-500 rounded"
        type="text"
        @keyup.enter="submitPrompt">
      <div class="h-full w-full flex items-center">
        <div>
          ICON
        </div>
        <button
          type="button"
          :class="`w-1/4 mt-2 mr-2 ml-auto h-4/6 bg-gray-200 text-gray-900 hover:bg-gray-600 active:bg-green-700 active:m-1 ${isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`"
          @click="submitPrompt">
          {{ 'clear prompt' }}
        </button>
        <button
          type="button"
          :class="`w-1/4 mt-2 h-4/6 bg-gray-900 text-white hover:bg-gray-600 active:bg-green-700 active:m-1 ${isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`"
          @click="submitPrompt">
          {{ !isLoading ? 'SEND' : 'AWAITING RESPONSE' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang=ts>
const prompt: Ref<string> = ref('')
const emit = defineEmits(['submit'])

const props = defineProps({
  isLoading: {
    required: true,
    type: Boolean
  }
})

const submitPrompt = (): void => {
  emit('submit', prompt.value)
  prompt.value = resetString()
}

const resetString = (): string => {
  return ''
}
</script>
