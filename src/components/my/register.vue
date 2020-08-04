<template>
    <div class="login-wrap"> 
        <div class="lgnheader">
            <span class="iconfont icon-dongfanggouwulogo"></span>
            <h4 class="header-tit-txt">东方购物帐号注册</h4>
        </div>
        <form action="/register" method="get">
            <div class="login-form">
                <label for="" class="labelbox">
                    <input class="item-account" type="text" name="user" autocomplete="off" placeholder="请输入用户名" v-model="username">
                </label>
                <label for="" class="labelbox">
                    <input class="item-account" type="password" name="password" autocomplete="off" placeholder="请输入密码" v-model="password">
                </label>
                <label for="" class="labelbox">
                    <input class="item-account" type="password" name="password" autocomplete="off" placeholder="请再次输入密码" v-model="password2">
                </label>
            </div>
            <div class="btn-login-wrap">
                <input type="button" class="btn-login" value="注册" @click="onSubmit">
            </div>
        </form>
        <div class="btn-back-wrap">
            <input type="button" class="btn-back" value="返回" @click="$router.push('/my')">
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    import { Toast } from 'vant';
    export default {
        data() {
            return {
            username: '',
            password: '',
            password2: '',
            };
        },
        methods: {
            onSubmit(params) {
                let _this = this;
                console.log(this.username)
                console.log(this.password)
                console.log(this.password2)
                this.$axios.get("/api/register",{
                    params:{
                        username:this.username,
                        password:this.password,
                        password2:this.password2
                }}).then((res)=>{
                    console.log(params)
                    console.log(res.data);
                    // 请求数据成功后提示
                    if(res.data == "200"){
                        Toast({
                            message:"注册成功",
                            onOpened(){
                                // 回调跳转路由
                                _this.$router.push("/login");
                            }
                            });
                    }else if(res.data == "202"){
                        Dialog.confirm({
                            message: '用户名已存在',
                            })
                            .then(() => {
                                this.username = "";
                                this.password = "";
                                this.password2 = "";
                            })
                            .catch(() => {
                                
                        });
                    }
                    else{
                        Dialog.confirm({
                            message: '注册失败',
                            })
                            .then(() => {
                                this.username = "";
                                this.password = "";
                                this.password2 = "";
                            })
                            .catch(() => {
                                
                        });
                    }
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
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