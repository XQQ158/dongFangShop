<template>
    <div>
        <div v-if="lists.length>0">
            <div class="orderlists" v-for="(item,index) in lists" :key="index">
                <van-cell center :title="'订单：'+item.orderId" :value="typeList[item.type]" :label="item.dateTime | dateFormat" />
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
                        <!-- 待支付 -->
                        <div v-if="item.type == 1">
                            <van-button size="mini" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                            <van-button size="mini" type="danger"  @click="onDel(item.orderId)">删除订单</van-button>
                        </div>
                        <!-- 待收货 -->
                        <div v-else-if="item.type == 2">
                            <van-button size="mini"  type="warning" @click="refund(item.orderId)">退款申请</van-button>
                            <van-button size="mini"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
                        </div>
                        <!-- 已完成 -->
                        <div v-else-if="item.type == 3">
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
        <!-- 支付界面 -->
        <pay @isOrder="myOrder"></pay>
    </div>
</template>

<script>
    import Vue from 'vue'
    import { Rate } from 'vant';
    import { Dialog } from 'vant';
    import pay from "../../components/public/pay";
    Vue.use(Rate);
    export default {
        data() {
            return {
                flag:false, //是否支付成功
                orderId : "",
            }
        },
        watch: {
            flag: function(flag) {
                if(flag){
                    console.log("全部订单修改未支付")
                    console.log("this.orderId:"+this.orderId)
                    var orderAllObj = {
                        orderId : this.orderId,
                        typenum : 2
                    }
                    this.$store.commit("order/editType",orderAllObj);
                    // this.lists[this.index].type = 2; //切换支付后为收货类型
                    this.$store.commit("pay/setShowPay",false); 
                    console.log("全部订单完成支付")
                } 
            }
        },
        computed: {
            lists() {
                return this.$store.state.order.lists;
            },
            typeList(){
                return this.$store.state.order.typeList;
            }
        },
        methods:{
            onPay(orderId){
                this.orderId = orderId;
                console.log("this.orderId:"+this.orderId)
                //弹出支付界面
                this.$store.commit("pay/setShowPay",true);
            },
            onDel(orderId){
                Dialog.confirm({
                    message: "确定删除此订单吗",
                })
                .then(() => {
                    this.$store.commit("order/delete",orderId);
                })
                .catch(() => {

                });
            },
            refund(orderId){
                Dialog.alert({
                    message: "您的退款申请已提交,请耐心等待",
                }).then(() => {
                    this.$store.commit("order/delete",orderId);
                });
            },
            onGoods(orderId){
                var orderAllObj = {
                    orderId : orderId,
                    typenum : 3
                }
                this.$store.commit("order/editType",orderAllObj);
            },
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
            },
            //接受子组件传过来的确认支付信息
            myOrder(val){
                this.flag = val;
            },
        },
        // 组件销毁
        beforeDestroy(){
            if(this.lists.length){
                this.$store.commit("order/editRead");
                this.$store.commit("order/editshowStar");
            }
        },
        components: {
            pay,
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