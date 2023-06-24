<template>
    <div class="home-category">
        <div class="item" v-for="(item) in homeCategories" :key="item.id">
           <img :src="item.pictureUrl" alt="">
            <span class="text">{{ item.title }}</span>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useHome from "../../../store/modules/home";
const homeStore = useHome()
homeStore.fetchHomeCategories()
const { homeCategories } = storeToRefs(homeStore)
</script>

<style scoped>
.home-category {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 80px;
    overflow-x: scroll;
    padding: 0 10px;
}
::-webkit-scrollbar{width:0;height:0}
.item {
    width: 70px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.item img {
    width: 32px;
    height: 32px;
    /* padding-left: 8px; */
}
.text {
    font-size: 8px;
    margin-top: 5px;
}
</style> 