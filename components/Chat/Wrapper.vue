<template>
  <CardAurorae class="w-3/4 bg-gray-50 h-full">
    <template #card-header>
      <h3 class="p-8">
        <div :class="`flex justify-center items-center rounded-md py-4 w-full h-1/8 ${isLoading ? 'bg-gray-100' : 'bg-cyan-100' }`">
          {{ `STATUS: ${isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
        </div>
      </h3>
    </template>
    <template #card-body>
      <div class="w-full h-full p-8 bg-gray-100">
        <div class="w-full h-full flex flex-col rounded-md bg-gray-50">
          <div
            ref="container"
            class="w-full h-3/4 overflow-y-scroll p-2 rounded overflow-x-hidden">
            <hr class="w-1/4 mr-auto ml-auto">
            <h4 class="text-center">
              {{ getDate(dateFormat.day) }}
            </h4>
            <hr class="w-1/4 mr-auto ml-auto">
            <template v-for="request, idx in chat" :key="idx">
              <ChatConversationAurorae
                :answers="answers"
                :index="idx"
                :request="request" />
            </template>
          </div>
        </div>
      </div>
    </template>
    <template #card-footer>
      <ChatControls
        :is-loading="isLoading"
        @submit="submitPrompt" />
    </template>
  </CardAurorae>
</template>

<script setup lang="ts">
import type { DateFormat, WebsocketResponse } from '~/types'
import { DateEnum } from '~/types'

const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket = ref()
const isLoading = ref(false)
const container = ref()

const getDate = useDate

const dateFormat: DateFormat = {
  day: DateEnum.day
}

const scrollToBottom = (): void => {
  setTimeout(() => {
    container.value.scrollTop = container.value.scrollHeight
  }, 50)
}

const submitPrompt = (prompt: string): void => {
  if (!isLoading.value) {
    isLoading.value = true
    chat.value.push(prompt)
    socket.value.send(prompt)
    scrollToBottom()
  }
}

const connectChat = (): void => {
  if (!socket.value) {
    socket.value = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
  }
}

const listenToSocket = (): void => {
  socket.value.onmessage = (response: WebsocketResponse) => {
    answers.value.push(JSON.stringify(response.data))
    scrollToBottom()
    isLoading.value = false
  }
}

const reconnectSocketOnDc = (): void => {
  socket.value.onclose = (): void => {
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
