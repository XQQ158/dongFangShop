<template>
    <div>
        <div @click="$router.push('/cart')">
            <img src="../../assets/img/jiadian1.jpg" alt="">
            <img src="../../assets/img/jiadian2.jpg" alt="">
        </div>
        <!-- 商品列表 -->

        <div class="list_two ">
            <router-link to="/details?id=21" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi波轮洗衣机1A</div>
                    <div class="brief">8kg大容量，一键操作，父母都爱用</div>
                    <div class="price">￥749<span>起</span>
                        <span class="price old"><s>￥899</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=22" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">米家洗烘一体机</div>
                    <div class="brief">智能烘干，高效净衣，省水省电</div>
                    <div class="price">￥1999<span>起</span>
                        <span class="price old"><s>￥2299</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div>
            <img src="../../assets/img/jiadian5.jpg" alt="">
        </div>
        <div class="list_two ">
            <router-link to="/details?id=23" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi波轮洗衣机1S</div>
                    <div class="brief">小身材大容量，聪明洗衣，可预约</div>
                    <div class="price">￥779<span>起</span>
                        <span class="price old"><s>￥899</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=24" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian7.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">变频滚筒洗衣机1A 8kg</div>
                    <div class="brief">8kg大容量，超薄机身，高效净衣</div>
                    <div class="price">￥1199<span>起</span>
                        <span class="price old"><s>￥1299</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=25" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian8.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">变频滚筒洗衣机1S 8kg </div>
                    <div class="brief">超薄机身大容量，除菌净衣更健康</div>
                    <div class="price">￥1299<span>起</span>
                        <span class="price old"><s>￥1599</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
            <router-link to="/details?id=26" tag="a">
                <div class="top">
                    <img src="../../assets/img/jiadian9.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">变频滚筒洗衣机1C 10kg </div>
                    <div class="brief">10kg大容量,专业羽绒洗,省水省电</div>
                    <div class="price">￥1499<span>起</span>
                        <span class="price old"><s>￥1699</s></span>
                    </div>
                    <div class="buybtn"> 立即购买</div>
                </div>
            </router-link>
        </div>
        
        
        
        <!-- 商品列表end -->

    </div>
</template>

<script>

    // import swiper from "../../components/public/swiper";
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
        margin-top: .15rem;
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