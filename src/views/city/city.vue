<template>
  <div class="city page-top">
     <div class="top">
        <van-search v-model="value"
        shape="round" 
        placeholder="城市/区域/位置"
        show-action
        @cancel="onCancel"/>
    <van-tabs v-model:active="tabActive" color="#ff9854">
    <template v-for="(value, key) in allCities" :key="key">
    <van-tab :title="value.title" :name="key"></van-tab>
    </template>
</van-tabs>
</div>
 <div class="content"> 
       <template v-for="(value, key) in allCities" :key="key">
        <city-group v-show="tabActive === key" :cities-group="value"></city-group>
    </template>
       
     </div>
  </div>
    
</template>

<script setup>
import {computed, ref} from "vue";
import { useRouter } from "vue-router";
import {storeToRefs} from "pinia";
import useCity from "@/store/modules/city.js";

import cityGroup from "./cpns/city-group.vue";
const router = useRouter()
const value = ref("") //搜索框的值
const onCancel = () => {
    router.back()
}
const tabActive = ref()
//获取存储在pinia中对应模块的数据
const cityStore = useCity()
cityStore.fetchCityData()
const {allCities} = storeToRefs(cityStore)
</script>

<style scoped>
.content {
    height: calc(100vh - 98px);
    overflow-y: auto;
}
.top {
    position: relative;
    z-index: 9;
}
</style>