<template>
    <div id="index">
        <!-- 头部 -->
        <div class="header">
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
        </div>
        <!-- 导航栏 -->
        <van-tabs v-model="active" swipeable background="#77ccf4" line-width="35px" title-active-color="#fff" title-inactive-color="#fff">
            <!-- 导航栏对应内容 -->
            <van-tab v-for="item,i of headerList" :title="item.uname" :key="i">
                <!-- 轮播图，只在第一个导航中显示 -->
                <div class="carousel" v-show="active==0">
                    <van-swipe :autoplay="3000">
                        <van-swipe-item v-for="(image, index) in images" :key="index">
                            <img v-lazy="image" class="carousel-img"/>
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <!-- 数据库引入的具体内容 -->
                <div>
                    内容{{item.list}}
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>
<script>
export default {
    data(){
        return {
            headerList:[{uname:"推荐",list:"[0]"},{uname:"排行",list:"[1]"},{uname:"歌手",list:"[2]"}],
            active:0,
            personListPopup:false,
            searchPopup:false,
            images: [
                'https://img.yzcdn.cn/vant/apple-1.jpg',
                'https://img.yzcdn.cn/vant/apple-2.jpg'
            ]
        }
    },
    methods:{
        personListShow(){
            this.personListPopup=!this.personListPopup;
        },
        searchShow(){
            this.searchPopup=!this.searchPopup;
        },

    },
    components:{

    }
}
</script>
<style scoped>
    .header{
        height:44px;
        padding:0 10px;
        background-color:#77ccf4;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
    .header>h4{color:#fff}
    .icon-right{width:20px;padding-right:5px;}
    .carousel{
        padding:10px 10px 20px;
        width:100%;height:150px;
        background-color:#77ccf4;
        box-sizing:border-box;
        margin-bottom:150px
    }
    .carousel-img{ width:100%;border-radius:5px;}
</style>