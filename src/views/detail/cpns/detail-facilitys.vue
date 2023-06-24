<template>
    <div class="detail-facilitys">
        <detail-section title="房屋设施" look-more="查看全部设施">
            <div class="content">
                <template v-for="(item, index) in houseFacility.houseFacilitys" :key="index">
                    <div class="list" v-if="houseFacility.facilitySort.includes(index)">
                        <div class="list-head">
                        <span class="icon"><img :src="item.icon" alt=""></span>
                        <span class="group-name">{{ item.groupName }}</span>
                        </div>
                        <div class="list-body">
                        <div class="body-item" v-for="(element, indey) in item.facilitys.slice(0, 4)" :key="indey">
                         <img src="@/assets/img\detail/right.svg" alt=""><span>{{ element.name }}</span>
                        </div>
                    </div>
                    </div>
                </template>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from "@/components/content/detail-section.vue"
import useDetail from "../../../store/modules/detail";
const props = defineProps({
    houseFacility: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style scoped>
.detail-facilitys {
    margin: 10px 10px;
}
.content {
    background-color: rgb(248, 250, 251);
    margin: 10px 0;
    flex-direction: column;
    display: flex;
}
.icon img{
    width: 20px;
    margin-bottom: 5px;
}
.list {
    margin: 20px 0;
    display: flex;
    align-items: center;
   
}
.list-head {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 15px;
    font-size: 12px;
}
.list-body {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
}
.body-item {
    width: 45%;
    font-size: 12px;
    margin: 5px 0;
}
.body-item img {
    width: 15px;
    margin: 0 5px;
}
</style>