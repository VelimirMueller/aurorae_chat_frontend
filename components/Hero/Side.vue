<template>
  <div>
    <p class="font-size-4xl pr-8 font-bold">
      Chatbot Websocket Demo
    </p>
    <div class="w-5/6 h-full border border-gray-900 flex flex-col rounded">
      <div :class="`text-center pt-4 w-full h-1/6 border-b-2 border-gray-900 ${isLoading ? 'bg-gray-100' : 'bg-cyan-100' }`">
        {{ `STATUS: ${isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
      </div>
      <div
        ref="container"
        class="w-full h-full overflow-y-scroll p-2">
        <template v-for="request, idx in chat" :key="idx">
          <h4>
            YOU
          </h4>
          <p class="text-gray-900 mb-2 bg-gray-200">
            {{ request }}
          </p>
          <h4 class="text-right">
            AURORAE
          </h4>
          <p class="text-cyan-900 bg-cyan-100 mb-2">
            {{ answers[idx] }}
          </p>
        </template>
      </div>
      <div class="w-full h-2/5">
        <div class="h-full">
          <input
            v-model="prompt"
            :placeholder="`${!isLoading ? 'Prompt:' : 'Please wait'}`"
            class="p-2 h-2/6 w-full border-2 border-gray-900 focus:ring-1 focus:ring-slate-500"
            type="text"
            @keyup.enter="submitPrompt">
          <button
            type="button"
            :class="`w-full h-4/6 bg-gray-900 text-white hover:bg-gray-600 active:bg-green-700 active:m-1 ${isLoading ? 'bg-gray-700 text-gray-400 pointer-events-none' : ''}`"
            @click="submitPrompt">
            {{ !isLoading ? 'SEND' : 'AWAITING RESPONSE' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

interface WebsocketResponse {
  data: String
}

const prompt: Ref<string> = ref('')
const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket = ref()
const isLoading = ref(false)
const container = ref()

const submitPrompt = (): void => {
  if (!isLoading.value) {
    isLoading.value = true
    chat.value.push(prompt.value)
    socket.value.send(prompt.value)
    prompt.value = resetString()
    console.log(container.value.scrollTop)
  }
}

const resetString = (): string => {
  return ''
}

const connectChat = () => {
  if (!socket.value) {
    socket.value = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
  }
}

const listenToSocket = () => {
  socket.value.onmessage = (response: WebsocketResponse) => {
    answers.value.push(JSON.stringify(response.data))
    container.value.scrollTop -= 20
    isLoading.value = false
  }
}

const reconnectSocketOnDc = () => {
  socket.value.onclose = () => {
    socket.value = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
    isLoading.value = false
  }
}

onMounted(() => {
  connectChat()
  listenToSocket()
  reconnectSocketOnDc()
})
</script>
