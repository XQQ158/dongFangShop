<template>
    <div>
        <!-- 1.如果用户第一次体验此应用，先进入引导页，在跳转首页 -->
        <!-- 2.又进入过一次引导页，以后默认进入广告页。再跳转首页 -->
        <!-- http://localhost:8080/guidepage  引导页 -->
        <!-- http://localhost:8080/advertpage  广告页 -->
        <!-- Swiper -->
        <van-swipe :loop="false"  class="swiper-container">
            <van-swipe-item class="swiper-slide">
                <img src="../../assets/img/guide1.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item class="swiper-slide">
                <img src="../../assets/img/guide2.jpg" alt="">
            </van-swipe-item>
            <van-swipe-item class="swiper-slide">
                <div class="bottom">
                    <img src="../../assets/img/guide3.jpg" alt="">
                    <van-button color="#fbb1bc" class="btn" plain type="primary" size="normal" to="/home/recommend">点击体验</van-button>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>  
    .swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width:100%;
        height: 100%;
        
    }
    .swiper-slide{
        text-align: center;
        .bottom{
            position: relative;
            .btn{
                position: absolute;
                bottom: 4rem;
                left: 50%;
                width: 100px;
                margin-left: -50px;
            }
        }
        
    }
</style>