<template>
    <div>
        <!-- 轮播图 -->
        <swiper :img="Images"></swiper>
        <!-- 分类 -->
        <div class="classification" @click="$router.push('/cart')">
            <img src="../../assets/img/nav1.png" alt="">
            <img src="../../assets/img/nav2.png" alt="">
            <img src="../../assets/img/nav3.png" alt="">
            <img src="../../assets/img/nav4.png" alt="">
            <img src="../../assets/img/nav5.png" alt="">
            <img src="../../assets/img/nav6.png" alt="">
            <img src="../../assets/img/nav7.png" alt="">
            <img src="../../assets/img/nav8.png" alt="">
            <img src="../../assets/img/nav9.png" alt="">
            <img src="../../assets/img/nav10.png" alt="">
        </div>
        <!-- 分类 end -->
        <!-- 回到顶部 -->
        <img v-if="btnFlag" class="go-top" src="../../assets/img/back.png" @click="backTop">

        <!-- 商品列表 -->
        <div class="tuijian" @click="$router.push('/cart')">
            <img src="../../assets/img/tuijian1.jpg" alt="">
            <img src="../../assets/img/tuijian2.jpg" alt="">
            <img src="../../assets/img/tuijian3.jpg" alt="">
        </div>
        <div class="goodslist" @click="$router.push('/cart')">
            <img src="../../assets/img/tuijian4.jpg" alt="">
            <img src="../../assets/img/goodslist.jpg" alt="">
        </div>

        <div class="list_two ">
            <router-link to="/details?id=1" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom1.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米10 Pro</div>
                    <div class="brief">骁龙865 / 50倍变焦</div>
                    <div class="price">￥4999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=2" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom2.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米10</div>
                    <div class="brief">骁龙865/1亿像素相机</div>
                    <div class="price">￥3799<span>起</span>
                        <span class="price old"><s>￥3999</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=3" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="brief">6400万全场景四摄</div>
                    <div class="price">￥1599<span>起</span>
                        <span class="price old"><s>￥1699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=4" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi K30 5G</div>
                    <div class="brief">双模5G，120Hz流速屏</div>
                    <div class="price">￥1999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=5" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom5.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="brief">6400万全场景四摄</div>
                    <div class="price">￥1299<span>起</span>
                        <span class="price old"><s>￥1399</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=6" tag="a">
                <div class="top">
                    <img src="../../assets/img/recom6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8</div>
                    <div class="brief">千元4800万四摄</div>
                    <div class="price">￥899<span>起</span>
                        <span class="price old"><s>￥999</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 商品列表end -->
    </div>
</template>

<script>

    import swiper from "../../components/public/swiper";
    export default {
        data() {
            return {
                Images:[
                    require("../../assets/img/banner01.jpg"),
                    require("../../assets/img/banner02.jpg"),
                    require("../../assets/img/banner03.jpg"),
                ],
                btnFlag:""
            }
        },
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods: {
            // 点击图片回到顶部方法，加计时器是为了过渡顺滑
            backTop () {
                const that = this
                let timer = setInterval(() => {
                    let ispeed = Math.floor(-that.scrollTop / 5)
                    document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                    if (that.scrollTop === 0) {
                        clearInterval(timer)
                    }
                }, 16)
            },
            // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
            scrollToTop () {
                const that = this
                let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                that.scrollTop = scrollTop
                if (that.scrollTop > 60) {
                    that.btnFlag = true
                } else {
                    that.btnFlag = false
                }
            }
        },
        components:{
            swiper,
        },
    }
</script>

<style lang="scss" scoped>

    .classification{
        // 转成弹性元素
        display: flex;
        // 换行
        flex-wrap: wrap;
        // 行与行之间不出现空白
        align-content: flex-start;
        img{
            width: 20%;
        }
    }
    .tuijian{
        img{
            display: block;
            width: 50%;
            height: auto;
            float: left;
            overflow: hidden;
        }
    }
    .goodslist{
        width: 100%;
        margin-top:5px;
    }
    .list_two{
        padding: 0.22rem ;
        width: 100%;
        box-sizing: border-box;
        text-align: center;
        display: flex;
        background: rgb(255, 255, 255);
        :first-child{
            margin-right: .12rem;
        }
        a{
            background-color: transparent;
            outline: 0;
            text-decoration: none;
            flex: 1 1 auto;
            width: 3.4rem;
            .top{
                box-sizing: border-box;
                img{
                    display: block;
                    width: 100%;
                    height: auto;
                    outline: 0;
                    border-style: none;
                }
            }
            .bottom{
                padding: .2rem .27rem;
                text-align: center;
                -webkit-box-align: center;
                align-items: center;
                background-color: #fff;
                .name {
                    font-size: 1rem;
                    color: rgba(0,0,0,.87);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .brief {
                    font-size: .22rem;
                    color: rgba(0,0,0,.54);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .price {
                    font-size: 1.28rem;
                    color: #ea625b;
                    height: 1.5em;
                    line-height: 1.5em;
                    padding-left: .5em;
                    display: inline-block;
                    span {
                        display: inline-block;
                        margin-left: .04rem;
                        font-size: .2rem;
                    }
                    .old {
                        display: inline-block;
                        margin: 0 .1rem;
                        font-size: .22rem;
                        color: rgba(0,0,0,.54);
                    }
                    s {
                        text-decoration: line-through;
                    }
                }
                .buybtn {
                    margin: 0 auto;
                    width: 6rem;
                    background: #ea625b;
                    border-radius: .25rem;
                    text-align: center;
                    color: #fff;
                    font-size: 1rem;
                    padding: .16rem 0;
                    font-weight: 700;
                }
        }
    }
}
.go-top{
    position: fixed;
    right: 0;
    bottom: 50px;
    height: 50px;
    width: 50px;
}

</style>