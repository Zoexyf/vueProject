<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lunbotuList="lunbotuList" :isfull="true"> </swiper>
        <!-- 九宫格到六宫格的改造 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		         <img src="../../images/men1.png" alt="">
		         <div class="mui-media-body">新闻资讯</div></router-link> </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photoslist">
		          <img src="../../images/men2.png" alt="">
		          <div class="mui-media-body">图片分享</div></router-link></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		         <img src="../../images/men3.png" alt="">
		        <div class="mui-media-body">商品购买</div></router-link></li>
                <!-- <p></p> -->
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/men4.png" alt="">
		        <div class="mui-media-body">留言专区</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		         <img src="../../images/men5.png" alt="">
		        <div class="mui-media-body">视频专区</div></a></li>
		<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../images/men6.png" alt="">
		        <div class="mui-media-body">联系我们</div></a></li>
	  </ul> 

        <h3>HomeContainer</h3>
    </div>
</template>



<script>
import {Toast} from 'mint-ui'
import swiper from '../subcomponents/swiper.vue'
export default {
    data(){
        return {
            lunbotuList:[]//保存轮播图的数组
        }
    },

    created(){
        this.getLunbotu();
    },


    methods:{
        getLunbotu(){
            //获取轮播图的方法
            this.$http.get('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getlunbo').then(result=>{
                // console.log(result.body)
                // console.log(result.body.status)

                if(result.body){
                    //成功了
                    this.lunbotuList=result.body.rows;
                }else{
                    //失败
                    Toast('加载轮播图失败')
                }
                console.log(this.lunbotuList)

            })

        }

    },

    components:{
        swiper
    }
    
}
</script>



<style lang="scss" scoped>

.mui-grid-view.mui-grid-9{
    background-color: white;
    border: none;
    img{
        width: 60px;
        height: 60px;
    }

    .mui-media-body{
        font-size: 13px;

    }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}

</style>

