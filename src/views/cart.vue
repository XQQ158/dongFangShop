<template>
    <div class="page">
        <van-nav-bar class="nav"
            :title="$route.name"
        />
        <!-- 商品列表 -->
        <van-row class="goodslist" v-for="(item,index) in lists" :key="index">
            <van-col span="2">
                <van-checkbox  :value="item.isSelect" @click="inputselect(index)"></van-checkbox>
                <!-- <input type="checkbox" :checked="item.isSelect" @click="inputselect(index)" > -->
            </van-col>
            <van-col span="7">
                <van-image
                height="134"
                fit="cover"
                :src="item.imgs"
                />
            </van-col>
            <!-- src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1585724658.11257831.jpg" -->
            <!-- 默认图片"https://img.yzcdn.cn/vant/ipad.jpeg"  -->
            <van-col span="15">
                <div class="content">
                    <div class="box">
                        <div class="name">{{item.name}}</div>
                        <div class="brief">{{item.brief}}</div>
                        <div class="price">￥{{item.price}}</div>
                    </div>
                    <div class="btn">
                        <van-button type="default" size="mini" @click="item.num <= 1? 1:item.num--">-</van-button>
                        <span>{{item.num}}</span>
                        <van-button type="default" size="mini" @click="item.num++">+</van-button>
                        <van-button type="danger" class="danger" size="mini" @click="del(index)">删除</van-button>
                    </div>
                </div>
            </van-col>
        </van-row>
        <!-- 数组长度为零，默认隐藏 显示去逛逛-->
        <div v-show="!($store.state.cart.lists.length)" >
            <div v-if="!($store.state.username)" >
                <div class="login-text" @click="$router.push('/login')">
                    <div class="text-left">登录后享受更多优惠</div>
                    <div class="text-right">去登录></div>
                </div>
            </div>
            <div class="noitem" @click="recom">
                <a href="javascript:;" class="noitem-content">
                  <span class="noitem-txt">购物车还是空的</span>
                  <em class="shoping" >去逛逛</em>
                </a>
            </div>
        </div>
        <!-- 猜你喜欢 -->
        <div class="recommend-img">
              <img src="../assets/img/like.jpg" alt="">
        </div>
        
        <div class="list_two ">
            <router-link to="/details?id=27" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom1.jpg" alt="">
                </div>
                <div class="bottom">
                    <div data-v-c1eaedb8="" class="goods-name no-wrap"></div>
                    <div class="name">米家驱蚊器 智能版</div>
                    <div class="price">￥59</div>
                </div>
            </router-link>
            <router-link to="/details?id=28" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom2.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">米家直流变频落地扇1X</div>
                    <div class="price">￥299</div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=29" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom3.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi 8 4GB+64GB</div>
                    <div class="price">￥799
                        <span class="price old"><s>￥899</s></span>
                    </div>
                </div>
            </router-link>
            <router-link to="/details?id=30" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom4.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi Note 8 6GB+64GB</div>
                    <div class="price">￥1099
                        <span class="price old"><s>￥1199</s></span>
                    </div>
                </div>
            </router-link>
        </div>
        <div class="list_two ">
            <router-link to="/details?id=31" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom5.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">90分框体旅行箱 24英寸</div>
                    <div class="price">￥599
                        <span class="price old"><s>￥799</s></span>
                    </div>
                </div>
            </router-link>
            <router-link to="/details?id=32" tag="a">
                <div class="top">
                    <img src="../assets/img/cart-recom6.jpg" alt="">
                </div>
                <div class="bottom">
                    <div class="name">Redmi 7A 3GB+32GB</div>
                    <div class="price">￥599
                        <span class="price old"><s>￥799</s></span>
                    </div>
                </div>
            </router-link>
        </div>
        
        <van-submit-bar  v-show="$store.state.cart.lists.length" :price="total * 100" button-text="提交订单" @submit="onsubmit">
            <van-checkbox @click="checkedAll" :value="checked">全选</van-checkbox>
        </van-submit-bar>

        <vantabber></vantabber>
    </div>
</template>

<script>
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data() {
            return {
                checked:true,
                total:0,
                lists:[],   
            }
        },
        methods:{
            recom(){
                this.$router.push("/home/recommend")
            },
            del(index){
                this.lists[index].num = 0;
                this.lists.splice(index,1)
            },
            sum(){
                // 总价格计算
                // total 累加值
                this.total = this.lists.reduce((total,item)=>{
                    // 判断选项选中计算价格
                    if(!item.isSelect) return total; //返回默认价格
                    return total + parseInt(item.price) * parseInt(item.num); //总价格
                },0) //总价格默认值0
            },
            checkedAll(){
                this.lists.forEach((item)=>{
                    item.isSelect = !this.checked;
                })
                this.checked = !this.checked;
            },
            checkboxclick(){
                // 第一次加载页面过程中，判断复选框状态，全部true，返回true，有一个false,放回false
                this.checked = this.lists.every((item)=>{
                    return item.isSelect;
                })
            },
            inputselect(index){
                // 修改商品列表
                this.lists[index].isSelect = !this.lists[index].isSelect;
                this.checkboxclick();
                this.sum();
            },
            onsubmit(){
                // 判断用户名是否为空
                // 为空：跳转登陆界面
                // 不为空：跳转订单页面
                if(this.$store.state.username){
                    this.$router.push('/order');
                }else{
                    this.$router.push({
                        path:'/login',
                        query:{
                            path:"/cart"  //登录成功后跳回购物车页面支付订单
                        }
                    })
                }
            }
        },
        created(){
            this.lists = this.$store.state.cart.lists;
            this.checkboxclick();
            this.sum();
            this.$store.state.active = 2;
        },
        beforeUpdate(){
            this.sum();
        },
        beforeDestroy(){
            this.$store.commit("cart/edit",this.lists);
        },
        components:{
            vantabber
        }
    }
</script>

<style lang="scss" scoped>
.page{
    padding-bottom: 50px;
}
.goodslist{
    position: relative;
    background-color: #fff;
    .van-checkbox{
        position: relative;
        left:5px;
        top:52px;
    }
    .content{
        padding-left:10px;
        .box{
            margin-top: 15px;
            .name{
                font-size: 1rem;
            }
            .brief{
                font-size: 1rem;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .price{
                padding-top: 5px;
                font-size: 1.2rem;
                color:#323233;
            }
        }
        span{
            display: inline-block;
            width: 30px;
            font-size: 14px;
            text-align: center;
        }
        .danger{
            span{
                font-size: 12px;
            }
        }
    }
}

.van-submit-bar{
    bottom: 50px;
}
.page{
    margin-bottom: 50px;
}
.goodsinfo{
    font-size: 30px;
    text-align: center;
}
.goodslisttitle{
    font-size: 24px;
    text-indent: 2em;
    height: 45px;
    line-height: 45px;
}
.login-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    background-color: #ffffffe6;
    height: 4.04rem;
    padding-left: 1rem;
    .text-left {
        padding-left: 0.7rem;
    }
    .text-right {
        font-size: 1rem;
        color: rgba(0, 0, 0, 0.54);
        padding-right: 1rem;
    }
}
.noitem {
    width: 100%;
    box-sizing: border-box;
    background-color: #ebebeb;
    padding: 1.45rem;
    color: #3c3c3c;
    text-align: center;
    .noitem-content {
        height: 0.7rem;
        font-size: 1rem;
        text-align: center;
        background: transparent;
        .shoping {
            display: inline-block;
            border: 1px solid rgba(0, 0, 0, 0.15);
            box-sizing: border-box;
            padding: 0 .24rem;
            color: rgba(0, 0, 0, 0.87);
            font-style: normal;
            margin-left: .5rem;
        }
    }
}
.list_two{
    padding: 0.22rem ;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    background: rgb(255, 255, 255);
    :first-child{
        margin-right: .1rem;
    }
    :last-child{
        margin-left: .1rem;
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
           
            -webkit-box-align: center;
            align-items: center;
            background-color: #fff;
            .name {
                font-size: .9rem;
                color: rgba(0,0,0,.87);
                padding-left: 1em;
                white-space: nowrap;      /* 不换行 */
                overflow: hidden;         /* 内容超出宽度时隐藏超出部分的内容 */
                text-overflow: ellipsis;  /* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
            }
            .price {
                font-size: 1.1rem;
                color: #ff6700;
                height: 1.5em;
                line-height: 1.5em;
                padding-left: .5em;
                display: inline-block;
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
    }
}
}
.nav{
    background-color: #F2F2F2;
}
// .pay{
//     position: fixed;
//     z-index: 9999;
//     .mima{
//         margin-top: 10px;
//     }
// }
</style>