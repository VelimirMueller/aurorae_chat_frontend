<template>
  <div class="rounded-lg">
    <p class="font-size-4xl pr-8 font-bold">
      Chatbot Websocket Demo
    </p>
    <div class="w-5/6 h-full border border-gray-900 flex flex-col rounded-md">
      <div :class="`flex justify-center items-center rounded-md py-4 w-full h-1/8 border-b-2 border-gray-900 ${isLoading ? 'bg-gray-100' : 'bg-cyan-100' }`">
        {{ `STATUS: ${isLoading ? 'awaiting response' : ' awaiting prompt' }` }}
      </div>
      <div
        ref="container"
        class="w-full h-3/4 overflow-y-scroll p-2 rounded overflow-x-hidden">
        <template v-for="request, idx in chat" :key="idx">
          <h4>
            YOU
          </h4>
          <p class="text-gray-900 mb-2 bg-gray-200 w-4/5 p-2 rounded">
            {{ request }}
          </p>
          <h4 class="text-right">
            AURORAE
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
        <div class="h-full">
          <input
            v-model="prompt"
            :placeholder="`${!isLoading ? 'Prompt:' : 'Please wait'}`"
            class="p-2 h-2/6 w-full border-2 border-gray-900 focus:ring-1 focus:ring-slate-500 rounded"
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

const scrollToBottom = () => {
  setTimeout(() => {
    container.value.scrollTop = container.value.scrollHeight
    console.log('triggered')
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

const connectChat = () => {
  if (!socket.value) {
    socket.value = new WebSocket('ws://' + '0.0.0.0:5000' + '/api_ws')
  }
}

const listenToSocket = () => {
  socket.value.onmessage = (response: WebsocketResponse) => {
    answers.value.push(JSON.stringify(response.data))
    scrollToBottom()
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
