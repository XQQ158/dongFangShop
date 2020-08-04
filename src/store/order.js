export default {
    namespaced:true,//命名空间
    state:{
        lists:[
            // 订单完整性，不可修改
            // {
            //     orderId:"1536423764527635472",//订单固定id
            //     address:{  //地址

            //     },
            //     goodslist:[ //商品列表

            //     ],
            //     type:1, //状态 1 待支付 2 待收货 3 已完成
            //     isRead:false, //评分星星是否只读
            //     value: 1, //评分星星个数
            //     showStar:false, //是否显示评分星星
            //     isChange:false, //是否已评分
            // },
        ],
        typeList:["全部订单","待支付","待收货","已完成"]
    },
    mutations:{
        //添加订单
        add(state,obj){
            state.lists.unshift(obj);
        },
        //删除订单
        delete(state,orderId){
            var index = state.lists.findIndex(item=>item.orderId == orderId);
            state.lists.splice(index,1)
        },
        //修改商品类型
        editType(state,obj){
            var {orderId,typenum} = obj;
            console.log("传进store里面的orderId"+orderId)
            console.log("传进store里面的typenum"+typenum)
            var index = state.lists.findIndex(item=>item.orderId == orderId);
            console.log("store里面的index"+index)
            state.lists[index].type = typenum;
            console.log("state.lists[index].type"+state.lists[index].type)
        },
        //修改评分星星值
        editStar(state,obj){
            console.log("editStar传进来的obj"+obj)
            var {orderId,starValue} = obj;
            console.log("editStar传进来的starValue"+starValue)
            var index = state.lists.findIndex(item=>item.orderId == orderId);
            state.lists[index].value = starValue;
            console.log("改变后的starValue"+state.lists[index].value)
        },
        //评分后设置只读,没有评分就还可以评价
        editRead(state){
            for(var i =0;i < state.lists.length;i++){ 
                if(state.lists[i].isChange){
                    state.lists[i].isRead = true;
                }
            }
        },
        //已经评分过的就显示出来,没有评分的要点击商品评价才显示
        editshowStar(state){
            for(var i =0;i < state.lists.length;i++){ 
                if(state.lists[i].isChange == false){
                    state.lists[i].showStar = false;
                }
            }
        },
        //显示评分
        showStarFun(state,obj){
            var {orderId,show} = obj;
            var index = state.lists.findIndex(item=>item.orderId == orderId);
            state.lists[index].showStar = show;
        },
        //设置为只读
        showIsChange(state,obj){
            var {orderId,show} = obj;
            var index = state.lists.findIndex(item=>item.orderId == orderId);
            state.lists[index].isChange = show;
        }
    },
    actions:{}
}