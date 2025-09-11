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