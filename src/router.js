import Vue from "vue";
import Router from "vue-router";

import Login from "./pages/Login.vue"
import Framework from "@/pages/Frame/Framework";

import Student from './pages/Frame/Student'

import MyDormInfo from "@/pages/Student/MyDormInfo"
import NearbyDormInfo from "@/pages/Student/NearbyDormInfo";
import RepairInfo from "@/pages/Student/RepairInfo";
import BillInfo from "@/pages/Student/BillInfo";
import VisitorReg from "@/pages/Student/VisitorReg";
import RepairReg from "@/pages/Student/RepairReg";
import PropertyReg from "@/pages/Student/PropertyReg";
import MyInfo from "@/pages/MyInfo";

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
            path: "/framework",
            component: Framework,
            children: [
                {
                    path: "/student",
                    components: {
                        aside: Student,
                    },
                    meta: {
                        title: "宿舍管理系统-学生",
                        requireAuth: true
                    },
                    children: [
                        {path: "my-dorm", component: MyDormInfo, meta: {title: "本宿舍信息"}},
                        {path: "nearby-dorm", component: NearbyDormInfo, meta: {title: "本楼宿舍信息"}},
                        {path: "repair", component: RepairInfo, meta: {title: "报修查询"}},
                        {path: "bill", component: BillInfo, meta: {title: "水电查询"}},
                        {path: "repair-reg", component: RepairReg, meta: {title: "报修登记"}},
                        {path: "visitor", component: VisitorReg, meta: {title: "访客登记"}},
                        {path: "property", component: PropertyReg, meta: {title: "出入物品登记"}},
                        {path: "my-info", component: MyInfo, meta: {title: "个人信息"}}
                    ]
                }
            ]
        }
    ],
    mode: "history"
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth === true && window.sessionStorage.getItem("username") === undefined) {
        next("/login")
    }

    if (to.meta.title) {
        document.title = to.meta.title
    }

    if (to.matched.length === 0) {
        from.name ? next({name: from.name}) : next('/login');
    } else {
        next();
    }
})

export default router