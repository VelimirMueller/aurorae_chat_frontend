<template>
  <div
    :class="`${heroStyle} ${baseStyle} hue-rotate-${filters.hueFilter}`"
    :alt="bgImagePath ? imgAlt : ''"
    @mousemove="bgImagePath ? setHueRotation() : null">

    <div class="flex flex-row h-1/2 w-full opacity-50 content-center">
      <HeroHeadline class="w-1/2 bg-white h-full justify-center text-grey-900" />
      <HeroSide class="w-1/2 bg-white h-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const mainStore = useMainStore()
const { filters, setHueFilter } = mainStore

const heroStyle = computed((): string => {
  return props.heroType === 'full' ? 'w-full h-full' : ''
})

const props = defineProps({
  baseStyle: {
    type: String,
    required: false,
    default: 'transition-all ease-in-out duration-900 image bg-cover object-center bg-hero-bg flex flex-grow justify-center items-center'
  },
  bgImagePath: {
    type: String,
    required: false,
    default: ''
  },
  heroFilter: {
    type: String,
    required: false,
    default: ''
  },
  heroType: {
    type: String,
    required: false,
    default: 'full'
  },
  imgAlt: {
    type: String,
    required: false,
    default: ''
  },
  isHueFilter: {
    type: Boolean,
    required: false,
    default: true
  }
})

const setHueRotation = (): void => {
  const validFilters: number[] = [
    15,
    30,
    60,
    90,
    180
  ]

  if (props.isHueFilter) {
    const randIntInRange = Math.floor(Math.random() * 5) //* (Math.round(Math.random()) ? 1 : -1)
    setHueFilter(validFilters[randIntInRange])
  }
}
</script>
