<template>
    <div>
        <div class="bestmatch">最佳匹配</div>
        <!-- 搜索列表 -->
        <div v-for="(item,i) of list" :key="i" class="container">
            <div class="song">
                <p>{{item.songName}}</p>
                <p>{{item.gname}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        list:{
            get(){
                var list=this.$store.state.searchList.data;
                if(list==undefined){list=[]}
                return list==0 ? [{songName:"请换个搜索词",gname:"您输入的这个真没有啊"}] : list;
            },
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
    .bestmatch{
        color:#e34847;
        font-size:12px;
        text-align:left;
        margin:7px 20px 7px;
    }
    .container .song{
        border-bottom:1px solid #ccc;
        padding:7px 20px 7px;
        text-align:left;
    }
    .container .song p:first-child{
        font-size:18px;
    }
    .container .song p:last-child{
        font-size:12px;
        color:#999;
    }
</style>