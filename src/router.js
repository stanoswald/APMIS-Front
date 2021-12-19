import Vue from "vue";
import Router from "vue-router";

import Login from "./pages/Login.vue"
import Framework from "@/pages/Frame/Framework";
import MyInfo from "@/pages/MyInfo";
import PwdSetting from "@/pages/PwdSetting";

import Student from './pages/Frame/Student'

import MyDormInfo from "@/pages/Student/MyDormInfo"
import NearbyDormInfo from "@/pages/Student/NearbyDormInfo";
import RepairInfo from "@/pages/Student/RepairInfo";
import BillInfo from "@/pages/Student/BillInfo";
import VisitorReg from "@/pages/Student/VisitorReg";
import RepairReg from "@/pages/Student/RepairReg";
import PropertyReg from "@/pages/Student/PropertyReg";


import Manager from "@/pages/Frame/Manager";

import DormInfo from "@/pages/Manager/DormInfo";
import CheckRepair from "@/pages/Manager/CheckRepair";
import StuInfo from "@/pages/Manager/StuInfo";
import PropertyInfo from "@/pages/Manager/PropertyInfo";
import PropertyRegMgmt from "@/pages/Manager/PropertyRegMgmt";
import VisitorRegMgmt from "@/pages/Manager/VisitorRegMgmt";
import CheckBill from "@/pages/Manager/CheckBill";



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
                    component: Student,
                    meta: {
                        title: "宿舍管理系统-学生",
                        requireAuth: true,
                        authType: 'STUDENT'
                    },
                    children: [
                        {path: "my-dorm", component: MyDormInfo, meta: {title: "本宿舍信息",requireAuth: true,authType: 'STUDENT'}},
                        {path: "nearby-dorm", component: NearbyDormInfo, meta: {title: "本楼宿舍信息",requireAuth: true,authType: 'STUDENT'}},
                        {path: "repair", component: RepairInfo, meta: {title: "报修查询",requireAuth: true,authType: 'STUDENT'}},
                        {path: "bill", component: BillInfo, meta: {title: "水电查询",requireAuth: true,authType: 'STUDENT'}},
                        {path: "repair-reg", component: RepairReg, meta: {title: "报修登记",requireAuth: true,authType: 'STUDENT'}},
                        {path: "visitor", component: VisitorReg, meta: {title: "访客登记",requireAuth: true,authType: 'STUDENT'}},
                        {path: "property", component: PropertyReg, meta: {title: "出入物品登记",requireAuth: true,authType: 'STUDENT'}},
                        {path: "my-info", component: MyInfo, meta: {title: "个人信息",requireAuth: true,authType: 'STUDENT'}},
                        {path: "set-pwd", component: PwdSetting, meta: {title: "密码设置",requireAuth: true,authType: 'STUDENT'}}
                    ]
                },
                {
                    path: "/manager",
                    component: Manager,
                    meta: {
                        title: "宿舍管理系统-管理员",
                        requireAuth: true,
                        authType: 'MANAGER'
                    },
                    children: [
                        {path: "dorm-info", component: DormInfo, meta: {title: "宿舍信息",requireAuth: true,authType: 'MANAGER'}},
                        {path: "stu-info", component: StuInfo, meta: {title: "学生信息",requireAuth: true,authType: 'MANAGER'}},
                        {path: "property", component: PropertyInfo, meta: {title: "宿舍财产",requireAuth: true,authType: 'MANAGER'}},
                        {path: "bill", component: CheckBill, meta: {title: "水电信息",requireAuth: true,authType: 'MANAGER'}},
                        {path: "repair", component: CheckRepair, meta: {title: "报修信息",requireAuth: true,authType: 'MANAGER'}},
                        {path: "prop-reg", component: PropertyRegMgmt, meta: {title: "出入物品",requireAuth: true,authType: 'MANAGER'}},
                        {path: "vis-reg", component: VisitorRegMgmt, meta: {title: "访客登记",requireAuth: true,authType: 'MANAGER'}},
                        {path: "my-info", component: MyInfo, meta: {title: "个人信息",requireAuth: true,authType: 'MANAGER'}},
                        {path: "set-pwd", component: PwdSetting, meta: {title: "密码设置",requireAuth: true,authType: 'MANAGER'}}
                    ]
                }
            ]
        },
    ],
    mode: "history"
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth === true && window.sessionStorage.getItem("username") === undefined) {
        console.log("dnmd")
        next("/login")
    }

    if (to.meta.requireAuth === true &&
        to.meta.authType !== window.sessionStorage.getItem("role")) {

        alert("您暂无权限")
        if (from.path === "/") {
            console.log(from.path)
            sessionStorage.clear()
            next("/login")
        } else
            router.go(-1)
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