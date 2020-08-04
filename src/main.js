import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 公共样式
import "./assets/css/base.css";
//字体图标
import "./assets/font/iconfont.css"
import './assets/font/iconfont.js'

// vant组件库
// $cnpm i vant -S
import vant from "vant";
import "vant/lib/index.css";

// 插件
// cnpm i swiper -S
import "swiper/css/swiper.min.css";

// 配置axios
// cnpm i axios -S
import axios from "axios";
// axios.defaults.baseURL = "http://127.0.0.1:3000/"
// axios.defaults.baseURL = "http://47.113.107.114:3000/"
Vue.prototype.$axios = axios;

// 安装时间模块
// cnpm i moment -S
import moment from "moment";
// 全局过滤器
Vue.filter("dateFormat",function(dateStr){
    return moment(dateStr).format("YYYY-MM-DD hh:mm:ss");
})

Vue.use(vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

