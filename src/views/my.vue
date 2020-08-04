<template>
    <div>
        
        <van-nav-bar class="nav"
            :title="$route.name"
        />
        
        <van-row gutter="20" class="top">
            <van-col span="4">
                <div class="myimg" v-if="$store.state.username">
                    <img src="../assets/img/women.jpg" alt="">
                </div>
                <div v-else class="myimg" >
                    <img src="../assets/img/my.png" alt="">
                </div>
            </van-col>
            <van-col span="20">
                <div v-if="$store.state.username">
                    <span v-text="$store.state.username"></span>
                    <span @click="$store.state.username=''">退出</span>
                </div>
                <div v-else>
                    <router-link to="/login" >登陆</router-link>
                    <router-link to="/register" >注册</router-link>
                </div>
            </van-col>
        </van-row>
        
        <!-- 列表 -->
        <van-cell-group>
            <van-cell title="我的订单" is-link @click="login"  />
            <van-cell title="我的地址" @click="address" is-link />
        </van-cell-group>
        <!-- 其他单元格开始 -->
        <div class="rests">
            <ul>
                <li v-for="(item,index) in rests" :key="index" @click="show">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="item.ico"></use>
                    </svg>
                    <i>{{item.text}}</i>
                    <span class="iconfont icon-jiantou"></span>
                </li>
            </ul>
        </div>
        <!-- 其他单元格结束 -->
        
        <vantabber></vantabber>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import vantabber from "../components/public/vantabbar.vue"
    export default {
        data(){
            return{
                rests:[
                    {text:"会员中心",ico:"#icon-huangguan3-copy-copy"},
                    {text:"我的优惠",ico:"#icon-qianbao"},
                    {text:"服务中心",ico:"#icon-icon_service"},
                    {text:"智慧之家",ico:"#icon-icon-test"},
                    {text:"我的f码",ico:"#icon-Fmatongdao"},
                    {text:"礼物码兑换",ico:"#icon-icon_gift"},
                    {text:"设置",ico:"#icon-shezhi"},
                ],
            }
        },
        methods:{
            // 定义跳转方法
            address(){
                // 如果地址没有数据，直接跳转地址添加页面
                if(this.$store.state.address.lists.length==0){
                    this.$router.push('/addressAdd')
                }else{
                    this.$router.push('/address')
                }
            },
            login(){
                if(this.$store.state.username){
                    this.$router.push("/orderList/orderGoods")
                }else{
                    this.$router.push("/login")
                }
            },
            show(){
                Dialog({ message: "敬请期待" });
            }
        },
        components:{
            vantabber
        },
        created(){
            this.$store.state.active = 3;
        }
    }
</script>

<style lang="scss" scoped>
.top{
    background: #F37D0F url("../assets/img/bg.png") center center no-repeat;
    background-size: 100% auto;
    span{
        width: 50%;
        margin-left: 20px;
        color:#fff;
    }
}
.myimg{
    height: 3.5rem;
    width: 3.5rem;
    margin-top: .8rem;
    margin-left: 1.5rem;
    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
    }
}
.van-col{
    height: 80px;
    line-height: 80px;
    font-size: 16px;

    a{
        margin-left: 20px;
        color:#fff;
    }
}
.nav{
    background-color: #F2F2F2;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
//其他单元格
.rests{
    padding-top: 1px;
    background-color: #f5f5f5;
    ul{
        li{
            height: 52px;
            line-height: 52px;
            font-size: 13px;
            background-color: white;
            position: relative;
            border-bottom: 1px solid #d9d9d9;
            svg{
                font-size: 26px;
                padding: 0 20px;
                transform: translateY(3px);
            }
            i{
                font-size: 16px;
            }
            span{
                position:absolute;
                top:0;
                right: 20px;
            }
            &:nth-child(2n),&:last-child{
                border: 0;
            }
            &:nth-child(2n+1){
                margin-top: 10px;
            }
        }
    }
}
</style>