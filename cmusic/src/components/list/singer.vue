<template>
    <div class="singer" @touchmove="bg_rgba">
        <div class="top">
            <!-- 添加背景图片 -->
            <img :src="'http://127.0.0.1:4000/'+singer[0].gpic" alt="">
            <mt-header fixed class="herderAll" >
            <router-link to="/" slot="left">
                <mt-button icon="back">{{title}}</mt-button>
            </router-link>
            </mt-header>
            <p class="title">{{singer[0].gname}}</p>
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
                    <div class="number"><p :data-i=i @click="toPlayer">{{i+1}}</p></div>
                    <div class="content">
                        <p class="songName" :data-i=i @click="toPlayer">{{item.songName}}</p>
                        <p class="singerName" :data-i=i @click="toPlayer">{{item.song.slice(4,).split("-")[0]}}</p>
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
                    singer:[{"gpic":"img/singer/singer11.jpg"}],
                    song:[],
                    title:"歌手",
                    gid:11
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
                    if(Height>0){
                        var m =Height/ 212;
                        $(".herderAll").css("background", "rgba(119, 204, 244, " + m + ")");
                    };
                    if(Height>212){
                        this.title=singer.gname
                    }else if(Height<211){
                        this.title="歌手"
                    }
                },
                loadsong(){
                    this.gid=this.$route.params.gid;
                    var url="detaSingerSong";
                    this.axios.get(url,{params:{gid:this.gid}}).then(res=>{
                        this.song=res.data;
                    });
                },
                loadsiger(){
                    this.gid=this.$route.params.gid;
                    var url="detaSingerSinger";
                    this.axios.get(url,{params:{gid:this.gid}}).then(res=>{
                        this.singer=res.data;
                    });
                },
                toPlayer(e){
                    console.log(this.song,e.target.dataset.i);
                     this.$store.commit("setAllList",{list:this.song,index:e.target.dataset.i})
                }
            }
        }
</script>
<style scoped>
    .singer>.top{/*设置头部总样式*/
        width: 100%;
        height: 270px;
    }
    .singer>.top>img{/*设置背景图片*/
        position: relative;
        width: 100%;
        z-index: -1;
    }
    .singer>.top>.mint-header {/*设置头部返回背景透明*/
        background: rgba(119, 204, 244, 0);
    }
    .singer>.top::before{/*设置标题样式——还记得你的梦想吗？别让你的梦只有想*/
        content: "";
        display: table;
    }
    .singer>.top>p.title{/*设置标题样式——歌手名*/
        color: #fff;
        text-align: left;
        font-weight: bold;
        padding-left: 20px;
        margin-top: -170px;
    }
    .singer>.songList>.palyAll{/*设置播放全部的div样式*/
        width: 100%;
        height: 36px;
        background: #fff;
        border-bottom: 1px solid #ccc;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: 25px;
    }
    .singer>.songList>.palyAll>p.playBtn{/*设置播放全部div中内容div的样式*/
        color: #222;
        text-align: left;
        padding-left: 20px;
        font-size: 16px;
        line-height: 36px;
    }
    .singer>.songList>.palyAll>p.playBtn>img{/*设置播放全部div中播放图片样式*/
       vertical-align: middle;
       margin-right: 10px;
       margin-bottom: 4px;
       width: 7%;
    }
    .singer>.songList>.palyAll>p.playBtn>span>span.miniFont{/*设置播放全部div中小字体的样式——共xx首*/
       font-size: 14px;
       color: #aaa;
       margin-left: 3px;
    }
    .singer>.songList>.listAll>.list{/*设置歌曲列表的样式*/
        display: flex;
        width: 100%;
        height: 55px;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .singer>.songList>.listAll>.list>.number>p{/*设置单个歌曲列表中序号的样式*/
        line-height: 55px;
        padding: 0 20px;
        color: #666;
        width: 23px;
    }
    .singer>.songList>.listAll>.list>.content{/*设置单个歌曲列表中内容的样式——歌手加歌曲名*/
        text-align: left;
        margin-top: 8px;
    }
    .singer>.songList>.listAll>.list>.content>p.songName{/*设置单个歌曲列表中歌手的样式*/
        color: #222;
        font-size: 16px;
    }
    .singer>.songList>.listAll>.list>.content>p.singerName{/*设置单个歌曲列表中歌曲名称的样式*/
        color: #aaa;
        font-size: 12px;
    }
</style>
