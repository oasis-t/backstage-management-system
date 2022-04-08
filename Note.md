# 设计过程

### 前置准备
* 安装node.js v14.18.0
* 安装vue 4.5.14
* 安装element

### 开始写代码
1. vue-cli创建项目
2. 引入element（开发大型项目借助 babel-plugin-component按需引入，由于项目较小这里使用全局引入）
3. 定义组件，配置路由映射关系
4. 使用element组件快速布局
5. 定义侧边栏导航组件，添加样式及行为
6. 定义页头组件，添加样式及行为
7. 编写home组件

### 学习心得
* 路由编程式导航，this.$router,push()传入对象或字符串路径
* flex布局中justify-content:space-between用于两端对齐
