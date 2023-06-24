<template>
    <div class="detail-map">
        <detail-section title="位置周边" look-more="查看更多周边信息" >
            <div class="content"  ref="contentRef">
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import detailSection from "@/components/content/detail-section.vue"

const props = defineProps({
    position: {
        type: Object,
        default: () => ({})
    }
})
const contentRef = ref(null)
onMounted(() => {
    const map = new BMapGL.Map(contentRef.value);          // 创建地图实例 
    const point = new BMapGL.Point(props.position.longitude, props.position.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);   
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker)
})


</script>

<style scoped>
.detail-map {
    margin: 15px 10px;
}
.content {
    margin: 10px 0;
    height: 200px;
}
</style>
