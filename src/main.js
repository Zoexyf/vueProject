//入口文件--先测试
// console.log('ok')
import Vue from 'vue'
import app from './App.vue'

//导入图标的 Css 样式，并要拷贝拓展字体库 ttf 文件
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



//导入mint-ui（Header部所使用）
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)
//导入mint-ui(轮播图)
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//导入mint-ui（Button）
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);

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

var vm=new Vue({

  el:'#app',
  render: c=> c(app),

  router//R.4挂载对象到vm实例上

})