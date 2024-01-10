<template>
  <div class="rounded-lg bag-gray-900 border-2 border-gray-900">
    <div class="w-full h-full flex flex-col rounded-md bg-gray-50">
      <div :class="`flex justify-center items-center rounded-md py-4 w-full h-1/8 ${isLoading ? 'bg-gray-100' : 'bg-cyan-100' }`">
        {{ `STATUS: ${isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
      </div>
      <div
        ref="container"
        class="w-full h-3/4 overflow-y-scroll p-2 rounded overflow-x-hidden">
        <hr class="w-1/4 mr-auto ml-auto">
        <h4 class="text-center">
          {{ currentDay }}
        </h4>
        <hr class="w-1/4 mr-auto ml-auto">
        <template v-for="request, idx in chat" :key="idx">
          <h4>
            {{ `YOU: (${currentHour})` }}
          </h4>
          <p class="text-gray-900 mb-2 bg-gray-200 w-4/5 p-2 rounded">
            {{ request }}
          </p>
          <h4 class="text-right">
            {{ `AURORAE: (${answers.length.toString() === chat.length.toString() ? currentHour : '-'})` }}
          </h4>
          <p
            v-if="answers[idx]"
            class="text-cyan-900 bg-cyan-100 mb-2 w-4/5 ml-auto p-2 rounded">
            {{ answers[idx] }}
          </p>
          <div
            v-else
            class="loader ml-auto" />
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

<script setup lang="ts">
import { onMounted } from 'vue'
import type { DateFormat, WebsocketResponse } from '~/types'
import { DateEnum } from '~/types'

const dateFormat: DateFormat = {
  hour: DateEnum.hour,
  day: DateEnum.day
}

const currentHour: string = useDate(dateFormat.hour)
const currentDay: string = useDate(dateFormat.day)

const prompt: Ref<string> = ref('')
const answers: Ref<string[]> = ref([])
const chat: Ref<string[]> = ref([])
const socket = ref()
const isLoading = ref(false)
const container = ref()

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

      /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #fff;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #999;
}
</style>
