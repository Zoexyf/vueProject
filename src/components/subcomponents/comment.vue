<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）"
        maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.title">
                <div class="cmt-title">
                    第{{i+ 1}}楼&nbsp;&nbsp;用户：{{item.author_name}}&nbsp;&nbsp;发表时间：{{item.date|dateFormat()}}                  
                </div>
                <div class="cmt-body">
                   {{item.title==='undifined'?'此用户很懒什么也没留下':item.title}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore"> 加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
    data(){
        return {
            pageIndex:1,//默认第一页数据
            comments:[],//所有的评论数据
            msg:''
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        //获取评论
        getComments(){
            this.$http
            // .get("https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getcomments/"+this.id+"?pageindex="+this.pageIndex)
            .get("https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getcomments/")
            .then(result=>{
                if(result.body){
                    // this.comments=result.body.data
                    //每当获取新评论的时候，不能清空之前数据，应该拼接成新数组
                    this.comments=this.comments.concat(result.body.data)


                }else{
                    Toast('获取失败')

                }
                console.log(this.comments)
            })
        },
        //加载更多
        getMore(){
            this.pageIndex++;
            this.getComments()
        },
        //发表评论
        postComment(){
            //校验是否为空内容
            if(this.msg.trim().length===0){
                Toast('评论内容不能为空')
            }

            //post请求的参数
            //参数1：请求的URL地址；参数2：提交给服务器的数据对象{content:this.msg}
            //参数3：定义提交时候，表单中数据的格式{emulateJSON:true}
            this.$http
            .post('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/postcomment/'+this.$route.params.id,
            {content:this.msg.trim()}).then(function(result){
                if(result.body){

                    //1.拼接出一个评论对象
                    var cmt={author_name:'匿名用户',
                             date:Date.now(),
                             title:this.msg.trim()
                            }
                            this.comments.unshift(cmt);
                            this.msg='';
                }
            })
        }
    },
    props:["id"]  
}
</script>

<style lang="scss" scoped>
.cmt-container{
    margin: 5px 0;
    h3{
        font-size:18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list{
        .cmt-item{
            font-size: 15px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;

            }
            .cmt-body{
                line-height: 35px;
                text-indent: 2em;

            }

        }
    }


}

</style>


