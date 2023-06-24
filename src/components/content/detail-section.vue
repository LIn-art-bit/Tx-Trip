<template>
    <div class="detail-section">
        <div class="top">{{title}}</div>
        <slot class="content">插槽内容</slot>
        <div class="bottom" v-if="lookMore.length">{{lookMore}}<van-icon name="arrow" /></div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: ""
    },
    lookMore: {
        type: String,
        default: ""
    }
})

</script>

<style scoped>
.detail-section {

    display: flex;
    flex-direction: column;
}
.top {
    font-size: 20px;
    font-weight: 700;
    padding-bottom:10px;
    border-bottom: 1px solid rgb(240, 240, 240);
}

.bottom {
    font-size: 12px;
    font-weight: 600;
    display: flex;
    color:var(--primary-color);
    justify-content: right;
}
</style>