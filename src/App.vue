
<template>
  <div class="app">
    <router-view v-slot="props">
    <keep-alive include="home">
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
    <tab-bar></tab-bar>
    <loading v-if="mainStore.isLoading"></loading>
  </div>
</template>
<script setup>
import tabBar from './components/common/tab-bar.vue';
import loading from './components/common/loading.vue';
import useMain from "@/store/modules/main.js"
//使用mainStore
const mainStore = useMain()
</script>
<style scoped>
</style>
