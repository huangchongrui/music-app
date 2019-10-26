// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'

// 引入vant部分功能模块
import { Tab, Tabs,Popup,Swipe,SwipeItem,Lazyload,IndexBar,IndexAnchor,Cell,NavBar,ActionSheet } from 'vant'
// 引入vant部分功能模块样式
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/popup/style'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
import 'vant/lib/lazyload/style'
import 'vant/lib/index-bar/style'
import 'vant/lib/index-anchor/style'
import 'vant/lib/cell/style'
import 'vant/lib/nav-bar/style'
import 'vant/lib/action-sheet/style'
Vue.use(Tab,).use(Tabs).use(Popup).use(Swipe).use(SwipeItem).use(Lazyload, {lazyComponent: true}).use(IndexBar).use(IndexAnchor).use(Cell).use(NavBar).use(ActionSheet);

//引入字体图标
import './font/font-player/iconfont.css'

//引入mint-ui组件库
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/";
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

//引入vuex
import Vuex from 'vuex'
//注册
Vue.use(Vuex)
//创建存储对象
var store=new Vuex.Store({
  state:{
    inputVal:"",
    searchList:[],
    searchHistory:[],
    playing:false,//是否播放
    fullScreen:false,//是否全屏
    playList:[],//播放列表
    currentIndex:-1,//0开始
  },
  mutations:{
    updateVal(state,v){
      state.inputVal=v;
    },
    // 播放按钮的点击
    toggleplaying(state){
      state.playing=!state.playing;
    },
    //大小屏的切换
    togglefullScreen(state){
      state.fullScreen=!state.fullScreen;
      console.log("22"+state.fullScreen)
    },
    //整个歌单插入,从index播放
    setAllList(state,l){
      console.log("11"+state.fullScreen)
      state.playList=l.list;
      state.currentIndex=l.index;
      state.playing=true;
      state.fullScreen=true;
    },
    //单首插入,从index播放song是歌曲对象
    setOneList(state,song){
      console.log(song,state.playList);
      if(state.playList.length==0){
        state.playList.push(song);
        state.currentIndex=state.playList.length-1;
        state.playing=true;
        state.fullScreen=true;
      }else{
        let playlist = state.playList // 赋值的是对象引用,state不允许外部修改，用slice()做个副本赋值
        let currentIndex = state.currentIndex
        //将歌曲插入当前歌曲的下一首
        currentIndex++;
        playlist.splice(currentIndex, 0, song);
        //判断列表中是否有这首歌
        var index=-1;
        for(var i=0;i<playlist.length;i++){
          if(playlist[i].sid==song.sid){//播放列表中已有该歌曲
            index=i;
          }
        }
        // 删除已存在的歌曲
        if(index!=-1){
          //歌曲在当前播放的前面
          if(currentIndex>index)
          playlist.splice(index,1)
          currentIndex--
        }else{
          playlist.splice(index+1,1)
        }
        state.fullScreen=true;
        state.playList=playlist;
        state.currentIndex=currentIndex;
        state.playing=true;
      }
    },
    //索引下一首
    setindexAdd(state){
      state.currentIndex++;
    },
    //修改索引值
    setcurrentIndex(state,index){
      state.currentIndex=index;
    },
    delplaylistOne(state){
      
    },
    delplaylistAll(state){
      state.currentIndex=-1;
      state.playList=[];
      state.playing=false;
    }
  },
  getters:{
    getVal(state){
      return state.inputVal;
    },
    getplaying(state){
      return state.playing
    },
    getfullScreen(state){
      return state.fullScreen
    },
    getplayList(state){
      return state.playList
    },
    getcurrentIndex(state){
      return state.currentIndex
    },
    getcurrentSong(state){//获取当前歌曲
      return state.playList[state.currentIndex];
    }
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
