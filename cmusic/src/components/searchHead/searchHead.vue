<template>
    <div>
        <!-- 搜索框 -->
        <div class="search-head">
            <input v-model="inputVal" type="text" placeholder="搜索歌曲、歌手" v-on:input="search">
            <img class="clean" @click="clean" src="../../assets/close.png" alt="" v-show="$store.getters.getVal!=''">
        </div>
        <!-- 调用子组件 -->
        <search v-if="inputVal==''"></search>
        <search2 v-else></search2>
    </div>
</template>

<script>
//引入子组件
import search from '../search/search.vue'
import search2 from '../search/search2.vue'
export default {
    //注册子组件
    components:{
        "search":search,
        "search2":search2
    },
    computed: {
        inputVal:{
            get(){
                return this.$store.state.inputVal;
            },
            set(value){
                this.$store.commit("updateVal",value)
            }
        }
    },
    data() {
        return {
        }
    },
    methods: {
        //返回首页
        back(){
            history.go(-1);
        },
        //输入框发生改变时自动执行搜索功能
        search(){
            clearTimeout(this.timer);
            this.timer = setTimeout(()=>{
                this.find();
            },800)
        },
        //清除输入框内容
        clean(){
            this.inputVal=""
        },
        //搜索功能
        find(){
            //获取输入内容
            var $val = this.inputVal;
            //创建url
            var url = "find";
            var obj = {val:$val};
            this.axios.get(url,{params:obj})
            .then(res=>{
                this.$store.state.searchList = res;
            })
        }
    }
}
</script>

<style scoped>
    *{margin:0;padding:0;}
    .search-head{
        background: #77CCF4;
        display: flex;
        justify-content: space-between;
        padding: 5px 5px 5px 30px;
        height:40px;
    }
    input{
        width:80%;
        border:0;
        background: #77CCF4;
        outline: 0;
        color: #fff;
    }
    ::-webkit-input-placeholder{
        color: #eee;
        opacity: .8;
    }
    img{
        width:30px;height:30px;
    }
</style>