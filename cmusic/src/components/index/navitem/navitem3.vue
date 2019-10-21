<template>
    <div class="container">
        <!-- 轮播图，只在第一个导航中显示 -->
        <van-index-bar>
            <div v-for="(item,i) of indexList" :key="i">
                <van-index-anchor :index=item />
                <div v-for="(item2,i2) of singers">
                    <div class="singer">
                        <img src="../../../assets/recommend-item-img.png" />
                        <span>{{item2.sname}}</span>
                    </div>
                </div>
            </div>
        </van-index-bar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            indexList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
            singers:[{src:"../../../assets/recommend-item-img.png",sname:"薛之谦"},{src:"../../../assets/recommend-item-img.png",sname:"邓紫棋"}]
        }
    }
}
</script>
<style scoped>
    .container /deep/ .van-index-anchor{
        height: 20px;
        line-height: 20px;
        text-align:left;
        font-size: 11px;
        color: #fff;
        background: rgba(0,0,0,.1);
    }
    .singer{
        display:flex;
        align-items: center;
        padding: 5px 0;
        margin: 0 5px;
        border-bottom: 1px solid #e4e4e4;
    }
    .singer>img{
        width: 50px;height: 50px;
        border-radius: 3px;
    }
    .singer>span{
        margin-left: 20px;
        color: #2e3030;
        font-size: 14px;
    }
    .container /deep/ .van-index-bar__sidebar{top:58%;}
    .container /deep/ .van-index-bar__index{
        padding-bottom:8px;
        font-weight:600;
    }
</style>