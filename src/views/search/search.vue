<template>
    <div class="search page-top">
        <h2>当前城市：{{ $route.query.currentCity }}</h2>
        <h2>开始时间:{{$route.query.startTime}}</h2>
        <h2>结束时间：{{$route.query.endTime }}</h2>
    </div>
</template>

<script setup>
import {useRouter} from "vue-router"
const router = useRouter()

</script>

<style scoped>

</style> 