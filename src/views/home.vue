<template>
    <div class="page">
        <!-- 顶部导航 -->
        <van-row class="topsearchNav">
            <van-col span="3"><span class="iconfont icon-dongfanggouwulogo"></span></van-col>
            <van-col span="18">
                <van-search @focus="getSearch" placeholder="搜索商品名称" />
            </van-col>
            <van-col span="3" @click="my"><span class="iconfont icon-yong-hu"></span></van-col>
        </van-row>
        <!-- 顶部导航end -->
        <!-- 首页导航 -->
            <div class="swiper-container homeNavSwiperContainer">
                <div class="swiper-wrapper">
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/recommend" tag="span" class="recommend">推荐</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/phone" tag="span" class="phone">手机</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/intelligence" tag="span" class="intelligence">智能</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/televisions" tag="span" class="televisions">电视</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/notebook" tag="span" class="notebook">笔记本</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/electricity" tag="span" class="electricity">家电</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/newtelevisions" tag="span" class="t1">电视</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/newnotebook" tag="span" class="n1">笔记本</router-link>
                    </div>
                    <div class="swiper-slide swiper_s" >
                        <router-link  to="/home/newelectricity" tag="span" class="e1">家电</router-link>
                    </div>
                </div>
            </div>
        <!-- 首页导航 end -->
            <!-- 二级路由 -->
            <router-view></router-view>
            <vantabber></vantabber>
    </div>
</template>

<script>
    import Swiper from "swiper";
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data() {
            return {
                i:0
            }
        },
        methods:{
            getSearch(){
                // 跳转路由
                this.$router.push("/search");
            },
            my(){
                this.$router.push("/my");
            }
            
        },
        // 注意：swiper必须要在页面渲染到浏览器后mounted钩子函数中才能运行
        mounted(){
            this.$nextTick(function(){
                 new Swiper('.homeNavSwiperContainer', {
                    slidesPerView: 6, //显示个数
                    freeMode: true,
                });
            })
        },
        created(){
            this.$store.state.active = 0;
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
    .page{
        padding-bottom: 50px;
    }
    .topsearchNav{
        background-color: #F2F2F2;
        .icon-dongfanggouwulogo
        {
            text-align: center;
            display: block;
            font-size: 35px;
            height: 44px;
            line-height: 44px;
            color:#ff6B00;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-yong-hu{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
    }

    .swiper-container {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        text-align: center;
        font-size: 15px;
        background-color: #f2f2f2;

      /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
    }
    .swiper_s span.router-link-active{
        color: #ff6B00;
    }
    .swiper_s span{
        position: relative;
    }
    .swiper_s .act::after{
        content:"";
        background-color: #ff6B00;
        position: absolute;
        left: 0;
        bottom: 2px;
        width: 100%;
        height: 2px; 
    }
</style>