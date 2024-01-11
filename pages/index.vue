<template>
  <div class="h-[90vh]">
    <ContainerAurorae>
      <template #content>
        <CardAurorae
          class="w-1/4"
          :is-bg="true">
          <template #card-header>
            <CardAuroraeHeader area="chatbot" />
          </template>
          <template #card-body>
            <aside class="mt-4 w-full flex flex-col justify-center items-center">
              <BlockquoteAurorae
                headline="What is the meaning of Aurorae?"
                :highlight-headline="true">
                The name "Aurorae" is a beautiful and poetic name that refers to the natural light display
                that occurs in the polar regions.
                <br><br>
                It is named after the Roman goddess of the dawn, Aurora,
                who was believed to bring joy and happiness.
              </BlockquoteAurorae>
            </aside>
          </template>
          <template #card-footer>
            <div class="flex flex-row w-full justify-center items-center h-full pb-8">
              <ButtonCta class="w-1/3 mr-2" />
              <ButtonCta class="w-1/3" />
            </div>
          </template>
        </CardAurorae>
        <CardAurorae class="w-3/4 bg-gray-50">
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
                <div class="w-full h-1/4">
                  <div class="h-full flex flex-col">
                    <input
                      v-model="prompt"
                      :placeholder="`${!isLoading ? 'Prompt:' : 'Please wait'}`"
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
              </div>
            </div>
          </template>
        </CardAurorae>
      </template>
    </ContainerAurorae>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import type { DateFormat, WebsocketResponse } from '~/types'
import { DateEnum } from '~/types'

const dateFormat: DateFormat = {
  day: DateEnum.day
}

const prompt: Ref<string> = ref('')
const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket = ref()
const isLoading = ref(false)
const container = ref()

const getDate = useDate

const scrollToBottom = () => {
  setTimeout(() => {
    container.value.scrollTop = container.value.scrollHeight
  }, 50)
}

const submitPrompt = (): void => {
  if (!isLoading.value) {
    isLoading.value = true
    chat.value.push(prompt.value)
    socket.value.send(prompt.value)
    prompt.value = resetString()
    scrollToBottom()
  }
}

const resetString = (): string => {
  return ''
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

<style>
.loader {
  transform: rotateZ(45deg);
  perspective: 1000px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  color: #04f1f1;
}
  .loader:before,
  .loader:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    transform: rotateX(70deg);
    animation: 1s spin linear infinite;
  }
  .loader:after {
    color: #FF3D00;
    transform: rotateY(70deg);
    animation-delay: .4s;
  }

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
  }
}

@keyframes rotateccw {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(-360deg);
  }
}

@keyframes spin {
  0%,
  100% {
    box-shadow: .2em 0px 0 0px currentcolor;
  }
  12% {
    box-shadow: .2em .2em 0 0 currentcolor;
  }
  25% {
    box-shadow: 0 .2em 0 0px currentcolor;
  }
  37% {
    box-shadow: -.2em .2em 0 0 currentcolor;
  }
  50% {
    box-shadow: -.2em 0 0 0 currentcolor;
  }
  62% {
    box-shadow: -.2em -.2em 0 0 currentcolor;
  }
  75% {
    box-shadow: 0px -.2em 0 0 currentcolor;
  }
  87% {
    box-shadow: .2em -.2em 0 0 currentcolor;
  }
}
</style>
