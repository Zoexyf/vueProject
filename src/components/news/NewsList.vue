<template>
<div>
    <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        	<router-link :to="'/home/newsinfo/'+item.id">
        		<img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s">
        		<div class="mui-media-body">
                    <!-- item.fImg -->
                    <h1>{{item.title}}</h1>
        			<p class='mui-ellipsis'>
                        <span>{{item.author_name}}</span>
                        <span>{{item.date|dateFormat}}</span>
                    </p>
        		</div>
        	</router-link>
        </li>
        
	</ul>
    
    <h3>新闻列表页面</h3>
</div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newslist:[]
        }
    },
    created(){

        this.getNewsList();

    },
    
     methods:{
        getNewsList(){
            //获取新闻资讯的方法
            this.$http.get('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getnewslist')
            .then(result=>{
                // console.log(result.body)
                // console.log(result.body.status)
                if(result.body){
                    //没有失败应该讲数据保存在data上
                    this.newslist=result.body.data;
                }else{
                    //失败
                    Toast('获取新闻列表失败')
                }
                console.log(this.newslist)

            })

        }

    }
    
}
// 
</script>

<style lang="scss" scoped>
.mui-table-view{
    li{
        h1{font-size: 14px};

        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;

            // 保证字体左右对齐，CSS3内的属性
            display:flex;
            justify-content: space-between;
        }
    }
}



</style>

