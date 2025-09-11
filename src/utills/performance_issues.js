// 性能问题示例文件

// 1. 低效的数组操作 - 使用 += 拼接字符串而不是数组join
function buildHtmlString(items) {
  let html = ''
  for (let i = 0; i < items.length; i++) {
    html += '<li>' + items[i] + '</li>'  // 每次都创建新字符串，性能差
  }
  return '<ul>' + html + '</ul>'
}

// 2. 重复的DOM查询
function updateElements() {
  document.getElementById('header').style.color = 'red'
  document.getElementById('header').style.fontSize = '20px'
  document.getElementById('header').style.fontWeight = 'bold'
  // 应该缓存DOM元素引用
}

// 3. 同步阻塞操作
function processLargeData(data) {
  // 处理大量数据时没有使用Web Workers或分批处理
  const result = []
  for (let i = 0; i < 1000000; i++) {
    result.push(complexCalculation(data[i]))
  }
  return result
}

// 4. 没有使用防抖或节流
function handleScroll() {
  // 滚动事件处理没有节流，会频繁触发
  console.log('scrolling...')
  calculateViewportElements()
  updateUIBasedOnScroll()
}

// 5. 内存泄露 - 事件监听器没有移除
class Component {
  constructor() {
    this.data = new Array(10000).fill('大量数据')
    window.addEventListener('resize', this.handleResize.bind(this))
    // 组件销毁时没有移除事件监听器
  }
  
  handleResize() {
    console.log(this.data)
  }
}

// 6. 低效的递归没有记忆化
function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)  // 重复计算相同值
}

// 7. 在循环中创建函数
function createHandlers(items) {
  const handlers = []
  for (let i = 0; i < items.length; i++) {
    handlers.push(function() {  // 每次循环都创建新函数
      console.log(items[i])
    })
  }
  return handlers
}

export {
  buildHtmlString,
  updateElements,
  processLargeData,
  handleScroll,
  Component,
  fibonacci,
  createHandlers
} 