import Vue from "vue";
import Router from "vue-router";

import Login from "./pages/Login.vue"
import MyDormInfo from "@/pages/Student/MyDormInfo"
import NearbyDormInfo from "@/pages/Student/NearbyDormInfo";
import RepairInfo from "@/pages/Student/RepairInfo";
import BillInfo from "@/pages/Student/BillInfo";

import VisitorReg from "@/pages/Student/VisitorReg";
import RepairReg from "@/pages/Student/RepairReg";
import PropertyReg from "@/pages/Student/PropertyReg";

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
            path: "/query/my-dorm",
            component: MyDormInfo,
            meta: {
                title: "本宿舍信息"
            }
        },
        {
            path: "/query/nearby-dorm",
            component: NearbyDormInfo,
            meta: {
                title: "本楼宿舍信息"
            }
        },
        {
            path: "/query/repair",
            component: RepairInfo,
            meta: {
                title: "报修查询"
            }
        },
        {
            path: "/query/bill",
            component: BillInfo,
            meta: {
                title: "水电查询"
            }
        },
        {
            path: "/reg/repair",
            component: RepairReg,
            meta: {
                title: "报修登记"
            }
        },
        {
            path: "/reg/visitor",
            component: VisitorReg,
            meta: {
                title: "访客登记"
            }
        },
        {
            path: "/reg/property",
            component: PropertyReg,
            meta: {
                title: "出入物品登记"
            }
        }
    ],
    mode: "history"
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router