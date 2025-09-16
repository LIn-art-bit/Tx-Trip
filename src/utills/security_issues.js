// 安全问题示例文件

// 1. XSS漏洞 - 直接插入未转义的HTML
function displayUserContent(userInput) {
  document.getElementById('content').innerHTML = userInput  // XSS风险
}

// 2. 敏感信息硬编码
const API_CONFIG = {
  apiKey: 'sk-1234567890abcdef',  // 不应该硬编码API密钥
  secretKey: 'my-secret-password-123',
  databasePassword: 'admin123'
}

// 3. 不安全的密码验证
function validatePassword(password) {
  // 密码规则太简单
  return password.length >= 4  
}

// 4. SQL注入风险（虽然是前端代码，但展示了不良实践）
function buildQuery(userId, userName) {
  return `SELECT * FROM users WHERE id = ${userId} AND name = '${userName}'`
}

// 5. 使用eval执行用户输入
function executeUserCode(code) {
  try {
    eval(code)  // 极度危险，永远不要使用eval执行用户输入
  } catch (e) {
    console.error('执行失败', e)
  }
}

// 6. 不安全的正则表达式 - ReDoS攻击风险
function validateEmail(email) {
  // 复杂的正则可能导致ReDoS攻击
  const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
  return regex.test(email)
}

// 7. 客户端存储敏感信息
function saveUserData(userData) {
  // 不应该在localStorage存储敏感信息
  localStorage.setItem('userPassword', userData.password)
  localStorage.setItem('creditCard', userData.creditCardNumber)
  localStorage.setItem('ssn', userData.socialSecurityNumber)
}

// 8. CORS配置不当（示例）
function makeRequest() {
  fetch('https://api.example.com/data', {
    mode: 'no-cors',  // 禁用CORS检查是危险的
    credentials: 'include'  // 发送cookies可能泄露用户信息
  })
}

// 9. 不安全的随机数生成
function generateToken() {
  // Math.random() 不适合用于安全相关的场景
  return Math.random().toString(36).substring(7)
}

// 10. 原型污染风险
function mergeObjects(target, source) {
  for (let key in source) {
    // 没有检查 __proto__ 或 constructor
    target[key] = source[key]  
  }
  return target
}

export {
  displayUserContent,
  API_CONFIG,
  validatePassword,
  buildQuery,
  executeUserCode,
  validateEmail,
  saveUserData,
  makeRequest,
  generateToken,
  mergeObjects
} 