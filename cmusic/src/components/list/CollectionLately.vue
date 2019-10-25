<template>
  <div class="collectionLately">
    <div class="top">
        <mt-navbar v-model="active" class="tab">
            <mt-tab-item id="tab-container1" class="bbb">我的收藏</mt-tab-item>
            <mt-tab-item id="tab-container2" class="bbb">最近播放</mt-tab-item>
        </mt-navbar>
    </div>
    <div class="page-tab-container">
      <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
        <mt-tab-container-item id="tab-container1">
        	<!-- cell组件 -->
            <collection class="childCpts"></collection>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab-container2">
        	<!-- cell组件 -->
            <lately class="childCpts"></lately>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Collection from "./collection.vue"
import Lately from "./lately.vue"
export default {
  name: 'page-tab-container',
  data() {
    return {
      active: 'tab-container1'
    };
  },
  components:{
      "collection":Collection,
      "lately":Lately,
  }
};
</script>
<style scoped>
.collectionLately>.top{/*设置头部固定条样式*/
    background:#77CCF4;
    height: 40px;
    width: 100%;
    position: fixed;
    z-index: 10;
}
.collectionLately>.top .router-link-active{/*设置返回按钮是样式*/
    float: left;
    background:#77CCF4;
    height: 40px;
}
.collectionLately>.top .mint-button--default{/*设置返回按钮是样式*/
    color: #fff;
    background-color:#77CCF4;
    box-shadow: 0 0;
}
.collectionLately>.top .mint-button--normal {/*设置返回按钮是样式*/
    border-radius: 0%;
    height: 40px;
}
.collectionLately>.top>.tab{/*设置切换按钮的样式*/
    background: #77CCF4;
    height: 40px;
    width: 230px;
    margin: auto;
}
.bbb{
   margin: 0 20px;
}
.collectionLately>.top>.tab .mint-tab-item-label {/*设置切换按中文字的样式*/
    color: #fff;
    font-size: 14px;
    line-height: 0.5;
}
.collectionLately>.top>.tab>.mint-tab-item.is-selected {/*设置选中时下划线的样式*/
    border-bottom: 2px solid #fff;
    color: #fff;
    margin-bottom: 5px;
}
.collectionLately>.page-tab-container>.page-tabbar-tab-container .childCpts{/*设置子组件的高度*/
    margin-top: 55px;
    z-index: -1;
}

</style>

 
