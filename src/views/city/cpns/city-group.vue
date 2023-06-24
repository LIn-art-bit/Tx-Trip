<template>
    <div class="city-group">
<van-index-bar :index-list = indexList> 
    <van-index-anchor index="热门"/>
        <div class="list">
            <div class="list-item" v-for="(hotCity, index) in citiesGroup.hotCities" :key="index" @click="cityClick(hotCity)">{{hotCity.cityName}}</div>
        </div>
    <template v-for="(Group, index) in citiesGroup.cities" :key="index">
        <van-index-anchor :index="Group.group" />
        <template v-for="(city, indey) in Group.cities" :key="indey">
            <van-cell :title="city.cityName" @click="cityClick(city)"/>
        </template>
    </template>
</van-index-bar>
    </div>
</template>

<script setup>
import useCity from "@/store/modules/city.js"
import { useRouter } from "vue-router"
import { computed, defineProps } from 'vue';
const props = defineProps({
    citiesGroup: {
        type: Object,
        default: () => ({})
    }
})
//获取数据中有的索引，并在前面加一个“#”索引
const indexList = computed(() => {
   const list =  props.citiesGroup?.cities?.map(item => item.group)
   list?.unshift("#")
   return list
})
//选择城市
const router = useRouter()
const cityStore = useCity()
const cityClick = (city) => {
    cityStore.currentCity = city
    router.back()
}
</script>
<style scoped>
.list {
    display: flex;  
    flex-wrap: wrap;
    justify-content:space-around;
    padding-right: 15px;
   
}
.list-item {
    width: 70px;
    height: 28px;
    border-radius: 14px;
    margin: 8px 10px;
    font-size: 12px;
    color: #000;
    line-height: 28px;
    text-align: center;
    background-color: #fff4ec;
}
</style>