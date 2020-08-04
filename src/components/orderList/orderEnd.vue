<template>
    <div>
        <div v-if="lists.length>0">
            <div class="orderlists" v-for="(item,index) in lists" :key="index">
                <div v-if="item.type == 3">
                    <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="String(item.dateTime)" />
                    <div v-for="(value,key) in item.goodsList" :key="key">
                        <van-card
                        :num="value.num"
                        :price="value.price"
                        :desc="value.brief"
                        :title="value.name"
                        :thumb="value.imgs"
                        >
                        </van-card>
                    </div>
                    <div class="orderfooter">
                        <!-- 已完成 -->
                        <van-button size="mini" @click="evaluate(item.orderId)">商品评价</van-button>
                        <div v-if="item.showStar">
                            <van-rate v-model="item.value" color="#ee0a24" :readonly="item.isRead"  @change="onChange"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 订单页为空的时候显示的内容 -->
        <div v-else class="cart-empty">
            <router-link to="/cart">
                <div class="imgs">
                    <img src="../../assets/img/cart-empty.png" alt="">
                </div>
                <span>您的订单还是空的！</span>
                <font>快去购物吧！</font> 
            </router-link>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Rate } from 'vant';
    Vue.use(Rate);
    export default {
        data() {
            return {
                // isChange:false, //是否已评分
                orderId : "",
            }
        },
        // created(){
        //     let dataList = this.$store.state.order.lists;
        //     this.lists = dataList.filter(item=>item.type == 3); //类型为一生成新数组
        //     this.typeList = this.$store.state.order.typeList;
        //     console.log(this.lists.length)
        //     // if(!this.lists.length){
        //     //     Toast.fail("请添加商品");
        //     // }
        // },
        computed: {
            lists() {
                return this.$store.state.order.lists.filter(item=>item.type == 3);//生成typeList=3已完成的新数组
            },
            typeList(){
                return this.$store.state.order.typeList;
            }
        },
        methods:{
            evaluate(orderId){
                this.orderId = orderId;
                var showStarObj = {
                    orderId : orderId,
                    show : true
                }
                this.$store.commit("order/showStarFun",showStarObj); 
            },
            onChange(value){
                //修改value值
                var orderAllObj = {
                    orderId : this.orderId,
                    starValue : value
                }
                console.log("ALL的对象"+orderAllObj)
                this.$store.commit("order/editStar",orderAllObj);
                //修改为已评分
                var showIsChangeObj = {
                    orderId : this.orderId,
                    show : true
                }
                this.$store.commit("order/showIsChange",showIsChangeObj);
                // this.isChange = true;
                // var orderAllObj = {
                //     orderId : this.orderId,
                //     starValue : value
                // }
                // this.$store.commit("order/editStar",orderAllObj);
            }
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                // this.$store.commit("order/editId",this.lists);
                this.$store.commit("order/editRead");
                this.$store.commit("order/editshowStar");
            }
        }
    }
</script>

<style lang="scss" scoped>
    .orderlists{
        margin-top: 10px;
            background: #fff;
        .van-card{
            background: #fff;
        }
        .orderfooter{
            text-align: right;
            padding: 0px 16px 10px 16px;
        }
    }
    .cart-empty{
        position: relative;
        color: #b0b0b0;
        .imgs{
            padding: 8rem 0;
            img{
                margin-left: -2rem;
            }
        }
        span{
            position: absolute;
            right: 1.9rem;
            top: 3rem;
            font-size: 2rem;
        }
        font{
            position: absolute;
            right: 0rem;
            top: 13rem;
            font-size: 1.5rem;
        }
    }
</style>