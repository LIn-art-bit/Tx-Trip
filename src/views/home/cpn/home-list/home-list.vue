<template>
    <div class="home-list">
        <h2>热门精选</h2>
        <div class="list">
        <template v-for="(item) in homeList" :key="item.data.houseId">
            <home-list-item1 :item-data="item.data" 
            v-show="item.discoveryContentType === 9" 
            @click="itemClick(item.data)"
            ></home-list-item1>
            <home-list-item2 :item-data="item.data"
             v-show="item.discoveryContentType === 3"
             @click="itemClick(item.data)"
             ></home-list-item2>
        </template>
        </div>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHome from '../../../../store/modules/home';
import homeListItem1 from "./home-list-item1.vue"
import homeListItem2 from './home-list-item2.vue';
import { useRouter } from 'vue-router';
 const homeStore = useHome()
homeStore.fetchHomeList()
const { homeList } = storeToRefs(homeStore)

//监听list-item的点击并跳转到对应的详情页
const router = useRouter()
const itemClick = (item) => {
    router.push("/detail/" + item.houseId)
}
</script>

<style scoped>
.home-list {
    padding: 0 15px;
    margin-bottom: 50px;
}
.home-list h2 {
    margin: 8px 5px;
}
.list {
    display: flex;
    flex-wrap: wrap;
}
</style>