<template>
    <div class="relative w-screen">
        {{ 'sidemenu' }}
        <ph-dots-three-outline @click="closeModal" :size="32" />
    </div>
</template>
<script setup lang="ts">
import { PhDotsThreeOutline } from '@phosphor-icons/vue'

const emit = defineEmits(['toggleModal'])
const closeModal = () => {
    emit('toggleModal')
}
</script>