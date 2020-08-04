<template>
    <div>
        <div v-if="lists.length>0">
            <div class="orderlists" v-for="(item,index) in lists" :key="index">
                <div v-if="item.type == 1">
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
                            <!-- 待支付 -->
                            <van-button size="mini" type="primary" @click="onPay(item.orderId)">支付订单</van-button>
                            <van-button size="mini" type="danger" @click="onDel(item.orderId)">删除订单</van-button>      
                    </div>
                </div>
            </div>
        </div>
        <!-- 订单页为空的时候显示的内容 -->
        <div v-else class="cart-empty" @click="$router.push('/cart')">
                <div class="imgs">
                    <img src="../../assets/img/cart-empty.png" alt="">
                </div>
                <span>您的订单还是空的！</span>
                <font>快去购物吧！</font> 
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
                index:"",//商品的序号
                flag:false,  //是否支付成功
                orderId : ""
            }
        },
        watch: {
            flag: function(flag) {
                console.log("开始进行未支付")
                if(flag){
                    console.log("进来了")
                    var orderAllObj = {
                        orderId : this.orderId,
                        typenum : 2
                    }
                    this.$store.commit("order/editType",orderAllObj);
                    // this.lists[this.index].type = 2; //切换支付后为收货类型
                    console.log("出去了")
                    this.$store.commit("pay/setShowPay",false);   
                } 
            }
        },
        computed: {
            lists() {
                console.log(this.$store.state.order.lists.filter(item=>item.type == 1))
                return this.$store.state.order.lists.filter(item=>item.type == 1);//生成typeList=1待支付的新数组
            },
            typeList(){
                return this.$store.state.order.typeList;
            }
        },
        methods:{
            onPay(orderId){
                this.orderId = orderId;
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
            //接受子组件传过来的确认支付信息
            myOrder(val){
                console.log("接受子组件传过来的确认支付信息")
                this.flag = val;
                
                console.log(this.flag)
            }
        },
        components: {
            pay,
        },
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