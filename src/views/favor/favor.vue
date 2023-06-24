<template>
  <div class="favor">
    <transition><h2 v-if="show">收藏</h2></transition>
    <button @click="makeShow">切换</button>
  </div>
</template>

<script setup>
import { ref } from "vue"
const show = ref(false)
const makeShow = () => {
  show.value = !show.value
}
</script>

<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 2s ease;
}
</style>