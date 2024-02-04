<template>
  <div>
    <h4 v-text="`YOU: (${timeStamp})`" />
    <p class="text-gray-900 mb-2 bg-gray-200 w-4/5 p-2 rounded">
      {{ props.request }}
    </p>
    <h4 class="text-right">
      {{ 'AURORAE: ' }}
    </h4>
    <p
      v-if="props.answers[props.index]"
      class="text-cyan-900 bg-cyan-100 mb-2 w-4/5 ml-auto p-2 rounded pre-formatted"
      v-text="props.answers[props.index]" />
    <LoaderAurorae v-else />
  </div>
</template>

<script setup lang="ts">
import { DateEnum } from '~/types'
import type { DateFormat } from '~/types'

const props = defineProps({
  answers: {
    type: Array,
    required: false,
    default: (): string[] => []
  },
  index: {
    type: Number,
    required: false,
    default: 0
  },
  request: {
    type: String,
    required: false,
    default: ''
  }
})

const dateFormat: DateFormat = {
  hour: DateEnum.hour
}
const timeStamp: string = useDate(dateFormat.hour)
</script>

<style>
.pre-formatted {
  white-space: pre;
}
</style>
