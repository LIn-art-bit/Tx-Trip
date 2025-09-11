// 逻辑错误和边界条件问题示例

// 1. 边界条件处理不当
function getArrayElement(arr, index) {
  // 没有检查负数索引
  if (index > arr.length) {
    return null
  }
  return arr[index]
}

// 2. 浮点数比较错误
function calculateDiscount(price, discountRate) {
  const discountAmount = price * discountRate
  // 直接比较浮点数
  if (discountAmount === 10.1) {
    console.log('特殊折扣')
  }
  return price - discountAmount
}

// 3. 逻辑运算符使用错误
function checkPermission(user) {
  // 应该使用 && 而不是 ||
  if (user.isAdmin || user.hasPermission) {
    return true
  }
  // 永远不会执行到这里如果user.isAdmin为true
  if (user.isSpecialUser) {
    return true
  }
  return false
}

// 4. 异步操作的竞态条件
let currentUser = null
async function updateUser(userId) {
  const user = await fetchUser(userId)
  // 如果多次调用，可能会有竞态条件
  currentUser = user
}

// 5. 错误的类型判断
function processValue(value) {
  // typeof null 返回 'object'
  if (typeof value === 'object') {
    return value.toString()  // null没有toString方法
  }
  return value
}

// 6. 日期处理错误
function isExpired(expiryDate) {
  const today = new Date()
  // 月份是从0开始的，容易出错
  const expiry = new Date(2024, 12, 31)  // 实际上是2025年1月31日
  return today > expiry
}

// 7. 数组方法使用错误
function removeItem(array, item) {
  // splice会修改原数组，但这里没有返回修改后的数组
  array.splice(array.indexOf(item), 1)
  // 如果item不存在，indexOf返回-1，会删除最后一个元素
}

// 8. 闭包陷阱
function createFunctions() {
  const functions = []
  for (var i = 0; i < 5; i++) {
    functions.push(function() {
      return i  // 所有函数都会返回5
    })
  }
  return functions
}

// 9. 错误的递归终止条件
function countdown(n) {
  console.log(n)
  // 忘记处理负数的情况
  if (n === 0) {
    return
  }
  countdown(n - 1)
}

// 10. 对象引用问题
function modifyUserData(userData) {
  const newData = userData  // 只是复制了引用
  newData.modified = true
  return newData  // 修改了原对象
}

// 11. 错误的数组遍历
function processArray(items) {
  // 在遍历时修改数组长度
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      items.splice(i, 1)  // 会跳过元素
    }
  }
  return items
}

// 12. Promise处理错误
async function fetchAllData(urls) {
  const promises = urls.map(url => fetch(url))
  // 如果任何一个失败，整个操作都会失败
  const results = await Promise.all(promises)
  return results
}

export {
  getArrayElement,
  calculateDiscount,
  checkPermission,
  updateUser,
  processValue,
  isExpired,
  removeItem,
  createFunctions,
  countdown,
  modifyUserData,
  processArray,
  fetchAllData
} 