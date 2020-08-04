<template>
    <div>
        <div class="nav1" @click="$router.push('/cart')">
            <img src="../../assets/img/TVnav1.jpg" alt="">
            <img src="../../assets/img/TVnav2.jpg" alt="">
        </div>
        <!-- 商品列表 -->
        <div class="list_two ">
            <router-link to="/details?id=13" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele1.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">全面屏55英寸</div>
                    <div class="brief">全面屏设计,人工智能语音</div>
                    <div class="price">￥1599<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=14" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele2.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">电视4A 65"</div>
                    <div class="brief">4K HDR，人工智能语音系统</div>
                    <div class="price">￥2299<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div>
            <img src="../../assets/img/TVnav3.jpg" alt="">
        </div>
        <div class="list_two ">
            <router-link to="/details?id=15" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">电视4A 32"</div>
                    <div class="brief">人工智能系统,高清液晶屏</div>
                    <div class="price">￥599<span>起</span>
                        <span class="price old"><s>￥799</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=16" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">电视4A 43"</div>
                    <div class="brief">人工智能系统,FHD全高清屏</div>
                    <div class="price">￥1099<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=17" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele5.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">电视4A 50"</div>
                    <div class="brief">4K HDR，人工智能语音系统</div>
                    <div class="price">￥1499<span>起</span>
                        <span class="price old"><s>￥1699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=18" tag="a">
                <div class="top">
                    <img src="../../assets/img/tele6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">全面屏电视E43C</div>
                    <div class="brief">时尚全面屏设计,人工智能语音</div>
                    <div class="price">￥1149<span>起</span>
                        <span class="price old"><s>￥1499</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <!-- 商品列表end -->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                Images:[
                    require("../../assets/img/bannerTV1.jpg"),
                    require("../../assets/img/bannerTV2.jpg"),
                    require("../../assets/img/bannerTV3.jpg"),
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>
    .nav1{
        width: 100%;
        height: 18.5rem;
    }
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

</style>