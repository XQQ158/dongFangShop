<template>
    <div>
        <van-button class="arrowleftgo" @click="$router.go(-1)" plain hairline round icon="arrow-left" type="default" />
        <!-- 引入轮播图组件 -->
        <swiper :img="Images"></swiper>
        <!-- 回到顶部 -->
        <img v-if="btnFlag" class="go-top" src="../assets/img/back.png" @click="backTop">

        <div class="panel">
            <div class="price">￥{{goods.price}}</div>
            <div class="name">
                <img src="../assets/img/618.png" alt="">
                <span>{{goods.name}}</span>
            </div>
            <div class="content">
                <div class="text">{{goods.test1}}</div>
                <div class="text">{{goods.test2}}</div>
                <div class="text">{{goods.test3}}</div>
            </div>
        </div>
        <div class="com">
            <img src="../assets/img/com.jpg" alt="">
        </div>
        <div class="imgs">
            <img src="../assets/img/details1.jpg" alt="">
            <img src="../assets/img/details2.jpg" alt="">
            <img src="../assets/img/details3.jpg" alt="">
            <img src="../assets/img/details4.jpg" alt="">
        </div>

        <van-goods-action>
            <van-goods-action-icon 
            @click="$router.push('/')"
            icon="home-o"  
            color="#07c160"
            />
            <van-goods-action-icon 
            @click="$router.push('/cart')"
            icon="cart-o" 
            :badge="totalCount"
            />
            <!-- <van-goods-action-icon icon="star" color="#ff5000" /> 收藏标志-->
            <van-goods-action-button type="warning" @click="add(goods)" text="加入购物车" />
            <van-goods-action-button type="danger" @click="pay(goods)" text="立即购买" />
        </van-goods-action>
    </div>
</template>

<script>
    import {createNamespacedHelpers} from "vuex";
    const {mapGetters,mapMutations} = createNamespacedHelpers("cart");
    import swiper from "../components/public/swiper";
    export default {
        data() {
            return {
                Images:[],
                goods:{},
                // total:0,  //购物车显示的总数量
                btnFlag:""
            }
        },
        created(){
            this.init();
        },
        mounted () {
            window.addEventListener('scroll', this.scrollToTop)
        },
        destroyed () {
            window.removeEventListener('scroll', this.scrollToTop)
        },
        methods:{
            init(){
                //给商品赋ID值
                var goodsId = this.$route.query.id;
                //在store中查找对应ID的商品信息
                this.$store.state.mygoods.forEach(item=>{
                    if(item.id == goodsId){
                        //把商品信息赋值到goods对象中
                        Object.assign(this.goods,item);
                        this.Images = item.swiper; //将存储的轮播图数组赋值，同时Images要为空数组
                    }
                })
            },
            // 直接调用vuex里面方法
            ...mapMutations(["add"]),
            //点击立即购买
            pay(obj){
                this.$store.commit("cart/buyNow",obj);
                this.$router.push('/cart');
            },
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
        computed:{
            // ...mapState({
            //     total:state=>state.total
            // })
            ...mapGetters(["totalCount"])
        },
        components:{
            swiper,
        },
        
    }
</script>

<style lang="scss" scoped>
    .arrowleftgo{
        position:fixed;
        left:10px;
        top:10px;
        z-index: 200;
        font-size: 16px;
        width: 44px;
    }
    .panel{
        padding: 15px 15px 0px 15px; 
        margin-bottom: 15px; 
        .price{
            color:#ff6b00;
            font-size: 28px;
        }
        .name{
            height: 2rem;
            width: 100%;
            text-align: center;
            display: table-cell;
            vertical-align: middle;
            img{
                height: 1rem;
                width: auto;
                margin-right: .5rem;
                display: inline-block;
            }
            span{
                font-size: 1.2rem;
                color: black;
            }
        }
        .content{
            .text{
                height: 2rem;
                overflow: hidden;
                text-overflow: ellipsis;
                line-height: 3rem;
                font-size: 0.9rem;
            }
        }
    }
    .com{
        padding: 1rem;
        img{
            border-radius: .5rem;
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