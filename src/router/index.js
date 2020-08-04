import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from "./routes/home";
import category from "./routes/category";
import cart from "./routes/cart";
import my from "./routes/my";
import search from "./routes/search";
import details from "./routes/details";
import publics from "./routes/publics";
import address from "./routes/address";
import order from "./routes/order";

  const routes = [
    {
      path:"/",
      redirect:"/advertpage" //默认进入广告页
    },
    home,     //首页
    category, //分类
    ...cart,     //购物车
    ...my,       //我的
    search,    //搜索
    details,    //详情页
    ...publics, //公共路由
    ...address, //地址 es6语法
    ...order,// 订单
]

//解决多次点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //解决跳转页面后没有置顶的问题(前一个页面滚动条会被继承到下一个页面,滚动条全局继承)
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },

})

export default router
