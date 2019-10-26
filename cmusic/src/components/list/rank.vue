<template>
    <div class="rank" @touchmove="bg_rgba">
        <div class="top">
            <!-- 添加背景图片 -->
            <img :src="'http://127.0.0.1:4000/'+rank[0].rpic" alt="">
            <mt-header fixed class="herderAll" >
            <router-link to="/" slot="left">
                <mt-button icon="back">{{title}}</mt-button>
            </router-link>
            </mt-header>
            <p class="title">{{rank[0].gname}}</p>
        </div>
        <div class="songList">
            <div class="palyAll">
                <p class="playBtn">
                    <img src="../../assets/play.png" alt="">
                    <span>播放全部<span class="miniFont">(共{{song.length}}首)</span></span>
                </p>
            </div>
            <div class="listAll" v-for="(item,i) of song" :key="i">
                <div class="list">
                    <div class="number"><p>{{i+1}}</p></div>
                    <div class="content">
                        <p class="songName">{{item.songName}}</p>
                        <p class="rankName">{{item.song.slice(4,).split("-")[0]}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
        export default {
            data(){
                return{
                    rank:[{"rpic":"img/rank/rank1.jpg"}],
                    song:[],
                    title:"歌手",
                }
            },
            created(){
                this.loadsong(),
                this.loadsiger()
            },
            computed:{
            },
            methods:{
                bg_rgba(){
                    var Height = $(window).scrollTop();
                    // console.log(Height);
                    if(Height>0){
                        var m =Height/ 212;
                        $(".herderAll").css("background", "rgba(119, 204, 244, " + m + ")");
                    };
                    if(Height>212){
                        this.title=rank.gname
                    }else if(Height<211){
                        this.title="排行"
                    }
                },
                loadsong(){
                    var url="detarankSong";
                    this.axios.get(url).then(res=>{
                        this.song=res.data;
                        // console.log(res);
                    });
                },
                loadsiger(){
                    var url="detarankrank";
                    this.axios.get(url).then(res=>{
                        this.rank=res.data;
                    });
                }
            }
        }
</script>
<style scoped>
    .rank>.top{/*设置头部总样式*/
        width: 100%;
        height: 270px;
    }
    .rank>.top>img{/*设置背景图片*/
        position: relative;
        width: 100%;
        z-index: -1;
    }
    .rank>.top>.mint-header {/*设置头部返回背景透明*/
        background: rgba(119, 204, 244, 0);
    }
    .rank>.top::before{/*设置标题样式——还记得你的梦想吗？别让你的梦只有想*/
        content: "";
        display: table;
    }
    .rank>.top>p.title{/*设置标题样式——歌手名*/
        color: #fff;
        text-align: left;
        font-weight: bold;
        padding-left: 20px;
        margin-top: -170px;
    }
    .rank>.songList>.palyAll{/*设置播放全部的div样式*/
        width: 100%;
        height: 36px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: 25px;
    }
    .rank>.songList>.palyAll>p.playBtn{/*设置播放全部div中内容div的样式*/
        color: #222;
        text-align: left;
        padding-left: 20px;
        font-size: 16px;
        line-height: 36px;
    }
    .rank>.songList>.palyAll>p.playBtn>img{/*设置播放全部div中播放图片样式*/
       vertical-align: middle;
       margin-right: 10px;
       margin-bottom: 4px;
       width: 7%;
    }
    .rank>.songList>.palyAll>p.playBtn>span>span.miniFont{/*设置播放全部div中小字体的样式——共xx首*/
       font-size: 14px;
       color: #aaa;
       margin-left: 3px;
    }
    .rank>.songList>.listAll>.list{/*设置歌曲列表的样式*/
        display: flex;
        width: 100%;
        height: 55px;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .rank>.songList>.listAll>.list>.number>p{/*设置单个歌曲列表中序号的样式*/
        line-height: 55px;
        padding: 0 20px;
        color: #666;
        width: 23px;
    }
    .rank>.songList>.listAll>.list>.content{/*设置单个歌曲列表中内容的样式——歌手加歌曲名*/
        text-align: left;
        margin-top: 8px;
    }
    .rank>.songList>.listAll>.list>.content>p.songName{/*设置单个歌曲列表中歌手的样式*/
        color: #222;
        font-size: 16px;
    }
    .rank>.songList>.listAll>.list>.content>p.rankName{/*设置单个歌曲列表中歌曲名称的样式*/
        color: #aaa;
        font-size: 12px;
    }
</style>
