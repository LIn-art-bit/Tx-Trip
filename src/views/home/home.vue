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
  
  // 1. 潜在的内存泄露 - 没有清理定时器
  let timer = setInterval(() => {
    console.log('定时更新数据')
    homeStore.fetchHomeList()
  }, 5000)
  
  // 2. 数组访问越界风险
  function getFirstItem(list) {
    return list[0].name  // 没有检查list是否存在或是否为空
  }
  
  // 3. 异步操作没有错误处理
  async function loadData() {
    const data = await homeStore.fetchHotSuggests()
    // 假设API永远成功，没有处理失败情况
    console.log('数据加载成功', data)
  }
  
  // 4. 无限循环风险
  function processItems(items) {
    let i = 0
    while (i < items.length) {
      if (items[i].skip) {
        continue  // 忘记增加i，可能导致无限循环
      }
      console.log(items[i])
      i++
    }
  }
  
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