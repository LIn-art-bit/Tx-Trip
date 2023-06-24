import { defineStore } from "pinia";
const useMain = defineStore("main",{
    state: () => ({
        isLoading: true
    })
})
export default useMain