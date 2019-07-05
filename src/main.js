//入口文件--先测试
// console.log('ok')
import Vue from 'vue'
import app from './App.vue'

//导入图标的 Css 样式，并要拷贝拓展字体库 ttf 文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



// //导入mint-ui（Header部所使用）
// import { Header } from 'mint-ui'
// Vue.component(Header.name, Header)
// //导入mint-ui(轮播图)
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// //导入mint-ui（Button）
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);
// //导入mint-ui（lazy load）
// import { Lazyload } from 'mint-ui';
// Vue.use(Lazyload);

//将按需导入变为全部导入

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'


//S.1导入vue-resource
import VueResource from 'vue-resource'
//S.2 安装vue-resource
Vue.use(VueResource)

//导入格式化时间插件
import moment from 'moment'
//定义全局过滤器--时间格式化
Vue.filter('dateFormat',function(dataStr,pattern="YYYY-MM-DD HH:MM"){
   return  moment(dataStr).format(pattern)
})

//R.1导入路由的包 
import VueRouter from 'vue-router'
//R.2安装路由模块
Vue.use(VueRouter)
//R.3导入自己的router.js路由模块
import router from './router.js'

//设置请求的根路径
// Vue.http.options.root='https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io'

//全局设置post时候表单数据格式组织形式： application/x-www-form-urlencoded
Vue.http.options.emulateJSON =true

//安装图片预览插件
import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)
// with parameters install
// Vue.use(preview, {
//   mainClass: 'pswp--minimal--dark',
//   barsSize: {top: 0, bottom: 0},
//   captionEl: false,
//   fullscreenEl: false,
//   shareEl: false,
//   bgOpacity: 0.85,
//   tapToClose: true,
//   tapToToggleControls: false
// })

var vm=new Vue({

  el:'#app',
  render: c=> c(app),

  router//R.4挂载对象到vm实例上

})