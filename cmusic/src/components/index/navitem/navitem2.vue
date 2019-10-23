<template>
    <div class="container">
        <!-- 榜单 -->
        <ul class="ranking-list">
            <li class="ranking-item" v-for="(item,i) of rankingList" :key="i">
                <img src="../../../assets/ranking.png"/>
                <ul class="ranking-music">
                    <li><p>{{item.lid}}.{{item.mname}} - {{item.uname}}</p></li>
                    <li><p>{{item.lid}}.{{item.mname}} - {{item.uname}}</p></li>
                    <li><p>{{item.lid}}.{{item.mname}} - {{item.uname}}</p></li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            rankingList:[{lid:1,mname:"Hi Girl",uname:"马千里马千里马千里马千里马千里马千里马千里马千里马千里马千里马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"},{lid:1,mname:"Hi Girl",uname:"马千里"}]
        }
    }
}
</script>
<style scoped>
    .ranking-list{
        padding:0 10px;
        display:flex;
        align-items:center;
        flex-wrap:wrap;
    }
    .ranking-list img{width:100px;}
    .ranking-item{
        display:flex;
        padding: 3px 0;
        border-bottom: 1px solid #e4e4e4;
        justify-content:left;
        width:100%;
    }
    .ranking-music{
        display:flex;
        flex-direction: column;
        justify-content: center;
    }
    .ranking-music>li p{
        font-size:15px;
        padding:0 20px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        line-height:30px;
        text-align:left;
    }
    @media screen and (max-width:576px){
        .ranking-music>li p{max-width:265px;}
    }
</style>