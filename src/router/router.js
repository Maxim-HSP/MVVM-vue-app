//载入必要依赖
import Vue from "vue"
import Router from "vue-router"
//载入各模块(组件)
import Login from "../components/EMP/login.vue"
import Reg from "../components/EMP/reg.vue"
import Info from "../components/EMP/info/info.vue"
import Staff from "../components/EMP/info/staff/staff.vue"
import Student from "../components/EMP/info/student/student.vue"
import EmpList from "../components/EMP/info/staff/staffList.vue"

//启动router
Vue.use(Router)

//路由主逻辑（暴露）(使用Router构造函数构建的对象)
export default new Router({
    //path为路径，component为相应的模块
    routes: [{
        path:"/",
        component: Login
    },{
        path:"/login",
        component: Login
    },{
        //“:”之后的变量在使用push方法时匹配，会往目标组件的"this.$route.params"中添加相应键值对(意味着可以在目标组件中获取)
        path:"/login/:username",
        component: Login
    },{
        path:"/reg",
        component: Reg
    },{
        path:"/info",
        component: Info,
        children: [{
            path:"staff",
            component: Staff,
            children:[{
                path: "empList",
                component: EmpList
            }]
        },{
            path:"student",
            component: Student
        }]
    }]
})