<template>
    <div>
        <van-nav-bar class="nav"
            :title="$route.name"
        />

        <!-- 分类列表 -->
        <bscroll></bscroll>
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import bscroll from "../components/category/BScroll" 
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        components:{
            bscroll,
            vantabber
        },
        created(){
            this.$store.state.active = 1;
        }
    }
</script>

<style lang="scss" scoped>
    .nav{
        background-color: #F2F2F2;
    }
</style>