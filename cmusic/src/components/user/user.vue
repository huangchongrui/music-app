<template>
    <div>
        <!-- 头部立即登录与信息显示 -->
        <div class="head">
            <!-- 信息显示 -->
            <div v-if="user.length>=1" v-for="(item,i) of user" :key="i" class="user_info">
                <img src="../../assets/user.png" alt="">
                <div class="user_name">{{item.userName}}</div>
                <div class="user_phone">{{item.phone.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}}</div>
            </div>
            <!-- 立即登录 -->
            <div v-if="user.length==0" class="login">
                <img src="../../assets/user.png" alt="">
                <router-link to="/login">
                    <div>立即登录</div>
                </router-link>
            </div>
        </div>
        <!-- 功能列表 -->
        <div class="body">
            <ul class="list">
                <li><img src="../../assets/played.png" alt=""><span>最近播放</span></li>
                <li><img src="../../assets/collect.png" alt=""><span>收藏列表</span></li>
                <li><img src="../../assets/about.png" alt=""><span>关于我们</span></li>
                <li><img src="../../assets/quit.png" alt=""><span>退出登录</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user:[]
        }
    },
    created() {
        this.user=this.$store.state.userinfo;
    },
}
</script>

<style scoped>
        /* 头部登录与用户信息 */
        .head{
            width: 100%;height:200px;
            background: #e8e8e8;
        }
        .head::before{
            display: table;
            content: "";
        }
        .head>.user_info,.head>.login{
            margin:30px auto;
            text-align: center;
        }
        .head>.user_info>img,.head>.login>img{
            width:80px;height:80px;
        }
        .head>.user_info>div,.head>.login div{
            margin-top:10px;
            color:#383838;
        }
        .head>.login div{
            text-decoration: underline;
        }
        /* 功能列表样式 */
        .body{
            width:100%;
        }
        .list{
            list-style: none;
            margin-top:25px;
        }
        .list>li{
            height:60px;
            color:#383838;
            line-height: 30px;
            position: relative;
        }
        .list>li img{
            position: absolute;
            width:30px;height:30px;
            top:15px;;left:20px;
        }
        .list>li span{
            line-height: 60px;
            margin-left:65px;
        }
</style>