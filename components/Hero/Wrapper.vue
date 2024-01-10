<template>
  <div
    :class="`${heroStyle} ${baseStyle} hue-rotate-${filters.hueFilter}`"
    :alt="bgImagePath ? imgAlt : ''"
    @mousemove="bgImagePath ? setHueRotation() : null">
    <aurorae-container>
      <template #content>
        <HeroHeadline class="w-full md:w-1/3 bg-white h-full justify-center text-gray-900 mt-4 md:mt-0 md:mr-4" />
        <HeroSide class="w-full md:w-2/3 bg-white h-full flex justify-center items-center mt-4 md:mt-0 md:ml-4 p-4" />
      </template>
    </aurorae-container>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import AuroraeContainer from '../../ui/wrapper/AuroraeContainer'

const mainStore = useMainStore()
const { filters, setHueFilter } = mainStore

const heroStyle = computed((): string => {
  return props.heroType === 'full' ? 'w-full h-full' : ''
})

const props = defineProps({
  baseStyle: {
    type: String,
    required: false,
    default: 'transition-all ease-in-out duration-900 image bg-cover object-center bg-hero-bg flex flex-grow justify-center md:items-center items-start'
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
