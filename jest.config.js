module.exports = {
  // 寻找测试文件
  testMatch: ["**/__test__/**/*.[jt]s?(x)"],
  moduleFileExtensions: [
    "js",
    "json",
    // 告诉 Jest 处理 `*.vue`文件
    "vue"
  ],
  // 配置那些文件交给那个模块去处理
  transform: {
    // 用 'vue-jest'处理 `*.vue`文件
    ".*\\.(vue)$": "vue-jest",
    // 用 babel-jest 处理 js
    ".*\\.(js)$": "babel-jest"
  },
  testEnvironment: "jsdom"
}