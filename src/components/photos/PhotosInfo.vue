<template>
    <div class="photoinfo-container">
        <h3>{{ photosinfo.title }}</h3>
        <p class="subtitle">
            <span>上映时间：{{ photosinfo.release_date }}</span>
             <span>类型：{{ photosinfo.genres }}</span>
        </p>
        <hr>
        <!-- 图片区域 -->
       <img :src=" photosinfo.img_url">
      

        
         


        <!-- 图片内容区域 -->

        <div class="contant" v-html="photosinfo.plot_simple">

        </div>
        <br>

        <!-- 放置一个现成的评论子组件 -->
        <cmt-box :id=this.id></cmt-box>
    </div>

</template>

<script>


//引入评论子组件
import comment from "../subcomponents/comment.vue";

export default {
    data(){
        return{
              //从路由中获取到的推按id
            id:this.$route.params.id,
          
          //图片详情
            photosinfo:{},
          
           
        }
    },
    created(){
        this.getPhotosInfo();
    },
    methods:{
        getPhotosInfo(){
        //获取图片详情
        this.$http.get('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getimageInfo/:id'+this.id)
        .then(result=>{
            if(result.body.status==0){
                this.photosinfo=result.body.messages[this.id-1];

            }
        })
        },
       
    
    },

    //注册子组件
    components:{
        'cmt-box':comment
    }

    
}
</script>

style with <style lang="scss" scoped>
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  img{
      width:100%;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    //两边对齐模型
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

 
}

</style>


