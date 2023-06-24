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
export default new MYRequst(BASE_URL, TIMEOUT)
