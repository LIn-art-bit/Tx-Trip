<template>
    <div class="detail-infos">
        <div class="houseName">
           {{ houseName }}
        </div>
        <div class="houseTags">
            <span 
            class="item"
            v-for="(item, index) in houseTags" 
            :key="index">{{ item?.tagText?.text }}</span>
        </div>
        <div class="comment">
            <div class="left">
            <span class="count">{{ comments?.overall }}</span>
            <span class="text">{{ comments?.scoreTitle }}</span>
            <span>{{ comments?.commentBrief }}</span>
            </div>
            <div class="right">{{ comments?.totalCount }}条评论<van-icon name="arrow" /></div>
        </div>
        <div class="position">
            <span class="address">{{ position?.address }}</span>
            <span class="text">地图·周边</span>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
const props = defineProps({
    topModule: {
        type: Object,
        default: () => ({})
    }
})
const houseName = computed(() => props.topModule.houseName)
const houseTags = computed(() => props.topModule.houseTags)
const comments = computed(() => props.topModule.commentBrief)
const position = computed(() => props.topModule.nearByPosition)
</script>

<style scoped>
.detail-infos {
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    /* align-items: center; */
}
.houseName {
    font-weight: 700;
    font-size: 20px;
    margin: 8px 0px;

}
.houseTags {
    display: flex;
    font-size: 8px;
    align-items: center;
}
.houseTags .item {
    color:var(--primary-color);
    background-color: rgb(255, 244, 229);
    margin-right: 5px;
    white-space: nowrap;
}
.houseTags :first-child {
    color:#cc9617;
    background-color: rgb(53, 47, 48);
}
.houseTags :last-child {
    color: rgb(15, 236, 244);
    background-color: rgb(243, 247, 253);
}

.comment {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: rgb(244, 247, 251);
    margin: 5px 0;
    padding: 0 8px;
    font-size: 10px;
}
.left span {
    margin: 0 3px;
}
.right {
    color:var(--primary-color);
}
.position {
    padding: 0 8px;
    display: flex;
    height: 30px;
    background-color: rgb(244, 247, 251);
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    white-space: nowrap;
}
.count {
    font-size: 18px;
    font-weight: 700;
}
.text {
    color: rgb(43, 43, 42);
    font-weight: 700;
}
</style>    