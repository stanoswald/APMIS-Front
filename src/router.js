import Vue from "vue";
import Router from "vue-router";

import Login from "./pages/Login.vue"

import Student from './pages/Frame/Student'
import Container from "@/pages/Frame/Container";

import MyDormInfo from "@/pages/Student/MyDormInfo"
import NearbyDormInfo from "@/pages/Student/NearbyDormInfo";
// import RepairInfo from "@/pages/Student/RepairInfo";
// import BillInfo from "@/pages/Student/BillInfo";
// import VisitorReg from "@/pages/Student/VisitorReg";
// import RepairReg from "@/pages/Student/RepairReg";
// import PropertyReg from "@/pages/Student/PropertyReg";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: "/login",
            component: Login,
            meta: {
                title: "登录"
            }
        },
        {
            path: "/container",
            component: Container,
            children: [
                {
                    path: "/student",
                    components: {
                        aside: Student,
                    },
                    meta: {
                        title: "学生"
                    },
                    children: [
                        {
                            path: "/student/my-dorm",
                            component: MyDormInfo
                        },
                        {
                            path: "/student/nearby-dorm",
                            component: NearbyDormInfo
                        },
                    ]
                }]
        }
    ],
    mode: "history"
})


// children: [
//     {path: "/student/my-dorm", component: MyDormInfo, meta: {title: "本宿舍信息"}},
//     {path: "/student/nearby-dorm", component: NearbyDormInfo, meta: {title: "本楼宿舍信息"}},
//     {path: "/student/repair", component: RepairInfo, meta: {title: "报修查询"}},
//     {path: "/student/bill", component: BillInfo, meta: {title: "水电查询"}},
//     {path: "/student/repair", component: RepairReg, meta: {title: "报修登记"}},
//     {path: "/student/visitor", component: VisitorReg, meta: {title: "访客登记"}},
//     {path: "/student/property", component: PropertyReg, meta: {title: "出入物品登记"}}
// ]

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router