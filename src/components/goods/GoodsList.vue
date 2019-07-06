<template>
    <div class="goods-list">
        <div class="goods-item">
            <img src="http:\/\/apis.juhe.cn\/goodbook\/img\/06c4cdda88badf94acbbd5df889edf86.jpg" alt="">
            <h1 class="title">世界十大文学著作</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥199</span>
                    <span class="old">￥399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http:\/\/apis.juhe.cn\/goodbook\/img\/11913d9f597d9992c16905748559936b.jpg" alt="">
            <h1 class="title">不要因为走的太远而忘记为什么出发</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥199</span>
                    <span class="old">￥399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>
        <div class="goods-item">
            <img src="http:\/\/apis.juhe.cn\/goodbook\/img\/76a27bcacb3ac9f029ff4fa901dc43ab,jpg" alt="">
            <h1 class="title">世界十大文学著作</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥199</span>
                    <span class="old">￥399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60</span>
                </p>
            </div>
        </div>
     
   
   
   
   
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.goods-list{
    display:flex;
    flex-wrap:wrap; 
    padding: 7px;


    .goods-item{
        width: 49%;
        padding: 2px;

        margin: 4px 1px;
        border: 1px solid #ccc;
         box-shadow: 0 0 8px #ccc;
         display: flex;
         flex-direction: column;
         justify-content: space-between;
          min-height: 293px;

        img{
            width: 100%;
        }

        .title{
            font-size:16px;
          
        }
        .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }

    }

}

</style>
