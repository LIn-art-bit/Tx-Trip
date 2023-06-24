<template>
    <div class="search-bar">
        <div class="date">
            <div class="start">
                <span class="text">住</span>
                <span class="time">{{startTime}}</span>
            </div>
            <div class="end">
                <span class="text">离</span>
                 <span class="time">{{endTime}}</span>
            </div>
        </div>
        <div class="key-word">
            <input type="text" value="关键字/位置/名宿">
           <img src="@/assets/img/home/search_icon.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import useHome from '../../../store/modules/home';
import { formatMonthDay } from "@//utills/format_month_day.js"
import { computed, ref } from 'vue';
import { storeToRefs } from 'pinia';
const homeStore = useHome()
const {startDay, endDay} = storeToRefs(homeStore)
const startTime = computed(() => formatMonthDay(startDay.value,"MM.DD"))
const endTime = computed(() => formatMonthDay(endDay.value,"MM.DD"))
</script>

<style scoped>
.search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    height: 42px;
    background-color: #f5f3f3;
    display: flex;
    align-items: center;
}
.date {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px #ffffff solid;
}
.key-word {
    flex: 1;
    display: flex;
    align-items: center;
}
/* .word {
    margin-left: 10px;
    flex: 1;
    color: #adaaaa ;
} */
 input {
    color: #adaaaa;
    margin-left: 10px;
    flex: 1;
    height: 100%;
    width: 100%;
    background-color: #f5f3f3;
    border: none;
}
.key-word img {
    width: 20px;
    margin-right: 15px;
}
.text {
    color: #adaaaa;
    font-size: 12px;
    margin-right: 5px;
}
.time {
    font-size: 12px;
}

</style>