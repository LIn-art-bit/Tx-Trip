import { getDetail } from "../../service/moudles/detail";
import { defineStore } from "pinia";
const useDetail = defineStore("detail", {
    state: () => ({
        detailData: {}
    }),
    actions: {
        async fetchDetailData (houseId) {
            const res = await getDetail(houseId) 
            this.detailData = res.data
        }
    }
}
)
export default useDetail