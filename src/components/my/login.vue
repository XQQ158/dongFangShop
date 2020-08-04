<template>
    <div class="login-wrap"> 
        <div class="lgnheader">
            <span class="iconfont icon-dongfanggouwulogo"></span>
            <h4 class="header-tit-txt">东方购物帐号登录</h4>
        </div>
        <form action="/login" method="get">
            <div class="login-form">
                <label for="" class="labelbox">
                    <input class="item-account" type="text" name="user" autocomplete="off" placeholder="请输入用户名" v-model="username">
                </label>
                <label for="" class="labelbox">
                    <input class="item-account" type="password" name="password" autocomplete="off" placeholder="请输入密码" v-model="password">
                </label>
            </div>
            <slide @confirm="myConfirm"></slide>
            <div class="btn-login-wrap">
                <input type="button" class="btn-login" value="登录" @click="onSubmit">
            </div>
        </form>
        <div class="btn-back-wrap">
            <input type="button" class="btn-back" value="返回" @click="$router.push('/my')">
        </div>
    </div>
</template>

<script>
    import slide from "../public/slide"
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
        data() {
            return {
                username: '',
                password: '',
                flag:false //滑块是否滑动
            };
        },
        methods: {
            onSubmit() {
                if(this.flag == false){
                    Dialog({ message: "请滑动验证" });
                    return;
                }
                let _this = this;
                // 判断是否传参，修改返回路径
                let path = "path" in _this.$route.query ? _this.$route.query.path:'/my';
                this.$axios.get("/api/login",{
                    params:{
                        username:this.username,
                        password:this.password,
                    }}).then((res)=>{
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"登陆成功",
                            onOpened(){
                                // 登陆成功用户名存入vuex
                                _this.$store.state.username = _this.username;
                                // 回调跳转路由
                                _this.$router.push(path);
                            }
                            });
                    }else{
                        Dialog({ message: "登录失败" });
                    }
                })
            },
            myConfirm(val){
                this.flag = val;
            }
        },
        components:{
            slide
        }
    }
</script>

<style lang="scss" scoped>
    /* 主体部分 */
.login-wrap {
    width: 100%;
    padding: 0 1.4rem;
    box-sizing: border-box;
    .lgnheader {
        padding: 1.5rem 0;
        .icon-dongfanggouwulogo{
            text-align: center;
            display: block;
            font-size: 4rem;
            height: 4rem;
            line-height: 4rem;
            color: #ff6B00;
        }
        .header-tit-txt{
            font-size: 1.2rem;
            font-weight: normal;
            text-align: center;
            margin-top: 1rem;
        }
    }
    .login-form {
        display: block;
        .labelbox {
            display: flex;
            margin-bottom: 0.05rem;
            border-bottom: 1px solid #d3d3d3;
            .item-account {
                display: block;
                width: 100%;
                font-size: 1.2rem;
                line-height: normal;
                padding: 0.8rem 0;
                border: none;
            }
        }
    }
    .btn-login-wrap {
        width: 100%;
        padding-top: 1.2rem;
        .btn-login {
            display: block;
            width: 100%;
            padding: 0.5rem 0;
            margin-bottom: 0.7rem;
            font-size: 1.2rem;
            text-align: center;
            color: #fff;
            border-radius: 0.3rem;
            overflow: hidden;
            border: none;
            background-color: #ff6700;
        }
    }
    .btn-back-wrap {
        width: 100%;
        .btn-back {
            display: block;
            width: 100%;
            box-sizing: border-box;
            padding: 0.5rem 0;
            margin-top: 2rem;
            font-size: 1.2rem;
            text-align: center;
            color: #000;
            border-radius: 0.3rem;
            overflow: hidden;
            border: 1px solid #d3d3d3;
            background-color: #fff;
        }
    }
} 

</style>