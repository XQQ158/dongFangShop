<template>
    <div>
        <!-- 轮播图 -->
        <!-- <swiper :img="Images"></swiper> -->
        <div @click="$router.push('/cart')">
            <img src="../../assets/img/note1.jpg" alt="">
            <img src="../../assets/img/note2.jpg" alt="">
        </div>
        <!-- 商品列表 -->
        <div class="list_two ">
            <router-link to="/details?id=19" tag="a">
                <div class="top">
                    <img src="../../assets/img/note8.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Air 13.3" 2019款</div>
                    <div class="brief">独立显卡,指纹解锁</div>
                    <div class="price">￥4999<span>起</span>
                        <span class="price old"><s>￥5699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=20" tag="a">
                <div class="top">
                    <img src="../../assets/img/note9.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">RedmiBook 13</div>
                    <div class="brief">全面屏包罗万千视界</div>
                    <div class="price">￥4199<span>起</span>
                        <span class="price old"><s>￥4499</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div @click="$router.push('/cart')">
            <img src="../../assets/img/note3.jpg" alt="">
            <img src="../../assets/img/note4.jpg" alt="">
            <img src="../../assets/img/note5.jpg" alt="">
            <img src="../../assets/img/note6.jpg" alt="">
            <img src="../../assets/img/note7.jpg" alt="">
        </div>
        <!-- 商品列表end -->
    </div>
</template>

<script>
    export default {
        
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