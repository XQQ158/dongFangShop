// 首页
export default {
    path:'/home',
    name:"首页",
    component:()=>import("../../views/home.vue"),
    redirect: "/home/recommend",
    children:[
        {
            path:"recommend",
            name:"推荐",
            component:()=>import("../../components/home/recommend.vue")
        },
        {
            path:"phone",
            name:"手机",
            component:()=>import("../../components/home/phone.vue")
        },
        {
            path:"intelligence",
            name:"智能",
            component:()=>import("../../components/home/intelligence.vue")
        },
        {
            path:"televisions",
            name:"电视",
            component:()=>import("../../components/home/televisions.vue")
        },
        {
            path:"notebook",
            name:"笔记本",
            component:()=>import("../../components/home/notebook.vue")
        },
        {
            path:"electricity",
            name:"家电",
            component:()=>import("../../components/home/electricity.vue")
        },
        {
            path:"newtelevisions",
            name:"新电视",
            component:()=>import("../../components/home/newtelevisions.vue")
        },
        {
            path:"newnotebook",
            name:"新笔记本",
            component:()=>import("../../components/home/newnotebook.vue")
        },
        {
            path:"newelectricity",
            name:"新家电",
            component:()=>import("../../components/home/newelectricity.vue")
        },
    ]
}