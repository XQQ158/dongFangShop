<template>
    <div>
        <!-- 轮播图 -->
        <swiper :img="Images"></swiper>
        <!-- 分类 -->
        <div class="classification" @click="$router.push('/cart')">
            <img src="../../assets/img/Intel1.png" alt="">
            <img src="../../assets/img/Intel2.png" alt="">
            <img src="../../assets/img/Intel3.png" alt="">
            <img src="../../assets/img/Intel4.png" alt="">
            <img src="../../assets/img/Intel5.png" alt="">
            <img src="../../assets/img/Intel6.png" alt="">
            <img src="../../assets/img/Intel7.png" alt="">
            <img src="../../assets/img/Intel8.png" alt="">
            <img src="../../assets/img/Intel9.png" alt="">
            <img src="../../assets/img/Intel10.png" alt="">
        </div>
        <!-- 分类 end -->
        <div class="remai" @click="$router.push('/cart')">
            <img src="../../assets/img/remai.jpg" alt="">
        </div>

        <!-- 商品列表 -->
        <div class="goodslist" @click="$router.push('/cart')">
            <img src="../../assets/img/tuijian4.jpg" alt="">
            <img src="../../assets/img/zhin1.jpg" alt="">
        </div>

        <div class="list_two ">
            <router-link to="/details?id=7" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin2.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">扫拖一体机器人</div>
                    <div class="brief">扫得干净,拖得彻底</div>
                    <div class="price">￥1499<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=8" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米智能摄像机</div>
                    <div class="brief">高清画质,守护家园</div>
                    <div class="price">￥179<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=9" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米AI音箱</div>
                    <div class="brief">听音乐,语音遥控家电</div>
                    <div class="price">￥229<span>起</span>
                        <span class="price old"><s>￥299</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=10" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin5.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米体脂秤2</div>
                    <div class="brief">轻松掌握身体脂肪率</div>
                    <div class="price">￥99<span>起</span></div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=11" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米净水器</div>
                    <div class="brief">400加仑大流量</div>
                    <div class="price">￥1099<span>起</span>
                        <span class="price old"><s>￥1999</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=12" tag="a">
                <div class="top">
                    <img src="../../assets/img/zhin7.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">小米手环4</div>
                    <div class="brief">大屏彩显,20天超长续航</div>
                    <div class="price">￥149<span>起</span>
                        <span class="price old"><s>￥169</s></span>
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
                    require("../../assets/img/banner07.jpg"),
                    require("../../assets/img/banner08.jpg"),
                    require("../../assets/img/banner09.jpg"),
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
    .remai{
        margin: 5px 0;
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

</style>