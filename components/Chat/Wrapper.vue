<template>
  <template v-if="!isMenu">
    <CardAurorae class="lg:w-3/4 w-full bg-gray-50 h-full">
      <template #card-header>
        <ChatHeader
          id="chatHeader"
          :is-loading="isLoading" />
      </template>
      <template #card-body>
        <div class="w-full h-full lg:p-8 bg-gray-100">
          <div class="w-full h-full flex flex-col rounded-md bg-gray-50">
            <div
              id="date"
              ref="container"
              class="w-full h-full overflow-y-scroll p-2 rounded overflow-x-hidden">
              <hr class="w-1/4 mr-auto ml-auto">
              <h4 id="date" class="text-center">
                {{ getDate(dateFormat.day) }}
              </h4>
              <hr class="w-1/4 mr-auto ml-auto">
              <template v-for="request, idx in chat" :key="idx">
                <ChatConversationAurorae
                  id="conversation"
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
    </CardAurorae>
  </template>
  <template v-else>
    <CardAurorae
      id="menu"
      :is-menu-wrapper="isMenu"
      class="w-screen lg:w-3/4 bg-gray-50 h-full">
      <template #side-menu>
        <SideMenuModal
          class="h-full w-full bg-red-500 flex flex-col items-center justify-center relative"
          @toggle-modal="toggleMenu" />
      </template>
    </CardAurorae>
  </template>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import type { DateFormat } from '~/types'
import { DateEnum } from '~/types'
import { scrollToElementBottom } from '~/composables/useDomUtils'
import { connectChat, listenToSocket, reconnectSocketOnDc } from '~/composables/useHandleSocket'

const mainStore = useMainStore()
const { isLoading, isMenu } = storeToRefs(mainStore)

const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket: Ref<WebSocket> = ref()
const container: Ref<HTMLElement> = ref()
const toggleMenu = () => {
  isMenu.value = !isMenu.value
}

isLoading.value = ref(answers.value.length !== chat.value.length).value

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
