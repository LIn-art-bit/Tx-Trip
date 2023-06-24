<template>
    <div class="detail-rules">
        <detail-section title="预定须知">
            <div class="content">
                    <div class="rule-list" v-for="(item,index) in rulesModule.orderRules" :key="index">
                        <span class="title">{{ item.title }}</span>
                        <span class="introduction">{{ item.introduction }}</span>
                    </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from "@/components/content/detail-section.vue"
defineProps({
    rulesModule: {
        type: Object,
        default: () => ({})
    }
})
</script>

<style scoped>
.detail-rules {
    font-size: 12px;
    margin: 20px 10px;
}
.rule-list {
    display: flex;
    margin: 15px 0;
}
.introduction {
    margin-left: 30px;
}
.title {
    width: 15%;
    color: rgb(105, 111, 120);
}
</style>