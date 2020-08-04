<template>
    <div>
        <div v-if="lists.length>0">
            <div class="orderlists" v-for="(item,index) in lists" :key="index">
                <div v-if="item.type == 2">
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
                        <!-- 待收货 -->
                        <van-button size="mini"  type="warning" @click="refund(item.orderId)">退款申请</van-button>
                        <van-button size="mini"  type="info" @click="onGoods(item.orderId)">已收货</van-button>
            
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
    import { Dialog } from 'vant';
    export default {
        // created(){
        //     let dataList = this.$store.state.order.lists;
        //     this.lists = dataList.filter(item=>item.type == 2); //类型为一生成新数组
        //     this.typeList = this.$store.state.order.typeList;
        //     // if(!this.lists.length){
        //     //     Toast.fail("请添加商品");
        //     // }
        // },
        computed: {
            lists() {
                return this.$store.state.order.lists.filter(item=>item.type == 2);//生成typeList=2待收货的新数组
            },
            typeList(){
                return this.$store.state.order.typeList;
            }
        },
        methods:{
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
            }
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