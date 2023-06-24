<template>
    <div class="detail-swipe">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in swipePicData" :key="index">
            <img :src="item.url">
        </van-swipe-item>
        <template #indicator="{ active }">
    <div class="custom-indicator" v-if="swipePicData">
        <div class="indicator-group " 
        v-for="(item, key) in swipeGroup" :key="key" 
        :class="{ active: swipePicData[active]?.enumPictureCategory == key}">
            <span class="title">{{getName(item[0].title)}}：</span>
            <span class="count" v-if="swipePicData[active]?.enumPictureCategory == key">{{ item.length }}</span>
        </div>
    </div>
  </template>
     </van-swipe>
    </div>
</template>

<script setup>

// const route = useRoute()
// const detailStore = useDetail()
// detailStore.fetchDetailData(route.params.id)
// const {detailData} = storeToRefs(detailStore)
// const swipePicData = computed(() => detailData?.value?.mainPart?.topModule?.housePicture?.housePics)
const props = defineProps({
  swipePicData: {
    type: Array,
    default: () => ([])
  }
})
//将轮播图数据进行重构分组以方便对轮播图指示器进行重构
const swipeGroup = {}
const rawSwipeData = props.swipePicData
    if(rawSwipeData) {
      for(const item of rawSwipeData) {
        let valueArray = swipeGroup[item.enumPictureCategory]
        if(!valueArray) {
            valueArray = []
            swipeGroup[item.enumPictureCategory] = valueArray
        }
        valueArray.push(item)
    }
    }
const nameReg = /【(.*?)】/i
const getName = (name) => {
   const results = nameReg.exec(name)
   return results[1]
}
//当前轮播在当前分组的索引 传入当前活跃的item，通过findindex找到他在当前分组的索引
const getGroupIndex = (item) => {
  const value = toRaw(item)
  const valueArray = swipeGroup[value.enumPictureCategory]
   return valueArray.findIndex(element => element == value)   
}

</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .van-swipe-item img {
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    /* width: 50px; */
    background: rgba(0, 0, 0, 0.1);
    color: #fff;
  }
  .custom-indicator  {
    display: flex;
    
  }
  .indicator-group {
    /* width: 40px; */
    margin: 0 3px;
  }
  .active {
    background-color: #fff;
    color: rgb(5, 0, 0);
  }
</style>