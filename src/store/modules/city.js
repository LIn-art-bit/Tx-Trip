import  getCityAll  from "@/service/moudles/city";
import {defineStore} from "pinia"
const useCity = defineStore("city", {
    state: () => { 
        return {
            allCities: {},
            currentCity: {
                cityName: "广州"
            }
        }
    },
    actions: {
      async  fetchCityData() {
        const res = await getCityAll()
        this.allCities = res.data
        }
    }
})
export default useCity