<template>
    <div class="hot-suggest">
        <div class="item" v-for="(item, index) in hotSuggests" 
        :key="index"
        :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">
            {{ item.tagText.text }}
        </div>
        <div class="search-btn" @click="searchClick">
            开始搜索
        </div>
    </div>
</template>
<script setup>
import useHome from '../../../store/modules/home';
import {computed, ref} from "vue"
import { storeToRefs } from 'pinia';
import { useRouter } from "vue-router"
import useCity from '../../../store/modules/city';
import {formatMonthDay} from "@/utills/format_month_day.js"
const homeStore = useHome()
homeStore.fetchHotSuggests()
const { hotSuggests, startDay, endDay } = storeToRefs(homeStore)
const router = useRouter()
const cityStore = useCity()
const startTime = computed(() => formatMonthDay(startDay.value) )
const endTime = computed(() => formatMonthDay(endDay.value) )
const searchClick = () => {
    router.push({
        path: "/search",
        query: {
            currentCity: cityStore.currentCity.cityName,
            startTime: startTime.value,
            endTime: endTime.value
        }
    })
}
</script>

<style scoped>
.hot-suggest {
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: space-around; */
}
.item {
    padding: 3px 5px;
    border-radius: 3px;
    margin: 5px 3px;
    font-size: 12px;
}
.search-btn {
    width: 342px;
    height: 38px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--tjc-theme-linear-gradient);

}
</style>