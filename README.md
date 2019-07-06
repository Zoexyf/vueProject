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
getComments

## 实现点击加载更多按钮
1. 为加载更多按钮绑定点击事件，在事件中去请求下一页数据
2. 点击加载更多，让pageIndex++,然后重新盗用 this .getComments()方法
3. 为了防止新数据覆盖老数据，在点击加载更多的时候，每当获取到新数据，应该让老数据调用数组的concat 方法，拼接上新数组

## 发表评论
1. 将文本框做双向数据绑定
2. 为发表按钮绑定一个事件
3. 校验评论是否为空，如果为空，则Toast提示用户 评论内容不能为空
4. 通过vue-router将提交的评论内容提交给服务器
5. 当发表评论OK后，重新刷新列表，以查看最新的评论
 + 如果调用getComments方法重新刷新评论列表的话，可能只能得到最后一页的评论，前几页的评论获取不到
 + 所以可以选择这种方法：当评论成功后，在客户端，手动拼接处一个最新的评论对象，然后 调用 数组的unshift方法，把最新的评论，追加到data 中comments的开头，这样就能实现刷新评论列表的需求
 6. 使用post方法请求,注意三个参数==》
 + 参数1：请求的URL地址；参数2：提交给服务器的数据对象{title:this.msg}
 + 参数3：定义提交时候，表单中数据的格式{emulateJSON:true} 该参数可在main.js中全局配置 `Vue.http.options.emulateJSON =true`
 7. 通过路由获取url的id `this.$route.params.id`
 8. 一个未完成的需求（评论加载更多，有关pageIndex的JSON格式不清楚，调用的数据接口现在还无法实现）

 # 图片分享 

 ## 创建路由组件 
   1. 将a链接改为 router-link to="/home/photolist",创建photolist.vue组件模板结构
   2. 添加router.js中的路由指向，并显示最定的组件页面
## 绘制图片列表，组件页面结构，并美化样式
1. 制作顶部的滑动条
 + 导入MUI的组件tab-top-webview-main.html，发现页面从顶部开始，因为主顶部栏在APP.vue中以及设定好，不应该存在定位问题，之后检查发现，该组件还定义了一种全屏的类fullscreen，删除即可
 + 滑动条无法正常触发，通过查看官方文档，发现这是JS组件，需要被初始化，解决方法： 导入mui.js，调用官方提供的方式进行初始化(http://dev.dcloud.net.cn/mui/ui/#scroll)
  ```
  mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
  ```
  + 由于mui引入会与webpack冲突，导致无用包的引入，系统报错，采用去掉webpack严格模式的方法解决该问题，（改掉mui中的不严格代码也可以实现，但不现实）
    - 安装包 `npm install babel-plugin-transform-remove-strict-mode`
    - 给 `.babelrc`中添加`"plugins": ["transform-remove-strict-mode"]`

  + 滑动实现后会报警告，只需要给全局加一个样式 touch-action 启用用户操作（提高滑动流畅度,谷歌自己支持）
  + 滑动实现后需要进行二次刷新才能出现滑动效果，原因：如果要初始化滑动条必须要等待DOM元素加载完成 将初始化代码放置到 mounted函数 中即可解决（Vue函数生命周期需要再深刻理解一下）
  + 当滑动条调试完成后，发现tabber不能正常工作，解决方法 将每个tabber中的`mui-tab-item`重新改一下名字，并且将之前的样式重新拷贝为新类名的属性

2. 获取图片列表的类别，并渲染
  + 首先手动拼接出一个完整的分类列表，表示全部 id==0
  + 渲染的时候，选中高亮的效果消失，可双向绑定使用三元表达是来设计
  `<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in cates" :key="item.id">`
 
### 制作图片列表
1. 图片列表需要使用 懒加载技术 ，使用 Mint-UI 提供的现成的组件`lazy load`
2. 根据 lazy load的使用文档进行使用（http://mint-ui.github.io/docs/#/en2/lazyload）
3. 渲染列表数据
  + 渲染完成后上拖发现会盖住顶部，直接将顶部的z-index改大
  + 渲染完成后改造每个图片的路由，发现改造完后 原li发生变化 解决方法是给li改后的router-link 加一个 tag="li",指定标签类型，才不会失去之前的渲染属性

## 实现图片详情页面(未实现此功能)
1. 使用vue-preview这个略缩图插件
2. 获取所有的图片列表 然后用 v-for 指令渲染数据
3. 注意: img 标签上的class不能去掉
4. 注意： 每个 图片数据对象中 ，必须有width和height 属性

## 绘制 商品列表，页面基本结构并美化
1. 实现经典两列布局

flex-wrap (适用于父类容器上) 设置或检索伸缩盒对象的子元素超出父容器时是否换行。


## 在手机上进行项目预览和测试
1. 保证手机和电脑处于同一个WiFi，也就是手机可以访问到电脑的IP
2. 打开项目中 package.json 文件，在dev脚本中添加一个 --host 指令，把当前电脑 WiFi IP地址，设置为 --host 的指令值
  + 查看自己电脑所处的 WiFi的ip呢，在cmd 终端中运行 `ipconfig`，查看 那个的 ip 地址
  



### 一些小点

1. data 是往自己组件内部，挂载一些私有的组件
2. 网页中两种跳转方式
  + 方式1，标签跳转
  + 方式2，使用window.location.herf 的形式，叫做编程式导航
  + 使用JS的形式进行路由导航
    - 注意： 一定要区分 this.$route 和 this.$router 这两个对象，
    - 其中： this.$route 是路由【参数对象】，所有路由中的参数， params, query 都属于它
    - 其中： this.$router 是一个路由【导航对象】，用它 可以方便的 使用 JS 代码，实现路由的 前进、后退、 跳转到新的 URL 地址
      ```
      console.log(this);
      // 1. 最简单的
      // this.$router.push("/home/goodsinfo/" + id);
      // 2. 传递对象
      // this.$router.push({ path: "/home/goodsinfo/" + id });
      // 3. 传递命名的路由
      this.$router.push({ name: "goodsinfo", params: { id } });
      ```
