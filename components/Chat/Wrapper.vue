<template>
  <CardAurorae class="w-3/4 bg-gray-50 h-full">
    <template #card-header>
      <ChatHeader :is-loading="isLoading" />
    </template>
    <template #card-body>
      <div class="w-full h-full p-8 bg-gray-100">
        <div class="w-full h-full flex flex-col rounded-md bg-gray-50">
          <div
            ref="container"
            class="w-full h-full overflow-y-scroll p-2 rounded overflow-x-hidden">
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
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import type { DateFormat } from '~/types'
import { DateEnum } from '~/types'
import { scrollToElementBottom } from '~/composables/useDomUtils'
import { connectChat, listenToSocket, reconnectSocketOnDc } from '~/composables/useHandleSocket'

const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)

const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket: Ref<WebSocket> = ref()
const container: Ref<HTMLElement> = ref()

const loadingState = computed(() => {
  return answers.value.length !== chat.value.length
})

isLoading.value = loadingState

const getDate = useDate

const dateFormat: DateFormat = {
  day: DateEnum.day
}

const submitPrompt = (prompt: string): void => {
  if (!isLoading.value) {
    chat.value.push(prompt)
    socket.value.send(prompt)
    scrollToElementBottom(container.value)
  }
}

onMounted(() => {
  connectChat()
    .then((ws: WebSocket) => {
      socket.value = ws
      listenToSocket(socket.value, answers.value, container.value)
      reconnectSocketOnDc(socket.value)
    })
})
</script>
