<template>
    <div class="page">
        <van-nav-bar
            :title="$route.name"
            left-text="返回"
            left-arrow
            @click-left="cartvue"
        />
        <!-- 地址 -->
        <div @click="addressfun">
            <van-contact-card 
            :type="cardType" 
            :name="name" 
            :tel="tel" 
            add-text="添加联系人"
            :editable="false" />
        </div>
        <!-- 商品卡片 -->
        <div v-for="(item,index) in lists" :key="index">
            <van-card
            :num="item.num"
            :price="item.price"
            :desc="item.brief"
            :title="item.name"
            :thumb="item.imgs"
            />
        </div>
        <!-- 提交订单 -->
        <van-submit-bar 
        :price="total*100" 
        button-text="提交订单" @submit="onsubmit" />

        <!-- 弹出支付密码页面 -->
        <pay @isOrder="myOrder"></pay>
    </div>
</template>

<script>
    import pay from "../../components/public/pay"
    export default {
        data() {
            return {
                name:"",
                tel:"",
                flag:false,  //是否支付成功
                timer:null,  //延时器
            }
        },
        watch: {
            flag: function(flag) {
                if(flag){
                    console.log("this.flag为真")
                    // this.$router.push("/orderList/orderGoods")  
                    let order = {
                        orderId:new Date().getTime(),
                        address:this.address,
                        goodsList:this.lists,
                        dateTime:new Date(),
                        type:2, //已支付
                        value: 1, //评分星星个数
                        isRead:false, //评分星星是否只读
                        showStar:false, //是否显示评分星星
                        isChange:false, //是否已评分
                    }
                    // 调用vuex订单数据状态
                    this.$store.commit("order/add",order);
                    // 清空购物车
                    this.$store.state.cart.lists = [];
                    this.$store.state.cart.num = 0;
                    this.timer = setTimeout(()=>{
                        console.log("关闭支付界面并跳转到待收货界面")
                        this.$store.commit("pay/setShowPay",false);    
                        this.$router.push("/orderList/orderGoods")
                    },2000)
                    
                } 
            }
        },
        methods:{
            
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            // 定义跳转方法
            addressfun(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            cartvue(){
                // 保存订单数据
                let order = {
                    orderId:new Date().getTime(),
                    address:this.address,
                    goodsList:this.lists,
                    dateTime:new Date(),
                    type:1, //未支付
                    value: 1, //评分星星个数
                    isRead:false, //评分星星是否只读
                    showStar:false, //是否显示评分星星
                    isChange:false, //是否已评分
                }
                // 调用vuex订单数据状态
                this.$store.commit("order/add",order);
                // 清空购物车
                this.$store.state.cart.lists = [];
                this.$store.state.cart.num = 0;
                this.$router.push('/cart');
                // this.$store.state.vanTabbar = true;
            },
            // 提交订单
            onsubmit(){
                //弹出支付界面
                this.$store.commit("pay/setShowPay",true);
                console.log(this.flag)
                // if(this.flag){
                //     console.log("this.flag为true")
                //     // 保存订单数据
                //     let order = {
                //         orderId:new Date().getTime(),
                //         address:this.address,
                //         goodsList:this.lists,
                //         dateTime:new Date(),
                //         type:2 //已支付
                //     }
                //     // 调用vuex订单数据状态
                //     this.$store.commit("order/add",order);
                //     // 清空购物车
                //     this.$store.state.cart.lists = [];
                //     this.$store.state.cart.num = 0;
                // }  
            },
            //接受子组件传过来的确认支付信息
            myOrder(val){
                this.flag = val;
            }
        },
        computed:{
            cardType(){
                return this.$store.state.address.lists.length==0 ? "add":"edit"
            }
        },
        components: {
            pay,
        },
        created(){
            // 获取地址数据
            let data = this.$store.state.address.lists.find(item=>item.isDefault);
            if(data){
                this.name = data.name;
                this.tel = data.tel;
                this.address = data; //定义地址对象
            }

            this.lists = this.$store.state.cart.lists;
            this.sum();//计算总价格
        },   
        beforeDestroy(){
            console.log("清除定时器")
            clearTimeout(this.timer)
        } 
    }
</script>
<style lang="scss" scoped>
    .page{
        padding-bottom: 50px;
    }
</style>

