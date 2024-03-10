<template>
  <template v-if="!isMenu">
    <AuroraeCardWrapper class="lg:w-3/4 w-full bg-gray-50 h-full">
      <template #card-header>
        <ChatHeader
          id="chatHeader"
          :is-loading="isLoading" />
      </template>
      <template #card-body>
        <div class="w-full h-full lg:p-4 bg-gray-50 ">
          <div :class="`w-full h-full flex flex-col bg-white rounded-md ${isLoading ? 'border-2 border-cyan-400' : ''}`">
            <div
              id="date"
              ref="container"
              class="w-full h-full overflow-y-auto p-2 rounded overflow-x-hidden">
              <hr class="w-1/4 mr-auto ml-auto">
              <h4 id="date" class="text-center">
                {{ getDate(dateFormat.day) }}
              </h4>
              <hr class="w-1/4 mr-auto ml-auto">
              <template v-for="request, idx in prompts" :key="`conversation-${idx}`">
                <ChatConversation
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
          id="controls"
          :is-loading="isLoading"
          @submit="submitPrompt" />
      </template>
    </AuroraeCardWrapper>
  </template>
  <template v-else>
    <AuroraeCardWrapper
      id="menu"
      :is-menu-wrapper="isMenu"
      class="w-screen lg:w-3/4 bg-gray-50 h-full">
      <template #side-menu>
        <ChatSideMenu
          class="h-full w-full bg-red-500 flex flex-col items-center justify-center relative"
          @toggle-modal="toggleMenu" />
      </template>
    </AuroraeCardWrapper>
  </template>
  <button @click="saveConversation">
    test
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import type { DateFormat } from '~/types'
import { DateEnum } from '~/types'
import { scrollToElementBottom } from '~/composables/useDomUtils'
import { connectChat, listenToSocket, reconnectSocketOnDc } from '~/composables/useHandleSocket'

const mainStore = useMainStore()
const { isLoading, isMenu } = storeToRefs(mainStore)

const answers: Ref<string[]> = ref([])
const prompts: Ref<string[]> = ref([])
const socket: Ref<WebSocket> = ref()
const container: Ref<HTMLElement> = ref()

const toggleMenu = () => {
  isMenu.value = !isMenu.value
}

isLoading.value = computed(() => {
  return answers.value.length !== prompts.value.length
})

const getDate = useDate

const dateFormat: DateFormat = {
  day: DateEnum.day
}

const submitPrompt = (prompt: string): void => {
  if (!isLoading.value) {
    prompts.value.push(prompt)
    socket.value.send(prompt)
    scrollToElementBottom(container.value)
  }
}

const conversation = computed(() => {
  return prompts.value.map((prompt: string, idx: number) => {
    return { prompt, answer: answers.value[idx] }
  })
})

const saveConversation = () => {
  console.log(conversation.value)
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
