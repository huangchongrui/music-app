<template>
    <div class="index">
        <!-- 头部 -->
        <header>
            <!-- 左侧弹出层按钮 -->
            <div>
                <img src="../../assets/personList.png" @click="personListShow">
                <van-popup v-model="personListPopup" position="left" :style="{ width:'85%',height:'100%'}">
                    <div>左侧内容</div>
                </van-popup>
            </div>
            <h4>VMUSICJIN</h4>
            <!-- 右侧弹出层按钮 -->
            <div>
                <img src="../../assets/search.png" class="icon-right" @click="searchShow">
                <van-popup v-model="searchPopup" position="right" :style="{ width:'85%',height:'100%'}">
                    <div>右侧内容</div>
                </van-popup>
            </div>
        </header>
        <!-- 导航栏 -->
        <van-tabs v-model="active" swipeable background="#77ccf4" line-width="30px" title-active-color="#fff" title-inactive-color="#fff" @click="onClick">
            <!-- 导航栏对应内容 -->
            <van-tab v-for="item,i of headerList" :title="item.uname" :key="i">
                <!-- 数据库引入的具体内容 -->
               <navitem1 v-if="i==0"></navitem1>
               <navitem2 v-else-if="i==1"></navitem2>
               <navitem3 v-else></navitem3>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
import navitem1 from "./navitem/navitem1"
import navitem2 from "./navitem/navitem2"
import navitem3 from "./navitem/navitem3"
export default {
    data(){
        return {
            headerList:[{uname:"推荐",list:"[0]"},{uname:"排行",list:"[1]"},{uname:"歌手",list:"[2]"}],
            active:0,
            personListPopup:false,
            searchPopup:false,
        }
    },
    methods:{
        personListShow(){
            this.personListPopup=!this.personListPopup;
        },
        searchShow(){
            this.searchPopup=!this.searchPopup;
        },
        onClick(name, title) {
            window.scrollTo(0,0);
        }

    },
    components:{
        navitem1,navitem2,navitem3
    }
}
</script>
<style scoped>
    index{position:relative;width:100%}
    header{
        height:44px;width:100%;
        padding:0 10px;
        background-color:#77ccf4;
        display:flex;
        justify-content:space-between;
        align-items:center;
        position:fixed;
        z-index:100;
    }
    header>h4{color:#fff}
    .icon-right{width:20px;padding-right:5px;}
     .index /deep/ .van-hairline--top-bottom:after{border-width:0}
     .index /deep/ .van-tabs--line .van-tabs__wrap{padding-bottom:7px;color:#e4e4e4}
     .index /deep/ .van-ellipsis{color:#e4e4e4}
     .index /deep/ .van-tabs__nav--line{
        position:fixed;
        z-index:99;
        height:37px;
        width:100%;
        padding-top:44px;
     }
     .index /deep/ .van-tab__pane{padding-top:52px}
</style>