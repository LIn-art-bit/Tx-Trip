<template>
    <div class="detail-commment">
        <detail-section title="热门评论" look-more="查看全部评论">
            <div class="content" v-if="comment">
                <div class="head">
                    <div class="overall">
                        <div class="num">{{ comment.overall }}</div>
                        <div class="text">
                            <span>{{ comment.scoreTitle }}</span>
                            <span>{{ comment.totalCount }}条评论</span>
                            <van-rate v-model="comment.overall " 
                            :size="12"
                             color="#ff9854" 
                            void-icon="star"
                             void-color="#fffff"
                             readonly/>
                        </div>
                    </div>
                    <div class="sub-scores">
                        <span v-for="(item, index) in comment.subScores" :key="index">
                            {{ item}}
                        </span>
                    </div>
                </div>
                <div class="tags">
                    <span v-for="(item, index) in comment.commentTagVo" :key="index">
                        {{ item.text }}
                    </span>
                </div>
                <div class="comment">
                   <div class="user">
                    <img :src="comment.comment?.userAvatars" alt="">
                    <ul class="message">
                        <li class="userName">{{ comment.comment?.userName }}</li>
                        <li class="comment-date">{{ comment.comment?.checkInDate }}</li>
                    </ul>
                   </div>
                   <div class="comment-detail">
                    {{ comment.comment?.commentDetail}}
                   </div>
                </div>
            </div>
        </detail-section>
    </div>
</template>

<script setup>
import detailSection from "@/components/content/detail-section.vue"
defineProps({
    comment: {
        type: Object,
        default: () => ({})
    }
})
</script>
<style scoped>
.detail-commment {
    margin: 5px 10px;
}
.head {
    margin: 10px 0 ;
    display: flex;
    justify-content: space-between;
}
.overall {
    width: 100%;
    display: flex;
}
.num {
    font-size: 50px;
    font-weight: 700;
    margin-right: 10px;
}
.text {
    font-size: 12px;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.text :nth-child(2) {
    color: rgb(153, 147, 148);
}
.text span {
    margin-bottom: 5px;
}
.sub-scores {
    justify-content: right;
    align-content: center;
    display: flex;
    flex-wrap: wrap;
}
.sub-scores span {
    text-align: center;
    font-size: 12px;
    color: rgb(105, 111, 120);
    margin: 3px;
    width: 40%;
}
.tags {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
}
.tags span {
    border-radius: 10px;
    color: rgb(105, 111, 120);
    font-size: 12px;
    padding: 3px;
    margin: 5px 3px;
    background-color: rgb(240, 236, 234);
}
.comment {
    margin: 10px 0;
    background-color: rgb(247, 249, 251);
}
.comment img {
    margin: 0 5px;
    padding: 10px 0;
    height: 40px;
    border-radius: 50%;
}
.user {
    margin: 10px 5px;
    display: flex;
    align-items: center;
}
.user ul {
    padding-top: 5px;
}
.user li {
    margin: 3   px 2px;
}
.useName {
    font-size: 20px;
}
.comment-date {
    color: rgb(105, 111, 120);
    font-size: 12px;
}
.comment-detail {
    font-size: 13px;
    margin: 10px 5px;
}
</style>