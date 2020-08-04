<template>
    <div>
        <!-- 弹出支付密码页面 -->
        <van-popup v-model="isShow"  position="bottom" :style="{ height: '53%' }">
            <!-- 密码输入框 -->
            <van-password-input class="mima"
            :value="value"
            info="密码为 6 位数字"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
            />
            <!-- 数字键盘 -->
            <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="!showKeyboard"
            />
        </van-popup>
    </div>
</template>

<script>
    import { Toast } from 'vant';
    export default {
        data(){
            return{
                value: '',
                showKeyboard: true,
                // timer:null,  //延时器
            }
        },
        computed: {
           isShow: {
               get(){
                   console.log("get的值"+this.$store.state.pay.showPay)
                   return this.$store.state.pay.showPay;
               },
               set(val){
                   console.log("set的值"+val)
                   this.$store.commit("pay/setShowPay",val);
               }
           }
        },
        methods:{
            //支付界面方法
            onInput(key) {
                this.value = (this.value + key).slice(0, 6);
                var that = this;
                if(this.value.split("").length == 6){
                    Toast("支付成功");
                    let flag = true;
                    //向父组件传值打开支付界面
                    that.$emit("isOrder",flag);
                    console.log("开始计时")   
                }
            },
            onDelete() {
                this.value = this.value.slice(0, this.value.length - 1);
            },
        },
        // beforeDestroy(){
        //     clearTimeout(this.timer);
        // },
        
    }
</script>

<style lang="scss" scoped>

</style>