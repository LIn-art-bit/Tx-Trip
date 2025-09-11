import axios from "axios"
import {BASE_URL, TIMEOUT} from "./config"
import useMain from "../../store/modules/main"
const mainStore = useMain()
class MYRequst {
    constructor(baseURL, timeOut) {
        this.instance = axios.create({
            baseURL,
            timeOut
        })
        this.instance.interceptors.request.use((config) => {
            mainStore.isLoading = true
            return config
        }, (err) => {
            return err
        })
        this.instance.interceptors.response.use((config) => {
            mainStore.isLoading = false
            return config
        }, (err) => {
            mainStore.isLoading = false
            return err
        })
    }
    request(config) {
        return new Promise((reslove, reject) => {
            this.instance.request(config).then(res => {
                reslove(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({...config, method: "get"})
    }
    post(config) {
        return this.request({...config, method: "post"})
    }
}

   // test.js
   function calculateSum(a, b) {
    // 故意写一些可能被 AI 指出的问题
    var result = a + b;  // 使用 var 而不是 const
    console.log(result)  // 缺少分号
    return result
}

// 没有错误处理
function divideNumbers(a, b) {
    return a / b  // 没有检查除零错误
}

// SQL 注入风险示例
function getUserData(userId) {
    const query = "SELECT * FROM users WHERE id = " + userId;  // SQL 注入风险
    // ... 执行查询
}
export default new MYRequst(BASE_URL, TIMEOUT)
