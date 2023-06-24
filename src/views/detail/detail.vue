<template>
    <div class="detail page-top" ref="detailRef"> 
        <nav-bar></nav-bar>
            <van-tabs v-model:active="active" class="tab-control" v-if="ifShowTabs" @click-tab="onClickTab">
            <van-tab title="描述"></van-tab>
            <van-tab title="设施"></van-tab>    
            <van-tab title="房东"></van-tab>
            <van-tab title="评论"></van-tab>
            <van-tab title="须知"></van-tab>
            <van-tab title="周边"></van-tab>
            </van-tabs>

        <detail-swipe :swipePicData="swipePicData"></detail-swipe>
        <detail-infos :topModule="topModule" :ref="getSectionRef"></detail-infos>
        <detail-facilitys :houseFacility="houseFacility" :ref="getSectionRef"></detail-facilitys>
        <detail-landlord :landlord="landlordModule" :ref="getSectionRef"></detail-landlord>
        <detail-comment :comment="comment" :ref="getSectionRef"></detail-comment>
        <detail-rules :rules-module="rules" :ref="getSectionRef"></detail-rules>
        <detail-map :position="position" :ref="getSectionRef"></detail-map>
        <detail-introduction :introduction="introduction"></detail-introduction>
    </div>
</template>

<script setup>
import navBar from '../../components/common/nav-bar.vue';
import detailSwipe from './cpns/detail-swipe.vue';
import detailInfos from './cpns/detail-infos.vue';
import detailFacilitys from './cpns/detail-facilitys.vue';
import detailLandlord from './cpns/detail-landlord.vue';
import detailComment from './cpns/detail-comment.vue';
import detailRules from './cpns/detail-rules.vue';
import detailMap from './cpns/detail-map.vue';
import detailIntroduction from './cpns/detail-introduction.vue';
import { useRoute } from 'vue-router';
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import {ref, onMounted, watch} from 'vue';
import useDetail from "@/store/modules/detail.js"
const route = useRoute()
const detailStore = useDetail()
detailStore.fetchDetailData(route.params.id)
const {detailData} = storeToRefs(detailStore)
const swipePicData = computed(() => detailData?.value?.mainPart?.topModule?.housePicture?.housePics)
const topModule = computed(() => detailData?.value?.mainPart?.topModule)
const houseFacility = computed(() => detailData?.value?.mainPart?.dynamicModule?.facilityModule?.houseFacility)
const landlordModule = computed(() => detailData?.value?.mainPart?.dynamicModule?.landlordModule)
const comment = computed(() => detailData?.value?.mainPart?.dynamicModule?.commentModule)
const rules = computed(() => detailData?.value?.mainPart?.dynamicModule?.rulesModule)
const position = computed(() => detailData?.value?.mainPart?.dynamicModule?.positionModule)
const introduction = computed(() => detailData?.value?.mainPart?.introductionModule)
const active = ref(0)
const detailRef = ref(null) //detail页面
const ifShowTabs = ref(false) 
const scrollTop = ref(0) //相对页面滚动高度
//
onMounted (() => {
 detailRef.value?.addEventListener("scroll", () => {
    scrollTop.value = detailRef.value?.scrollTop
    if(detailRef.value?.scrollTop > 470) {
        ifShowTabs.value = true
    }
   else {
    ifShowTabs.value = false
   }
 })
})
//通过ref动态绑定method，获取由各个模块组成的数组
let detailItem = []
 const getSectionRef = (value) => {
    detailItem.push(value?.$el)
 }
 detailItem = detailItem.filter((item, index) => {
  return arr.indexOf(item) === index;
});  //数组去重
// console.log(detailItem)
//通过tab点击导航到相应位置
let isClick = false
let currentLocation = 0
 const onClickTab = () => {
    isClick = true
     const itemLocation = detailItem[active.value].offsetTop - 95
     currentLocation = itemLocation
    detailRef?.value.scrollTo({
        top:  itemLocation,
        behavior: "smooth"
    })
}

watch(scrollTop, (newValue) => {
    if(newValue === currentLocation) isClick = false //当点击完成后，恢复下面步骤
    if (isClick) return                       //当时通过点击是取消下面的步骤
    let index = detailItem.length
    for(let i = 0; i < detailItem.length; i++) {
        if(newValue < detailItem[i].offsetTop + 44) {
            index = i 
            break
        }
    }
    active.value = index
}) // 遍历数组，如果滚动的位置小于元素的位置，那导航应处于这个元素的前一个
</script>

<style scoped>
.detail {
    margin-bottom: 50px;
}
.tab-control {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
}
</style>