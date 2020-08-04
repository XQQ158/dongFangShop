export default {
    namespaced:true,//命名空间
    state:{
        showPay : false
    },
    mutations:{
        setShowPay(state,data){
            state.showPay = data
        }
    },
    actions:{}
}