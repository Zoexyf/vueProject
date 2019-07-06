<template>
    <mt-swipe :auto="4000">
        <!-- 将来谁使用这个轮播图组件，谁为我们传递这个lunbotulist ,此时，应该是父组件向子组件传值-->
         <mt-swipe-item v-for="item in lunbotuList" :key="item.id">
             <img :src="item.fImgUrl" alt="">
         </mt-swipe-item>
     </mt-swipe>
</template>

<script>
export default {
    props:["lunbotuList"]
    
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    //交集选择器
     .mint-swipe-item{
         &:nth-child(1){
            background-color: pink;
         }
         &:nth-child(2){
            background-color: skyblue;
         }
         &:nth-child(3){
            background-color: orchid;
         }


         img{
             width: 100%;
             height: 100%;
         }
     }

}


</style>


