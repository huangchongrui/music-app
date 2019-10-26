<template>
    <div class="container">
        <!-- 轮播图，只在第一个导航中显示 -->
        <div class="carousel">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(item, index) in carousels" :key="index" >
                    <img :src="`http://127.0.0.1:4000/${item.cpic}`" class="carousel-img" :data-i="`{songName:${item.songName},spic:${item.songName},sid:${item.sid},gname:${item.gname},song:${item.song}}`" @click="carouselToSongSheet"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 推荐歌单 -->
        <div class="recommend">推荐歌单</div>
        <ul class="recommend-list">
            <li class="recommend-item" v-for="(item,i) of recommendList" :key="i">
                <div class="recommend-num" :data-i=i+1 @click="recommendToSongSheet">
                    <img src="../../../assets/earphone.png" :data-i=i+1 @click="recommendToSongSheet"/>
                    <!-- 播放次数 -->
                    <span :data-i=i+1 @click="recommendToSongSheet">{{item.lnum}}万</span>
                </div>
                <!-- 歌单封面 -->
                <img :src="`http://127.0.0.1:4000/${item.listpic}`" :data-i=i+1 @click="recommendToSongSheet">
                <!-- 歌单介绍 -->
                <p id="list-p" :data-i=i+1 @click="recommendToSongSheet">{{item.linfo}}</p>
            </li>
        </ul>
        <!-- 推荐歌曲 -->
        <div class="recommend">推荐歌曲</div>
        <lazy-component>
            <ul class="recommend-list">
                <li class="recommend-item p-height" v-for="(item,i) of recommendMusicList" :key="i">
                    <!-- 歌曲封面 -->
                    <img :src="`http://127.0.0.1:4000/${item.spic}`" @click="toPlayer"  :data-i="`{songName:${item.songName},spic:${item.songName},sid:${item.sid},gname:${item.gname},song:${item.song}}`"/>
                    <!-- 歌曲名称 -->
                    <p>{{item.songName}}</p>
                    <!-- 歌手名称 -->
                    <p>{{item.gname}}</p>
                </li>
            </ul>
        </lazy-component>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            recommendList:[],
            recommendMusicList:[],
            carousels: [],
        }
    },
    created() {
        //获取轮播图
        this.axios.get("/carousel")
        .then(res=>{this.carousels=res.data.data;});
        //获取推荐歌单
        this.axios.get("/recommendList")
        .then(res=>{this.recommendList=res.data.data;});
        //获取推荐歌曲
        this.axios.get("/recommendMusicList")
        .then(res=>{this.recommendMusicList=res.data.data;});
    },
    methods: {
        recommendToSongSheet(e){
             this.$router.push({name:"SongSheet",params:{lid:e.target.dataset.i}})
        },
        toPlayer(e){
            var song=e.target.dataset.i;
            this.$store.commit("setOneList",song);
        },
        carouselToSongSheet(e){
            var song=e.target.dataset.i;
            this.$store.commit("setOneList",song);
        }
    },
}
</script>
<style scoped>
    .container{color:#2e3030;text-align:left;}
    .carousel{
        padding:0 10px 20px;
        width:100%;height:130px;
        background-color:#77ccf4;
        box-sizing:border-box;
        margin-bottom:36px;
    }
    .carousel-img{ width:100%;border-radius:5px;}
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
        line-height:12px;
        font-size:12px;
        height:18px;
        overflow: hidden;
        text-overflow:ellipsis;
    }
    .recommend-num>span{color:#fff}
    .p-height>p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    #list-p{
        height: 29px;
        margin-bottom: 10px;
        line-height:16px;
    }
</style>