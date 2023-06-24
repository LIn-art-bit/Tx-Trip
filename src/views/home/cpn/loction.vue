<template>
    <div class="location">
        <div class="city" @click="toCity">{{ currentCity.cityName }}</div>
        <div class="position" @click="getPosition">
            <span>我的位置</span>
            <img src="@\assets\img\home\icon_location.png" alt="">
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import {useRouter} from "vue-router"
import useCity from "../../../store/modules/city";
const router = useRouter()
const getPosition = () => {
    navigator.geolocation.getCurrentPosition(res => {
        console.log("成功的信息：", res)
    }, err => {
        console.log("失败的信息：", err)
    }, {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 0
    })
}
const toCity = () => {
    router.push("/city")
}
// 
const cityStore = useCity()
const { currentCity } = storeToRefs(cityStore)
</script>

<style scoped>
.location {
    display: flex;
    align-items: center;
    height: 40px;
}
.city {
    flex: 1;
    padding-left: 15px;
}
.position {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.position img {
    margin-left: 3px;
    height: 15px;
}
</style>