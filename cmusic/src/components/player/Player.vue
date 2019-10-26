<template>
  <div v-show="this.$store.getters.getplayList.length>0">
    <transition name="normal">
      <div id="player" class="player" v-show="this.$store.getters.getfullScreen">
        <div class="background">
          <div class="filter"></div>
          <img src="https://p3fx.kgimg.com/stdmusic/20191010/20191010191203148524.jpg" width="100%" height="100%"/>
        </div>
        <div class="top">
          <div class="back">
            <!--返回按钮-->
            <i class="iconfont icon-xiangzuo" @click="changefullScreen"></i>
          </div>
          <!--歌名和歌手-->
          <div class="song-info">
            <div class="title"><span>野狼Disco</span></div>
            <div class="singer"><span>宝石Gem、陈伟霆</span><i class="iconfont icon-xiangyou"></i></div>
          </div>
          <!--分享-->
          <div class="share">
            <i class="iconfont icon-fenxiang-1" @click="shareShow=!shareShow"></i>
          </div>
        </div>
        <div class="middle">
          <div class="middle-pic" v-show="currentShow === 'cd'">
            <div class="cd-wrapper">
              <div class="cd" :class="cdCls">
                <img src="https://p3fx.kgimg.com/stdmusic/20191010/20191010191203148524.jpg" class="image"/>
              </div>
            </div>
          </div>
          <!--歌词部分-->
        </div>
        <div class="bottom">
          <div class="btop">
            <!--收藏这里要变换样式-->
            <div><i style="font-size:20px;color:#ddd;" class="iconfont icon-shoucang1"></i></div>
            <div><i style="font-size:20px;color:#ddd;" class="iconfont icon-xiazai"></i></div>
            <div><i style="font-size:20px;color:#ddd;" class="iconfont icon-yinxiao"></i></div>
            <div><i style="font-size:20px;color:#ddd;" class="iconfont icon-pinglun"></i></div>
            <div><i style="font-size:20px;color:#ddd;" class="iconfont icon-xiangxixinxi" @click="songInfoShow=!songInfoShow"></i>
            </div>
          </div>
          <div class="bmiddle">
            <!--进度条-->
            <span class="ltime">00:00</span>
            <div class="progress-bar">
              <!--进度条组件-->
            </div>
            <span class="rtime">00:00</span>
          </div>
          <div class="bbottom">
            <div><i style="color:#fff;font-size:20px;" class="iconfont icon-liebiaoxunhuan"></i></div>
            <div><i style="color:#fff;font-size:20px;" class="iconfont icon-shangyishoushangyige"></i></div>
            <div><i style="color:#fff;font-size:40px;" class="iconfont" :class="changeImg" @click.stop="changeplaying"></i></div>
            <div><i style="color:#fff;font-size:20px;" class="iconfont icon-xiayigexiayishou"></i></div>
            <div><i style="color:#fff;font-size:20px;" class="iconfont icon-bofangliebiao" @click.stop="playListShow=!playListShow;"></i></div>
          </div>
        </div>
      </div>
    </transition>
    <!--迷你播放器-->
    <div class="mini-player" v-show="this.$store.getters.getfullScreen==false" @click.stop="changefullScreen">
      <div class="icon">
        <img :class="cdCls" src="https://p3fx.kgimg.com/stdmusic/20191010/20191010191203148524.jpg" width="40" height="40">
      </div>
      <div class="text">
        <h2 class="name">野狼Disco</h2>
        <div class="desc">宝石Gem、陈伟霆</div>
      </div>
      <div class="control">
        <i style="color:#000;font-size:30px;" class="iconfont" :class="changeImg" @click.stop="changeplaying"></i>
      </div>
      <div class="control">
        <i style="color:#000;font-size:30px;" class="iconfont icon-bofangliebiao" @click.stop="playListShow=!playListShow;"></i>
      </div>
    </div>
    <van-action-sheet v-model="shareShow" title="分享">
      <p>分享方式</p>
    </van-action-sheet>
    <van-action-sheet v-model="songInfoShow" title="歌曲信息">
      <p>这里是歌曲的信息</p>
    </van-action-sheet>
    <van-action-sheet v-model="playListShow">
      <p>这里是播放列表</p>
    </van-action-sheet>
    <!--
    <audio id="music-audio" ref="audio" @ended="end" autoplay @canplay="ready" @error="error" @timeupdate="updateTime"></audio>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareShow:false,
      songInfoShow:false,
      playListShow:false,
      currentShow:"cd",
    }
  },
  methods: {
    changeplaying(){
      this.$store.commit("toggleplaying");
    },
    changefullScreen(){
      console.log("play"+this.$store.getters.getfullScreen)
      this.$store.commit("togglefullScreen");
    }
  },
  computed: {
    cdCls () {
      return this.$store.getters.getplaying==true ? 'play' : 'play pause'
    },
    changeImg(){
      return this.$store.getters.getplaying==true ? 'icon-zanting' : 'icon-bofang'
    }
  },
}
</script>


<style scoped>
.player{
  background-image: linear-gradient(to bottom,#000 0%,#333 100%);
  position: fixed;
  width:100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 150;
}

.background{
  position: absolute;
  left: -100%;
  top: -120%;
  width: 300%;
  height: 300%;
  z-index: -1;
  opacity: 0.6;
  filter:blur(25px);
}

.top{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:8%;
  padding:0.5rem 0;
}

.back{
  width:12.5%;
  text-align:center;
}

.song-info{
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width:75%;
}

.title{
  color:white;
  font-size:18px;
}

.singer{
  color:#aaa;
  font-size:14px;
}


.share{
  width:12.5%;
  text-align:center;
}

.icon-xiangzuo:before {
  content: "\e61d";
  color:white;
  font-size:20px;
}

.icon-fenxiang-1:before {
  content: "\e60b";
  color:white;
  font-size:20px;
}

.icon-xiangyou:before {
  content: "\e683";
  font-size:8px;
}

.middle{
  display: flex;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  font-size: 0;
  height:67%;
}

.middle-pic{
  display:inline-block;
  vertical-align:top;
  position:relative;
  width:100%;
  height:0;
  padding-top:70%;
}

.cd-wrapper{
  position:absolute;
  left:15%;
  width:70%;
  top:0;
  height:100%;
}

.cd{
  width:100%;
  height:100%;
  box-sizing:border-box;
  background-image:linear-gradient(135deg,black 0%,rgba(40,40,40,.6) 40%,rgba(50,50,50,.1) 50%,rgba(40,40,40,.6) 60%,black 100%);
  border-radius:50%;
}

.cd.play{
  animation:rotate 20s linear infinite;
}

.cd.pause{
  animation-play-state:paused;
}

.cd .image{
  position:absolute;
  left:15%;
  top:15%;
  width:70%;
  height:70%;
  border-radius:50%;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bottom{
  width:100%;
  height:25%;
  display:flex;
  flex-direction:column;
}

.btop{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:30%;
}

.btop div{
  text-align:center;
  width:20%;
}

.btop div:first-child{
  margin-left:1rem;
}
.btop div:last-child{
  margin-right:1rem;
}


.bmiddle{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:20%;
}

.ltime{
  font:12px Arial;
  color: #bbb;
}

.rtime{
  font:12px Arial;
  color: #999999;
}

.bbottom{
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;
  height:50%;
  padding-bottom:1rem;
}

.bbottom div{
  text-align:center;
  width:19%;
}

.bbottom div:nth-child(3){
  width:24%;
}

.bbottom div:first-child{
  margin-left:1rem;
}

.bbottom div:last-child{
  margin-right:1rem;
}

.icon-xiangzuo:before {
  content: "\e61d";
}

.icon-suijibofang:before {
  content: "\e6f1";
}

.icon-xiayigexiayishou:before {
  content: "\e7a5";
}

.icon-shoucang:before {
  content: "\e60a";
}

.icon-shoucang1:before {
  content: "\e66c";
}

.icon-xiangxixinxi:before {
  content: "\e64c";
}

.icon-xiangyou:before {
  content: "\e683";
}

.icon-fenxiang-1:before {
  content: "\e60b";
}

.icon-xiazai:before {
  content: "\e69a";
}

.icon-pinglun:before {
  content: "\e6b9";
}

.icon-shoucangjia:before {
  content: "\e622";
}

.icon-liebiaoxunhuan:before {
  content: "\e63d";
}

.icon-danquxunhuan:before {
  content: "\e63e";
}

.icon-suijibofang1:before {
  content: "\e625";
}

.icon-bofangliebiao:before {
  content: "\e60c";
}

.icon-shanchu:before {
  content: "\e651";
}

.icon-zanting:before {
  content: "\e6bb";
}

.icon-bofang:before {
  content: "\ec8b";
}

.icon-yinxiao:before {
  content: "\e630";
}

.icon-shangyishoushangyige:before {
  content: "\e645";
}

.mini-player{
  display:flex;
  align-items:center;
  justify-content:space-around;
  position:fixed;
  left:0;
  bottom:0;
  z-index:180;
  width:100%;
  height:8%;
  background:rgba(119,204,244,.7);
}

.icon{
  width:15%;
  text-align:right;
  padding-top:1%;
}

.icon img{
  border-radius:50%;
}

.icon img.play{
  animation:rotate 10s linear infinite;
}

.icon img.pause{
  animation-play-state:paused;
}

.text{
  display:flex;
  flex-direction:column;
  justify-content:center;
  width:65%;
  flex:1;
  overflow:hidden;
  padding-left:2%;
  text-align:left;
}

.text .name{
  margin-bottom:2px;
  line-height:14px;
  font-size:14px;
  color:#2e3030;
}

.text .desc{
  font-size:12px;
  color:#2e3030;
}

.control{
  flex: 0 0 30px;
  width: 10%;
  text-align:center;
  margin-right:2%;
}

/* transition动画 */
.normal-enter-active,
.normal-leave-active {
  transition: opacity 0.3s;
}
.normal-enter,.normal-leave-to {
  opacity: 0;
}
</style>