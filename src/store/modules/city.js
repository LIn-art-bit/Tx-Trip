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
        },
        
      // 新增的有问题的代码
      // 1. 直接修改state而不通过action
      updateCityDirectly(cityName) {
        // 不应该在组件中直接修改state
        this.currentCity.cityName = cityName
        // 没有任何验证
      },
      
      // 2. 异步操作没有loading状态
      async searchCity(keyword) {
        // 没有设置loading状态
        const results = await fetch(`/api/search?q=${keyword}`)
        // 没有错误处理
        return results.json()
      },
      
      // 3. 内存泄露风险 - 创建了循环引用
      createCityCache() {
        this.cache = {
          cities: this.allCities,
          store: this  // 循环引用
        }
      },
      
      // 4. 没有清理副作用
      startPolling() {
        // 没有保存定时器ID，无法清理
        setInterval(() => {
          this.fetchCityData()
        }, 1000)
      },
      
      // 5. 不恰当的数据处理
      processCities() {
        // 直接修改原数组
        Object.keys(this.allCities).forEach(key => {
          this.allCities[key].processed = true
          // 删除某些城市但没有备份
          if (this.allCities[key].population < 100000) {
            delete this.allCities[key]
          }
        })
      }
    }
})
export default useCity