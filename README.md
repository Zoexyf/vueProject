# Vue项目

## 开源协议MIT

## git 直接在vscode可视化工具内提交

可以直接使用 
1. git add .
2. git commit -m "提交信息"
3. git push

## 制作首页APP组件
1. 完成Header 区域，使用的是 Mint-UI 中的Header组件
2. 制作底部的Tabbar 区域，使用的是MUI 的Tabber.html
 + 在制作 购物车 小图标的时候，操作会相对多一些 
 + 先把拓展图标的 Css 样式，拷贝到项目中
 + 拷贝拓展字体库 ttf 文件，到项目中
 + 为购物车小图标 添加如下样式 `mui-icon mui-icon-extra mui-icon-extra-cart`
3. 要在中间区域放置一个 router-view 展示路由匹配到的组件

## 改造tabber 为 router-link

## 设置路由高亮

## 点击 tabber 中的路由连接，展示对应的路由组件

## 制作首页轮播图布局

## 加载首页轮播图数据
 1. 获取数据  ，使用 vue-resource
 2. 使用 vue-resource 的 this.$http.get获得资源
 3. 获取到的数据，要保存到data身上
 4. 使用v-for循环渲染每个item项
 注意：我使用的是Easy Mock模拟接口，里面的json数据以及图片资源来自本地（本来是想直接在网上找，费时间，我就直接找了现成的本地的图片直接调用了 ）

 ## 改造九宫格区域的样式

 ## 改造新闻资讯，路由连接

 ## 新闻资讯 页面制作
 1. 绘制界面
 2. 使用vue-resource获取数据
 3. 渲染真实数据


## 实现新闻列表 点击 跳转到新闻详情
1. 把列表中的每一项改造为 routrt-link 同时，在跳转的时候，应该提供唯一的ID标志符号
2. 创建新闻详情的组件页面 NewsInfo.vue
3. 在路由模块中，将 新闻详情的路由地址 和组件页面对应起来

## 实现 新闻详情 的页面布局 和数据渲染


## 单独封装一个comment.vue 组件模板
1. 先创建一个 单独的comment.vue 组件模板

2. 在需要使用的 comment 组件的页面中，先手动导入 comment组件
    + `import comment from './comment.vue'`
3. 在父组件中 ，使用`components`属性 ，将刚才导入的 comment 组件，注册为自己的子组件
4. 将注册子组件时候的，注册名称，以标签形式 在页面中引用即可

## 获取所有的评论数据显示到页面中

## 实现点击加载更多按钮
