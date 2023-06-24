<template>
    <div class="detail-introduction">
        <detail-section :title="introduction?.title">
            <div class="content">
               <div class="text"> {{ introduction.introduction }}</div>
               <div class="bottom">
                <img src="@/assets/img\detail/detail-introduction.png" alt="">
                 <div>弘源旅途，永无止境！</div>
               </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from "@/components/content/detail-section.vue"
defineProps({
    introduction: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped>
.detail-introduction {
    margin: 15px 10px;
}
.text {
    font-size: 12px;
    color: rgb(129, 131, 130);
}
.bottom img {
    width: 150px;
    height: 20px;
    margin: 10px 0;
}
.bottom {
    margin-top: 30px;
   height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.bottom  div {
   color: rgb(185, 187, 212);
   font-size: 12px; 
}
</style>