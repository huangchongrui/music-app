<template>
    <div class="SongSheet" @touchmove="bg_rgba">
        <div class="top">
            <!-- 添加背景图片 -->
            <img :src="'http://127.0.0.1:4000/'+packName[0].listpic" alt="">
            <mt-header fixed class="herderAll" >
            <router-link to="/" slot="left">
                <mt-button icon="back">{{title}}</mt-button>
            </router-link>
            </mt-header>
            <p class="title">{{packName[0].linfo}}</p>
            <p class="listen">
                <img src="../../assets/listen.png" alt="">
                119万
            </p>
        </div>
        <div class="songList">
            <div class="palyAll">
                <p class="playBtn">
                    <img src="../../assets/play.png" alt="">
                    <span>播放全部<span class="miniFont">(共{{song.length}}首)</span></span>
                </p>
            </div>
            <div class="list" v-for="(item,index) of song" :key="index" :data-i=index @click="toPlayer">
                <div class="number" :data-i=index @click="toPlayer"><p :data-i=index @click="toPlayer">{{index+1}}</p></div>
                <div class="content">
                    <p class="songName" :data-i=index @click="toPlayer">{{item.songName}}</p>
                    <p class="singerName" :data-i=index @click="toPlayer">{{item.song.slice(4,).split("-")[0]}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import $ from 'jquery';
        export default {
            data(){
                return{
                    song:[],
                    packName:[{"listpic":"img/songlist/songlist11.jpg"}],
                    title:"歌单",
                    lid:1
                }
            },
             created(){
                this.loadsiger(),
                this.loadsong()
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
                        this.title=packName[0].linfo
                    }else if(Height<211){
                        this.title="歌单"
                    };
                },
                 loadsong(){
                    this.lid=this.$route.params.lid;
                    var url="detaPackName";
                    this.axios.get(url,{params:{lid:this.lid}}).then(res=>{
                        this.packName=res.data;
                        if(this.packName==undefined){this.packName=[]}
                    });
                },
                loadsiger(){
                    this.lid=this.$route.params.lid;
                    var url="detaPackSong";
                    this.axios.get(url,{params:{lid:this.lid}}).then(res=>{
                        this.song=res.data;
                    });
                },
                toPlayer(e){
                    console.log(this.song,e.target.dataset.i)
                     this.$store.commit("setAllList",{list:this.song,index:e.target.dataset.i})
                }
            }
        }
</script>
<style scoped>
    .SongSheet>.top{/*添加背景图片*/
        /* background: url(../../assets/SongSheet_bg.jpg) no-repeat 50% 50%; */
        background-size: 100%;
        width: 100%;
        height: 270px;
    }
    .SongSheet>.top>img{/*设置背景图片*/
        position: relative;
        width: 100%;
        z-index: -1;
    }
    .SongSheet>.top>.mint-header {/*设置头部返回背景透明*/
        background: rgba(119, 204, 244, 0);
    }
    .SongSheet>.top::before{/*添加伪类防止外边距溢出*/
        content: "";
        display: table;
    }
    .SongSheet>.top>p.title{/*设置标题样式——还记得你的梦想吗？别让你的梦只有想*/
        color: #fff;
        text-align: left;
        font-weight: bold;
        padding-left: 20px;
        margin-top: -170px;
    }
    .SongSheet>.top>p.listen{/*设置播放数量样式*/
        color: #fff;
        text-align: left;
        padding-left: 20px;
        font-size: 12px;
    }
    .SongSheet>.top>p.listen>img{/*设置播放量图片与文字的对齐方式*/
        vertical-align:bottom;
    }
    .SongSheet>.songList>.palyAll{/*设置播放全部的div样式*/
        width: 100%;
        height: 36px;
        background: #eee;
        border-bottom: 1px solid #ccc;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-top: 25px;
    }
    .SongSheet>.songList>.palyAll>p.playBtn{/*设置播放全部div中内容div的样式*/
        color: #222;
        text-align: left;
        padding-left: 20px;
        font-size: 16px;
        line-height: 36px;
    }
    .SongSheet>.songList>.palyAll>p.playBtn>img{/*设置播放全部div中播放图片样式*/
       vertical-align: middle;
       margin-right: 10px;
       margin-bottom: 4px;
       width: 7%;
    }
    .SongSheet>.songList>.palyAll>p.playBtn>span>span.miniFont{/*设置播放全部div中小字体的样式——共xx首*/
       font-size: 14px;
       color: #aaa;
       margin-left: 3px;
    }
    .SongSheet>.songList>.list{/*设置歌曲列表的样式*/
        display: flex;
        width: 100%;
        height: 55px;
        background: #fff;
        border-bottom: 1px solid #ccc;
    }
    .SongSheet>.songList>.list>.number>p{/*设置单个歌曲列表中序号的样式*/
        line-height: 55px;
        padding: 0 20px;
        color: #666;
        width: 23px;
    }
    .SongSheet>.songList>.list>.content{/*设置单个歌曲列表中内容的样式——歌手加歌曲名*/
        text-align: left;
        margin-top: 8px;
    }
    .SongSheet>.songList>.list>.content>p.songName{/*设置单个歌曲列表中歌手的样式*/
        color: #222;
        font-size: 16px;
    }
    .SongSheet>.songList>.list>.content>p.singerName{/*设置单个歌曲列表中歌曲名称的样式*/
        color: #aaa;
        font-size: 12px;
    }
</style>
