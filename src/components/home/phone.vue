<template>
    <div>
        <!-- 轮播图 -->
        <swiper :img="Images"></swiper>
    
        <!-- 商品列表 -->
        
        <div class="goodslist" @click="$router.push('/cart')">
            <div>
                <img src="../../assets/img/Pvue1.jpg" alt="">
            </div>
            <div class="mybottom clearfix">
                <div class="left">
                    <div class="name">Redmi Note 8 Pro</div>
                    <div class="brief">6400万全场景四摄</div>
                </div>
                <div class="right">
                    <div class="price">￥1299<span>起</span>
                        <span class="price old"><s>￥1399</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </div>
        </div>
        <div class="goodslist" @click="$router.push('/cart')">
            <div>
                <img src="../../assets/img/Pvue2.jpg" alt="">
            </div>
            <div class="mybottom clearfix">
                <div class="left">
                    <div class="name">Redmi Note 8</div>
                    <div class="brief">千元4800万四摄</div>
                </div>
                <div class="right">
                    <div class="price">￥899<span>起</span>
                        <span class="price old"><s>￥999</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </div>
        </div>
        <div class="goodslist" @click="$router.push('/cart')">
            <div>
                <img src="../../assets/img/Pvue3.jpg" alt="">
            </div>
            <div class="mybottom clearfix">
                <div class="left">
                    <div class="name">Redmi K30 5G</div>
                    <div class="brief">双模5G，120Hz流速屏</div>
                </div>
                <div class="right">
                    <div class="price">￥3999<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </div>
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
                    <div class="name">Redmi K30 5G</div>
                    <div class="brief">双模5G，120Hz流速屏</div>
                    <div class="price">￥3999<span>起</span></div>
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
                    require("../../assets/img/banner04.jpg"),
                    require("../../assets/img/banner05.jpg"),
                    require("../../assets/img/banner06.jpg"),
                ]
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
    .goodslist{
        background: rgb(230, 231, 251);
        width: 100%;
        padding:5px;
        box-sizing: border-box;
    }
    .clearfix ::after{
        content: "";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .clearfix{
        *zoom: 1;
    }
    .mybottom{
        padding: .2rem .27rem;
        text-align: center;
        -webkit-box-align: center;
        align-items: center;
        background-color: #fff;
        .left{
            float: left;
            overflow: hidden;
            text-align: left;
            margin-left: 15px;
        }
        .right{
            float: right;
            overflow: hidden;
        }
        .name {
            font-size: 1rem;
            color: rgba(0, 0, 0, 0.87);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .brief {
            font-size: 0.8rem;
            color: rgba(0, 0, 0, 0.54);
            margin-top: 10px;
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