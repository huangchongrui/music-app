<template>
    <div class="container">
        <!-- 推荐歌单 -->
        <div class="recommend">推荐歌单</div>
        <ul class="recommend-list">
            <li class="recommend-item" v-for="(item,i) of recommendList" :key="i">
                <div class="recommend-num">
                    <img src="../../../assets/earphone.png"/>
                    <!-- 播放次数 -->
                    <span>{{item.num}}万</span>
                </div>
                <!-- 歌单封面 -->
                <img src="../../../assets/recommend-item-img.png"/>
                <!-- 歌单介绍 -->
                <p>{{item.content}}</p>
            </li>
        </ul>
        <!-- 推荐歌曲 -->
        <div class="recommend">推荐歌曲</div>
        <ul class="recommend-list">
            <li class="recommend-item p-height" v-for="(item,i) of recommendMusicList" :key="i">
                <!-- 歌曲封面 -->
                <img src="../../../assets/recommend-item-img.png"/>
                <!-- 歌曲名称 -->
                <p>{{item.mname}}</p>
                <!-- 歌手名称 -->
                <p>{{item.uname}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            recommendList:[{num:100,content:"[VIP专享] 一周新歌推荐}"},{num:100,content:"[VIP专享] 一周新歌推荐}"},{num:100,content:"[VIP专享] 一周新歌推荐}"},{num:100,content:"[VIP专享] 一周新歌推荐}"},],
            recommendMusicList:[{mname:"我和我的祖国我和我的祖国",uname:"王菲"},{mname:"我和我的祖国",uname:"王菲"},{mname:"我和我的祖国",uname:"王菲"},{mname:"我和我的祖国",uname:"王菲"},]
        }
    }
}
</script>
<style scoped>
    .container{color:#2e3030;text-align:left}
    .recommend{
        height: 65px;
        line-height: 65px;
        padding-left: 1.5%;
        font-size: 14px;
        font-weight: 700;
    }
    .recommend-list{
        display:flex;
        justify-content:space-between;
        align-items:center;
        flex-wrap:wrap;
    }
    .recommend-item{
        position: relative;
        width: 33.3%;
        padding: 0 1%;
        font-size:12px;
        font-weight:500;
        margin-bottom:10px;
    }
    .recommend-num{
        position:absolute;
        top:0;left:0;
        width:100%;
        height: 35px;
        border-radius: 3px;
        text-align:right;
        color:#fff;
        padding:2px 5% 0 3%;
    }
    .recommend-num>img{width:12px}
    .recommend-item>img{width:100%;margin-bottom:5px;}
    .recommend-item>p{
        line-height:16px;
        font-size:12px;
    }
    .p-height>p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
</style>