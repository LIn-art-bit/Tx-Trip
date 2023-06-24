<template>
    <div class="home">
      <home-nav-bar></home-nav-bar>
      <banner></banner>
      <loction/>
      <select-date></select-date>
      <hot-suggest></hot-suggest>
      <home-category></home-category>   
      <home-list></home-list>
      <searchBar v-show="ifSearchShow"></searchBar>
    </div>
  </template>
  <script setup>
  import homeNavBar from './cpn/home-nav-bar.vue';
  import banner from './cpn/banner.vue'
  import loction from './cpn/loction.vue'
  import selectDate from './cpn/select-date.vue';
  import hotSuggest from './cpn/hot-suggest.vue';
  import homeCategory from './cpn/home-category.vue';
  import homeList from './cpn/home-list/home-list.vue';
  import searchBar from './cpn/search-bar.vue';
  import useHome from '../../store/modules/home';
  import useScroll from "@/hooks/useScroll.js"
  import { watch } from 'vue';
  const homeStore = useHome()
  const {ifBottom, ifSearchShow} = useScroll()
 watch(ifBottom, (newValue) => {
  if(newValue) {
    homeStore.fetchHomeList().then(() => {
      ifBottom.value = false
    })
  }
 })
  </script>
   <script>
   export default {
     name: "home"
   }
 </script>
  <style scoped>
  
  </style>