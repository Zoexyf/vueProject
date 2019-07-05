import VueRouter from 'vue-router'

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotosList from './components/photos/PhotosList.vue'
import PhotosInfo from './components/photos/PhotosInfo.vue'


var router = new VueRouter({
  routes: [//配置路由规则的
    {path:'/',component: HomeContainer},
   {path:'/home',component: HomeContainer},
   {path:'/member',component: MemberContainer},
   {path:'/cart',component: CartContainer},
   {path:'/search',component: SearchContainer},
   {path:'/home/newslist',component: NewsList},
   {path:'/home/newsinfo/:id',component: NewsInfo},
   {path:'/home/photoslist',component: PhotosList},
   {path:'/home/photosinfo/:id', component: PhotosInfo},

  //  {path:'/home/photoslist',component:PhotosList},
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做router-link-active
})

// 把路由对象暴露出去
export default router