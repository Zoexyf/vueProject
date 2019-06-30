<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120字）"
        maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(item,i) in comments" :key="item.date">
                <div class="cmt-title">
                    第{{i+ 1}}楼&nbsp;&nbsp;用户：{{item.author_name}}&nbsp;&nbsp;发表时间：{{item.date|dateFormat()}}                  
                </div>
                <div class="cmt-body">
                   {{item.title==='undifined'?'此用户很懒什么也没留下':item.title}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            pageIndex:1,//默认第一页数据
            comments:[]//所有的评论数据
        }
    },
    created(){
        this.getComments();
    },
    methods:{
        getComments(){
            this.$http
            .get('https://www.easy-mock.com/mock/5d171ce3a31bc21d4c4376aa/vue.studyit.io/api/getcomments/')
            .then(result=>{
                if(result.body){
                    this.comments=result.body.data


                }else{
                    Toast('获取失败')

                }
                console.log(this.comments)
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


