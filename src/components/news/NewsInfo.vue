<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
        <span>发表时间：{{newsinfo.date|dateFormat}}</span>
        <span>作者：{{newsinfo.author_name}}</span>
    </p>
    <hr>
        <!-- 内容区 -->
    <div class="content" v-html="newsinfo.url"></div>

    <!-- 评论子组件区 -->
    <comment-box id="this.id"></comment-box>
   
</div>
    
</template>

<script>
import {Toast} from 'mint-ui'
//C.1导入评论子组件
import comment from '../subcomponents/comment.vue'

export default {
    data(){
        return {
            id:this.$route.params.id,
            //将 URL地址中传递过来的ID值，挂载到data上，方便以后调用
            newsinfo:{}//新闻对象

        }
    },
    created(){
        this.getNewsInfo();

    },

    methods:{
        getNewsInfo(){
            
            //获取新闻详情
            this.$http.get('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getnew'+this.id)
            .then(result=>{
                console.log(result.body)
                if(result.body){
                    this.newsinfo=result.body.data[this.id-1]

                }else{
                    Toast('获取新闻失败')
                }
                console.log(this.newsinfo)
            })
        }
    },
    //C.2创建一个components,用来注册子组件
    components:{
       'comment-box':comment

    }
    
}
</script>


<style lang="scss" scoped>
//scoped 避免全局污染，但在此情况下因为下面的类只有单独一个，所以可以去掉，来保证HTML的图片样式
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 18px;
        text-align: center;
        margin: 15px 0;
        color: crimson;

    }
    .subtitle{
        font-size: 13px;
        color:#286aff;
        display:flex;
        justify-content: space-between;

    }
    .content{
        img{
            width: 100%;
        }
    }
}

</style>
