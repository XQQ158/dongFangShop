<template>
    <div class="box">
        <!-- 广告页advertpage.vue -->
        <div class="bigcon">
            <div class="cont">
                <div class="num">{{num}}</div>
                <div class="btn" @click="goHome">跳过</div>
            </div>
        </div>  
    </div>
</template>

<script>
    export default {
        data(){
            return{
                num:3,
                cleardata:null
            }
        },
        methods:{
            goHome(){
                this.$router.push("/home/recommend");//跳转首页
            }
        },
        created(){
            // 倒计时
            this.cleardata = setInterval(()=>{
                if(this.num == 0){
                    // 跳转首页
                    this.$router.push("/home/recommend");//跳转首页
                }else{
                    this.num--;
                }
            },1000)
        },
        // 切换组件生周期钩子，销毁函数
        beforeDestroy(){
            // 当路由器切换时候，关闭定时器
            clearInterval(this.cleardata);
        },
        
    }
</script>

<style lang="scss" scoped>
    .box{
        background: url("../../assets/img/ad.jpg");
        background-size: 100% 100%;
        height: 100%;
        position: fixed;
        width: 100%;
    }
    .bigcon{
        position: relative;
        .cont{
            position: absolute;
            right: 0;
            .num{
                height: 50px;
                width: 50px;
                border: 1px solid #c8c9cc;
                border-radius: 50%;
                text-align: center;
                line-height: 50px;
                font-size: 2rem;
            }
            .btn{
                text-align: center;
                color: #969799;
            }
        }     
    }
</style>