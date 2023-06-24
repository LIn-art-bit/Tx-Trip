import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "underscore"
export default function useScroll() {
    const ifBottom = ref(false)
    const ifSearchShow = ref(false)
    const ifTabControl = ref(false)
    const scrollEventListener = throttle(() => {
  
        const  clientHeight = document.documentElement.clientHeight
        const   scrollTop = document.documentElement.scrollTop
        const   scrollHeight = document.documentElement.scrollHeight
          if(clientHeight + scrollTop + 1 >= scrollHeight) {
            ifBottom.value = true
          }
          if(scrollTop>420) {
            ifSearchShow.value = true
          }
          else {
            ifSearchShow.value = false
          }
      
    }, 100)
    
    onMounted(() => {
        window.addEventListener("scroll", scrollEventListener)
    })
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollEventListener)
    }) 
    return { ifBottom, ifSearchShow}
}