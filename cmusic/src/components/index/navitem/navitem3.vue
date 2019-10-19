<template>
    <div>
        <van-index-bar>
            <div v-for="(item,i) of indexList" :key="i">
                <van-index-anchor :index=item />
                <van-cell title="文本" />
                <van-cell title="文本" />
                <van-cell title="文本" />
            </div>
        </van-index-bar>
    </div>
</template>
<script>
export default {
    data(){
        return{
            indexList:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
        }
    }
}
</script>