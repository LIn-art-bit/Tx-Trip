<template>
    <div class="tab-bar">
        <router-link 
        class="tab-bar-item" to="/home"
        :class="{active:currentIndex===0}" 
        @click= "clickTabItem(0)">
        <span v-if="currentIndex===0"><img src="@/assets/img/tab-bar/my-active.svg" alt=""></span>
        <span v-else><img src="@/assets/img/tab-bar/my.svg" alt=""></span>
        <span>首页</span>
        </router-link>
        <router-link 
        class="tab-bar-item" to="/favor"
        :class="{active:currentIndex===1}"  
        @click= "clickTabItem(1)">
        <span v-if="currentIndex===1"><img src="@/assets/img/tab-bar/favor-active.svg" alt=""></span> 
        <span v-else><img src="@/assets/img/tab-bar/favor.svg" alt=""></span>
        <span>收藏</span>
        </router-link>
        <router-link 
        class="tab-bar-item" to="/order"
        :class="{active:currentIndex===2}"  
        @click= "clickTabItem(2)">
        <span v-if="currentIndex===2"><img src="@/assets/img/tab-bar/order-active.svg" alt=""></span>
        <span v-else><img src="@/assets/img/tab-bar/order.svg" alt=""></span>
        <span>订单</span>
        </router-link>
        <router-link 
        class="tab-bar-item" to="/message"
        :class="{active:currentIndex===3}"  
        @click= "clickTabItem(3)">
        <span v-if="currentIndex===3"><img src="@/assets/img/tab-bar/message-active.svg" alt=""></span>
        <span v-else><img src="@/assets/img/tab-bar/message.svg" alt=""></span>
        <span>消息</span>
        </router-link>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const currentIndex = ref(0)
const clickTabItem = (index) => {
    currentIndex.value = index
}
</script>

<style scoped>
.tab-bar {
    border-top: 2px solid #d5d3d3;
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    height: 50px;
    background-color: #f5f3f3;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tab-bar-item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.tab-bar-item img {
    height: 25px;
}
.tab-bar-item span {
    flex: 1;
}
.active {
    color: #ff9854;
}
</style>