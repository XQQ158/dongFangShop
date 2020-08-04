import Vue from "vue";
export default {
    namespaced:true,//命名空间
    state:{
        lists:[],//购物车数据列表
        // total: 0//商品数量
    },
    mutations:{
        add(state,obj){
            // 加入购物车，把数据添加lists购物车列表
            // 1.判断如果没有数据添加数据，购物车中存在数据，数据加一
            // 获取数据中id
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index != "-1"){ //存在，数量加一
                state.lists[index].num += 1;
                // obj.num++;//结果是NAN,因为页面刷新后传进来的obj中没有num属性,只不过之前已经在lists中了
                
            }else{ //不存在添加数据
                obj.isSelect = true; //默认选中
                // obj.num=1;  //数据无法显示
                Vue.set(obj,"num",1); // 让新增的属性有数据绑定,一添加数据就可以显示出来
                state.lists.push(obj);
            }
        },
        buyNow(state,obj){
            // 立即购买,判断如果没有该商品则添加,有则直接到购物车页面
            let index = state.lists.findIndex(val => val.id == obj.id);
            if(index == "-1"){ 
                //不存在添加数据
                obj.isSelect = true; //默认选中
                Vue.set(obj,"num",1); 
                state.lists.push(obj);   
            }
        },
        edit(state,obj){
            Object.assign(state.lists,obj);
        }
    },
    getters:{
        totalCount(state){
            // state.total = state.lists.reduce((total,item)=>{
            //     return total+item.num;
            // },0); //计算购物车商品总数量

            return state.lists.reduce((total,item)=>total+item.num,0)//购物车商品总数量到详情页
        }  
    },
    actions:{}
}