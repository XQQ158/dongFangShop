<template>
    <div>
        <div class="head"></div>
        <div class="content">
            <div class="left" ref="left">
                <ul>
                    <li v-for="(item,index) in left" :class="{current:index == currentIndex}" @click="selectItem(index,$event)" :key="index">
                        <span>{{item}}</span>
                    </li>
                </ul>
            </div>
            <div class="right" ref="right">
                <!-- 滑动的部分是ul,因为是在right的内层滑动,不然全是div,不知道从哪个标签开始 -->
                <ul>
                    <!-- <div class="myimg">
                        <img src="../../assets/img/fentop.jpg" alt="">
                    </div> -->
                    <div v-for="(item,index) in right" :key="index"  class="right-item-hook" >
                        <div class="title">{{item.title}}</div>
                        <!-- ul在滑动,必须加上 -->
                        <ul>
                            <div class="box" @click="$router.push('/cart')">
                                <div v-for="(value,index) in item.content" :key="index" class="cont" >
                                    <div class="img" >
                                        <img :src="value.imgs" alt="">
                                    </div>
                                    <div class="names">{{value.names}}</div>
                                </div>
                            </div>
                        </ul>
                    </div> 
                </ul> 
            </div>
        </div>
    </div>
</template>

<script>
    // npm install @better-scroll/core@next --save
    // 单独引入js文件
    import BScroll from '@better-scroll/core'

    export default {
            data(){
                return {  
                    
                    msg:'欢迎来到vue.js学习',
                    left:["手机","智能","众筹","电视","电脑","电脑配件","小爱智能","智能穿戴","生活电器","厨房电器","智能家居","车载出行","数码配件","个护健康"],
                    right:[
                        {   
                            title:"手机",
                            content:[
                                {imgs:require("../../assets/img/phone1.png"),names:"10X 4G"},
                                {imgs:require("../../assets/img/phone2.png"),names:"10X 5G系列"},
                                {imgs:require("../../assets/img/phone3.png"),names:"小米10 青春"},
                                {imgs:require("../../assets/img/phone4.png"),names:"K30 Pro 变焦版"},
                                {imgs:require("../../assets/img/phone5.png"),names:"K30 Pro"},
                                {imgs:require("../../assets/img/phone6.png"),names:"黑鲨手机3"},
                                {imgs:require("../../assets/img/phone1.png"),names:"10X 4G"},
                                {imgs:require("../../assets/img/phone2.png"),names:"10X 5G系列"},
                                {imgs:require("../../assets/img/phone3.png"),names:"小米10 青春"},
                                {imgs:require("../../assets/img/phone4.png"),names:"K30 Pro 变焦版"},
                                {imgs:require("../../assets/img/phone5.png"),names:"K30 Pro"},
                                {imgs:require("../../assets/img/phone6.png"),names:"黑鲨手机3"}
                            ]
                        },
                        {   
                            title:"智能",
                            content:[
                                {imgs:require("../../assets/img/intelligent1.png"),names:"手表Color"},
                                {imgs:require("../../assets/img/intelligent2.png"),names:"小米手表"},
                                {imgs:require("../../assets/img/intelligent3.png"),names:"移动电源3"},
                                {imgs:require("../../assets/img/intelligent4.png"),names:"米家电子体温计"},
                                {imgs:require("../../assets/img/intelligent5.png"),names:"路由器AX3600"},
                                {imgs:require("../../assets/img/intelligent6.png"),names:"加湿器"},
                                {imgs:require("../../assets/img/intelligent1.png"),names:"手表Color"},
                                {imgs:require("../../assets/img/intelligent2.png"),names:"小米手表"},
                                {imgs:require("../../assets/img/intelligent3.png"),names:"移动电源3"},
                                {imgs:require("../../assets/img/intelligent4.png"),names:"米家电子体温计"},
                                {imgs:require("../../assets/img/intelligent5.png"),names:"路由器AX3600"},
                                {imgs:require("../../assets/img/intelligent6.png"),names:"加湿器"}
                            ]
                        },
                        {   
                            title:"众筹",
                            content:[
                                {imgs:require("../../assets/img/Crowdfunding1.png"),names:"智能门锁 E"},
                                {imgs:require("../../assets/img/Crowdfunding2.png"),names:"超级电池"},
                                {imgs:require("../../assets/img/Crowdfunding3.png"),names:"龙头净水器"},
                                {imgs:require("../../assets/img/Crowdfunding4.png"),names:"挂烫机"},
                                {imgs:require("../../assets/img/Crowdfunding5.png"),names:"塔扇"},
                                {imgs:require("../../assets/img/Crowdfunding6.png"),names:"插线板"},
                                {imgs:require("../../assets/img/Crowdfunding1.png"),names:"智能门锁 E"},
                                {imgs:require("../../assets/img/Crowdfunding2.png"),names:"超级电池"},
                                {imgs:require("../../assets/img/Crowdfunding3.png"),names:"龙头净水器"},
                                {imgs:require("../../assets/img/Crowdfunding4.png"),names:"挂烫机"},
                                {imgs:require("../../assets/img/Crowdfunding5.png"),names:"塔扇"},
                                {imgs:require("../../assets/img/Crowdfunding6.png"),names:"插线板"}
                            ]
                        },
                        {   
                            title:"电视",
                            content:[
                                {imgs:require("../../assets/img/TV1.png"),names:"32-40英寸"},
                                {imgs:require("../../assets/img/TV2.png"),names:"43英寸"},
                                {imgs:require("../../assets/img/TV3.png"),names:"49-50英寸"},
                                {imgs:require("../../assets/img/TV4.png"),names:"55-60英寸"},
                                {imgs:require("../../assets/img/TV5.png"),names:"65-98英寸"},
                                {imgs:require("../../assets/img/TV6.png"),names:"激光投影电视"},
                                {imgs:require("../../assets/img/TV1.png"),names:"32-40英寸"},
                                {imgs:require("../../assets/img/TV2.png"),names:"43英寸"},
                                {imgs:require("../../assets/img/TV3.png"),names:"49-50英寸"},
                                {imgs:require("../../assets/img/TV4.png"),names:"55-60英寸"},
                                {imgs:require("../../assets/img/TV5.png"),names:"65-98英寸"},
                                {imgs:require("../../assets/img/TV6.png"),names:"激光投影电视"}
                            ]
                        },
                        {   
                            title:"电脑",
                            content:[
                                {imgs:require("../../assets/img/comp1.png"),names:"Air 12.5"},
                                {imgs:require("../../assets/img/comp2.png"),names:"Air 13.3"},
                                {imgs:require("../../assets/img/comp3.png"),names:"RedmiBook 13"},
                                {imgs:require("../../assets/img/comp4.png"),names:"RedmiBook 14"},
                                {imgs:require("../../assets/img/comp5.png"),names:"15.6"},
                                {imgs:require("../../assets/img/comp6.png"),names:"Pro 15.6"},
                                {imgs:require("../../assets/img/comp1.png"),names:"Air 12.5"},
                                {imgs:require("../../assets/img/comp2.png"),names:"Air 13.3"},
                                {imgs:require("../../assets/img/comp3.png"),names:"RedmiBook 13"},
                                {imgs:require("../../assets/img/comp4.png"),names:"RedmiBook 14"},
                                {imgs:require("../../assets/img/comp5.png"),names:"15.6"},
                                {imgs:require("../../assets/img/comp6.png"),names:"Pro 15.6"}
                            ]
                        },
                        {   
                            title:"电脑配件",
                            content:[
                                {imgs:require("../../assets/img/comAcc1.png"),names:"键鼠套装"},
                                {imgs:require("../../assets/img/comAcc2.png"),names:"鼠标"},
                                {imgs:require("../../assets/img/comAcc3.png"),names:"双肩包"},
                                {imgs:require("../../assets/img/comAcc4.png"),names:"存储"},
                                {imgs:require("../../assets/img/comAcc5.png"),names:"转换线"},
                                {imgs:require("../../assets/img/comAcc6.png"),names:"内胆包"},
                                {imgs:require("../../assets/img/comAcc1.png"),names:"键鼠套装"},
                                {imgs:require("../../assets/img/comAcc2.png"),names:"鼠标"},
                                {imgs:require("../../assets/img/comAcc3.png"),names:"双肩包"},
                                {imgs:require("../../assets/img/comAcc4.png"),names:"存储"},
                                {imgs:require("../../assets/img/comAcc5.png"),names:"转换线"},
                                {imgs:require("../../assets/img/comAcc6.png"),names:"内胆包"}
                            ]
                        },
                        {   
                            title:"小爱智能",
                            content:[
                                {imgs:require("../../assets/img/XiaoaiSmart1.png"),names:"小爱音箱Art"},
                                {imgs:require("../../assets/img/XiaoaiSmart2.png"),names:"小爱音箱"},
                                {imgs:require("../../assets/img/XiaoaiSmart3.png"),names:"小爱音箱Pro"},
                                {imgs:require("../../assets/img/XiaoaiSmart4.png"),names:"小爱老师"},
                                {imgs:require("../../assets/img/XiaoaiSmart5.png"),names:"小爱音箱Play"},
                                {imgs:require("../../assets/img/XiaoaiSmart6.png"),names:"小米AI音箱"},
                                {imgs:require("../../assets/img/XiaoaiSmart1.png"),names:"小爱音箱Art"},
                                {imgs:require("../../assets/img/XiaoaiSmart2.png"),names:"小爱音箱"},
                                {imgs:require("../../assets/img/XiaoaiSmart3.png"),names:"小爱音箱Pro"},
                                {imgs:require("../../assets/img/XiaoaiSmart4.png"),names:"小爱老师"},
                                {imgs:require("../../assets/img/XiaoaiSmart5.png"),names:"小爱音箱Play"},
                                {imgs:require("../../assets/img/XiaoaiSmart6.png"),names:"小米AI音箱"}
                            ]
                        },
                        {   
                            title:"智能穿戴",
                            content:[
                                {imgs:require("../../assets/img/smartWear1.png"),names:"智能手环"},
                                {imgs:require("../../assets/img/smartWear2.png"),names:"智能手表"},
                                {imgs:require("../../assets/img/smartWear3.png"),names:"VR眼镜"},
                                {imgs:require("../../assets/img/smartWear4.png"),names:"头戴影院"},
                                {imgs:require("../../assets/img/smartWear5.png"),names:"石英表"},
                                {imgs:require("../../assets/img/smartWear6.png"),names:"儿童手表"},
                                {imgs:require("../../assets/img/smartWear1.png"),names:"智能手环"},
                                {imgs:require("../../assets/img/smartWear2.png"),names:"智能手表"},
                                {imgs:require("../../assets/img/smartWear3.png"),names:"VR眼镜"},
                                {imgs:require("../../assets/img/smartWear4.png"),names:"头戴影院"},
                                {imgs:require("../../assets/img/smartWear5.png"),names:"石英表"},
                                {imgs:require("../../assets/img/smartWear6.png"),names:"儿童手表"}
                            ]
                        },
                        {   
                            title:"生活电器",
                            content:[
                                {imgs:require("../../assets/img/homeDevices1.png"),names:"空气净化器"},
                                {imgs:require("../../assets/img/homeDevices2.png"),names:"扫地机"},
                                {imgs:require("../../assets/img/homeDevices3.png"),names:"吸尘器"},
                                {imgs:require("../../assets/img/homeDevices4.png"),names:"新风机"},
                                {imgs:require("../../assets/img/homeDevices5.png"),names:"电风扇"},
                                {imgs:require("../../assets/img/homeDevices6.png"),names:"晾衣机"},
                                {imgs:require("../../assets/img/homeDevices1.png"),names:"空气净化器"},
                                {imgs:require("../../assets/img/homeDevices2.png"),names:"扫地机"},
                                {imgs:require("../../assets/img/homeDevices3.png"),names:"吸尘器"},
                                {imgs:require("../../assets/img/homeDevices4.png"),names:"新风机"},
                                {imgs:require("../../assets/img/homeDevices5.png"),names:"电风扇"},
                                {imgs:require("../../assets/img/homeDevices6.png"),names:"晾衣机"}
                            ]
                        },
                        {   
                            title:"厨房电器",
                            content:[
                                {imgs:require("../../assets/img/Kitchen1.png"),names:"净水器"},
                                {imgs:require("../../assets/img/Kitchen2.png"),names:"洗碗机"},
                                {imgs:require("../../assets/img/Kitchen3.png"),names:"电饭煲"},
                                {imgs:require("../../assets/img/Kitchen4.png"),names:"烟机灶具"},
                                {imgs:require("../../assets/img/Kitchen5.png"),names:"电磁炉"},
                                {imgs:require("../../assets/img/Kitchen6.png"),names:"电压力锅"},
                                {imgs:require("../../assets/img/Kitchen1.png"),names:"净水器"},
                                {imgs:require("../../assets/img/Kitchen2.png"),names:"洗碗机"},
                                {imgs:require("../../assets/img/Kitchen3.png"),names:"电饭煲"},
                                {imgs:require("../../assets/img/Kitchen4.png"),names:"烟机灶具"},
                                {imgs:require("../../assets/img/Kitchen5.png"),names:"电磁炉"},
                                {imgs:require("../../assets/img/Kitchen6.png"),names:"电压力锅"}
                            ]
                        },
                        {   
                            title:"智能家居",
                            content:[
                                {imgs:require("../../assets/img/Smarthome1.png"),names:"智能门锁"},
                                {imgs:require("../../assets/img/Smarthome2.png"),names:"智能猫眼"},
                                {imgs:require("../../assets/img/Smarthome3.png"),names:"摄像机"},
                                {imgs:require("../../assets/img/Smarthome4.png"),names:"打印机"},
                                {imgs:require("../../assets/img/Smarthome5.png"),names:"智能门铃"},
                                {imgs:require("../../assets/img/Smarthome6.png"),names:"传感器"},
                                {imgs:require("../../assets/img/Smarthome1.png"),names:"智能门锁"},
                                {imgs:require("../../assets/img/Smarthome2.png"),names:"智能猫眼"},
                                {imgs:require("../../assets/img/Smarthome3.png"),names:"摄像机"},
                                {imgs:require("../../assets/img/Smarthome4.png"),names:"打印机"},
                                {imgs:require("../../assets/img/Smarthome5.png"),names:"智能门铃"},
                                {imgs:require("../../assets/img/Smarthome6.png"),names:"传感器"}
                            ]
                        },
                        {   
                            title:"车载出行",
                            content:[
                                {imgs:require("../../assets/img/car1.png"),names:"助力车"},
                                {imgs:require("../../assets/img/car2.png"),names:"平衡车"},
                                {imgs:require("../../assets/img/car3.png"),names:"滑板车"},
                                {imgs:require("../../assets/img/car4.png"),names:"对讲机"},
                                {imgs:require("../../assets/img/car5.png"),names:"充气宝"},
                                {imgs:require("../../assets/img/car6.png"),names:"卡丁车套件"},
                                {imgs:require("../../assets/img/car1.png"),names:"助力车"},
                                {imgs:require("../../assets/img/car2.png"),names:"平衡车"},
                                {imgs:require("../../assets/img/car3.png"),names:"滑板车"},
                                {imgs:require("../../assets/img/car4.png"),names:"对讲机"},
                                {imgs:require("../../assets/img/car5.png"),names:"充气宝"},
                                {imgs:require("../../assets/img/car6.png"),names:"卡丁车套件"}
                            ]
                        },
                        {   
                            title:"数码配件",
                            content:[
                                {imgs:require("../../assets/img/Digital1.png"),names:"移动电源"},
                                {imgs:require("../../assets/img/Digital2.png"),names:"无线充"},
                                {imgs:require("../../assets/img/Digital3.png"),names:"充电器"},
                                {imgs:require("../../assets/img/Digital4.png"),names:"车充"},
                                {imgs:require("../../assets/img/Digital5.png"),names:"数据线"},
                                {imgs:require("../../assets/img/Digital6.png"),names:"自拍杆"},
                                {imgs:require("../../assets/img/Digital1.png"),names:"移动电源"},
                                {imgs:require("../../assets/img/Digital2.png"),names:"无线充"},
                                {imgs:require("../../assets/img/Digital3.png"),names:"充电器"},
                                {imgs:require("../../assets/img/Digital4.png"),names:"车充"},
                                {imgs:require("../../assets/img/Digital5.png"),names:"数据线"},
                                {imgs:require("../../assets/img/Digital6.png"),names:"自拍杆"}
                            ]
                        },
                        {   
                            title:"个护健康",
                            content:[
                                {imgs:require("../../assets/img/Health1.png"),names:"电动牙刷"},
                                {imgs:require("../../assets/img/Health2.png"),names:"剃须刀"},
                                {imgs:require("../../assets/img/Health3.png"),names:"吹风机"},
                                {imgs:require("../../assets/img/Health4.png"),names:"洁面机"},
                                {imgs:require("../../assets/img/Health5.png"),names:"香氛机"},
                                {imgs:require("../../assets/img/Health6.png"),names:"毛巾浴巾"},
                                {imgs:require("../../assets/img/Health1.png"),names:"电动牙刷"},
                                {imgs:require("../../assets/img/Health2.png"),names:"剃须刀"},
                                {imgs:require("../../assets/img/Health3.png"),names:"吹风机"},
                                {imgs:require("../../assets/img/Health4.png"),names:"洁面机"},
                                {imgs:require("../../assets/img/Health5.png"),names:"香氛机"},
                                {imgs:require("../../assets/img/Health6.png"),names:"毛巾浴巾"}
                            ]
                        },
                    
                    ],
                    listHeight:[],//记录高度
                    scrollY:0
                }
            },
            // props:["left","right"],
            methods: {
                _initScroll(){
                    // 左边联动效果
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 右边联动效果
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件
                        probeType:3 //滚动位置探针效果
                    })
                    // 获取滚动效果高度
                    this.rights.on("scroll",this.onScrollfun)

                },

                onScrollfun(pos){
                    // console.log(pos.y);
                    this.scrollY =  Math.abs(Math.round(pos.y));//滚动条y轴
                        
                },
                // 获取高度
                _getHeight(){
                    // 获取每个类对象
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0; //设置默认高度
                    this.listHeight.push(height);
                    // 循环对象获取各自到顶部高度
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; //对象高度
                        this.listHeight.push(height);
                    }

                },
                // 左侧点击效果
                selectItem(index,event){
                    // 当原生浏览器点击事件监听_constructed,把当时浏览器监听属性return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];//通过下标获取对象
                        // 通过滚动事件指定目标元素
                        this.rights.scrollToElement(el);

                        // this.currentIndex = index; //左侧效果
                    }
                    
                }   ,
            },
            // 生命周期函数。目的让vue代码执行解释后，实例化第三方插件
            mounted() {
                // 能在虚拟DOM执行完后，在回调方法
                this.$nextTick(()=>{
                    this._initScroll(); //调用滚动效果
                    this._getHeight();//获取右边列表内容高度
                })
            },
            // 组件销毁前阻止滚动事件
            beforeDestroy(){
                this.rights.off("scroll",this.onScrollfun)
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0;i <this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        
                        // 判断高度之间为当前左选项变化
                        if(!height2 || (this.scrollY >= height && this.scrollY < height2)){
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLI = leftItems[i];
                            this.lefts.scrollToElement(elLI);
                            return i;
                        }

                    }
                    // 如果没有高度值，默认为0，第一位
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
        ul{
            list-style: none;
        }
        .head{
            width: 100%;
            height: 50px;
            line-height: 50px;
            text-align: center;
        }
        .content{
            display: flex;
            position: absolute;
            /* 定位里面不写左右样式，不写高度，自动获取高度 */
            top:46px;
            bottom: 50px;
            width: 100%;
            overflow: hidden;
        }
        .left{
            flex: 0 0 80px;
            width: 80px;
            border-right: 1px solid #efefef;
            background: #fefefe;
        }
        .left li{
            width: 100%;
            height: 100%;
        }
        .left li.current{
            color:#fb7d34;
        }
        .left li span{
            display: block;
            width: 100%;
            height: 4rem;
            line-height: 4rem;
            text-align: center;
            font-size: 1rem;
        }
        .right-item-hook{
            width: 100%;
            background: #fff;
            .title{
                height: 2.5rem;
                text-align: center;
                font-size: 1.2rem;
                line-height: 2.5rem;
            }
            .box{
                width: 100%;
                overflow: hidden;
                .cont{ 
                    float: left;
                    width: 33.3%;
                    text-align: center;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                    overflow: hidden;
                    .img{
                        width: 4rem;
                        height: 4rem;
                        margin: 0 auto;
                        background: #fff;
                        overflow: hidden;
                    }
                    .names{
                        margin-top: .28rem;
                        font-size: .23rem;
                        color: rgba(0,0,0,.54);
                    }     
                }
            }
        }
        .bottom{
                width: 100%;
                height: 600px;
        }
</style>