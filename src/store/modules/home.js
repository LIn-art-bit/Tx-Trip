import { getHotSuggest, getHomeCategories, getHomeList }  from "@/service/moudles/home.js";
import { defineStore } from "pinia"
const startDay = new Date()
const endDay = new Date()
endDay.setDate(startDay.getDate() + 1) 
const useHome = defineStore("home", {   
    state: () => {
        return {
            hotSuggests: [],
            homeCategories: [],
            startDay,
            endDay, 
            currentPage: 1,
            homeList: []
        }
    },
    actions: {
      async fetchHotSuggests() {
        const res = await getHotSuggest()
        this.hotSuggests = res.data
        // console.log(this.hotSuggests)
        },
    async fetchHomeCategories() {
        const res = await getHomeCategories()
        this.homeCategories = res.data
        // console.log(this.homeCategories)
    },
    async fetchHomeList() {
        const res = await getHomeList(this.currentPage)
       res && this.homeList.push(...res.data)
        this.currentPage++
    }
    }
})
export default useHome