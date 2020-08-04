<template>
    <div>
        <!-- $router.go(-1) -1表示返回上一级 -->
        <!-- $router.go(1) 1表示刷新当前页面 -->
        <!-- $router.go(2) 2表示返回下一级 -->
        <van-row class="topsearchNav">
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-jiantou1"></span></van-col>
            <van-col span="18">
                <van-search placeholder="搜索商品名称" />
            </van-col>
            <van-col span="3" @click="$router.go(-1)"><span class="iconfont icon-search" ></span></van-col>
        </van-row>
        <div class="cont" @click="$router.go(-1)">
            <div class="tab">搜索发现</div>
            <div class="img">
                <img src="../assets/img/search1.jpg" alt="">
            </div>
            <div class="discover">
                <div>
                    <span >Redmi 10X 5G 系列</span>
                </div>
                <div>
                    <span data-v-2d23ac17="">小米众筹</span>
                    <img src="../assets/img/search2.png" alt="">
                </div>
                <div>
                    <span data-v-2d23ac17="">618活动主会场</span>
                    <img src="../assets/img/search3.png" alt="">
                </div>
                <div>
                    <span data-v-2d23ac17="">Redmi K30 Pro</span>
                </div>
                <div>
                    <span data-v-2d23ac17="">向往的智能生活</span>
                    <img src="../assets/img/search4.png" alt="">
                </div>
                <div>
                    <span data-v-2d23ac17="">风扇</span>
                </div>
                <div>
                    <span data-v-2d23ac17="">净水器</span>
                </div>
                <div>
                    <span data-v-2d23ac17="">手机</span>
                    <img src="../assets/img/search5.png" alt="">
                </div>
                <div>
                    <span data-v-2d23ac17="">智能</span>
                    <img src="../assets/img/search6.png" alt="">
                </div>
                <div>
                    <span data-v-2d23ac17="">全部商品</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
       
    }
</script>

<style lang="scss" scoped>
.topsearchNav{
        background-color: #F2F2F2;
        .icon-jiantou1{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
        .van-search{
            padding:0px;
            margin:5px;
            background-color: #fff;
        }
        .van-search__content{
            background-color: #fff;
        }
        .icon-search{
            text-align: center;
            display: block;
            font-size: 24px;
            height: 44px;
            line-height: 44px;
            color:#4E4E4E;
        }
    }
.cont{
    padding: 1.4rem 1.32rem;
    text-align: left;
    .tab{
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 1rem;
    }
    .img{
        margin-bottom: 1.5rem;
        img{
            border-radius: .5rem;
        }   
    }
    .discover{
        div{
            display: inline-flex;
            text-align: center;
            width: 50%;
            margin-bottom: 1.35rem;
            font-size: .9rem;
            span{
                display: inline-block;
                max-width: 9rem;
            }
            img{
                width: 1.5rem;
                height: 1rem;
                margin-left: 0.5rem;
            }
        }
    }
}
</style>