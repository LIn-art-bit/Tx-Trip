<template>
    <div class="Select">
    <div class="select-date" @click="showDateSelect = true">
        <div class="start item">
            <span class="text">入住</span>
            <span>{{ startTime }}</span>
        </div>
        <div class="stay item">
            <span class="text">共{{stayDay}}晚</span>
        </div>
        <div class="end item">
            <span class="text">商店</span>
            <span>{{ endTime }}</span>
        </div>
    </div>
    <van-cell :value="text" @click="showDateSelect = true" />
<van-calendar v-model:show="showDateSelect" type="multiple" @confirm="onConfirm" color="#ff9854" :round="false"/>
 <div class="tips">
    <div class="top">
        <div>价格不限</div>
        <div class="right">人数不限</div> 
    </div>
    <div class="bottom">关键字/位置/民宿名</div>
 </div>
</div>
</template>

<script setup>
import {formatMonthDay, getDiffDays} from "@/utills/format_month_day.js"
import useHome from "../../../store/modules/home";
import { computed, ref } from "vue"
import { storeToRefs } from "pinia";
//获取日期并格式化
const homeStore = useHome()
// const { startDay, endDay } = storeToRefs(homeStore)
const startDay = new Date()
const endDay =  new Date().setDate(startDay.getDate() + 1)
const startTime = ref(formatMonthDay(startDay))
const endTime = ref(formatMonthDay(endDay))
const stayDay = ref(1)
//日期的组件的响应数据

const onConfirm = (value) => {
    // startDay = value[0]
    // endDay = value[1]
    homeStore.startDay = value[0]
    homeStore.endDay = value[1]
    startTime.value = formatMonthDay(value[0])
    endTime.value = formatMonthDay(value[1])
    stayDay.value = getDiffDays(value[0], value[1])
    showDateSelect.value = false
}
let showDateSelect = ref(false)
let text = ref('')

</script>

<style scoped>
.Select {
    --van-calendar-popup-height: 100%;
}
.select-date {
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    /* padding-right: 30px; */
    margin-left: -15px;
    
}
.item {
    display: flex;
    flex-direction: column;
}
.stay {
    line-height: 40px;
}
.text {
    font-size: 8px;
    color: #807b7b;
    margin: 3px 0;
}
.tips {
    position: relative;
    padding: 0 25px;
    font-size: 10px;
    color: #807b7b;
    top: -10px
    /* margin-top: -; */
}
.top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}
.right {
    margin-right: 20px;
}
</style>