<template>
    <div class="detail-landlord">
        <detail-section title="房东介绍" look-more="查看房东主页">
            <div class="content">
                <div class="top-scroll">
                    <img :src="landlord?.topScroll" alt="">
                </div>
                <div class="hotel">
                        <div class="left">
                            <img :src="landlord?.hotelLogo" alt="">
                           <div class="text">
                            <span class="hotel-name">{{ landlord?.hotelName }}</span>
                            <div class="tags">
                                <span  v-for="(item, index) in landlord?.hotelTags" :key="index" :style="{color: item.color}">{{ item.tagText.text }}</span>
                            </div>
                           </div>
                    </div>
                    <button class="right">联系房东</button>
                </div>
                <div class="summary">
                    <div class="summary-item" v-for="(item, indey) in landlord?.hotelSummary" :key="indey">
                        <div class="title">{{ item.title }}</div>
                        <div class="introduction">{{ item.introduction }}</div>
                        <div class="tip">{{ item.tip }}</div>
                    </div>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from '../../../components/content/detail-section.vue';
defineProps({
    landlord: {
        type: Object,
        defult: () => ({})
    }
})
</script>

<style scoped>
.detail-landlord {
    margin: 15px 10px;
}
.top-scroll img {
    height: 30px;
   width: 100%;
}
.hotel {
    margin: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left {
    display: flex;
    align-items: center;
}
.left img {
    height: 50px;
}
.hotel-name {
    font-weight: 600;
}
.right {
    height: 25px;
    font-size: 12px;
    color: rgb(255, 255, 255);
    border: none;
    border-radius: 5px;
    background-color: rgb(255, 149, 27);
}
.tags {
    margin: 3px 0;
    color: rgb(153, 147, 148);
    font-size: 12px;
}
.tags span {
    padding: 0 3px;
}
.tags :nth-child(1) {
    border-right: 1px solid rgb(153, 147, 148);
}
.tags :nth-child(2) {
    border-right: 1px solid rgb(153, 147, 148);
}
.summary {
    margin: 20px 5px;
    display: flex;
    justify-content: space-between;
}
.summary-item div {
    margin: 5px 0;
}
.title {
    color: rgb(153, 147, 148);
    font-size: 12px;
}
.tip {
    color: rgb(153, 147, 148);
    font-size: 12px;
}
.introduction {
    font-weight: 600;
    font-size: 20px;
}
</style>