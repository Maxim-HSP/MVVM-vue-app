import Vue from 'vue'
import Vuex from "vuex"
//获取根级别的action,mutations等(大型或复杂项目中将action等独立到一个文件中)
import {actions} from "./actions.js"
import {mutations} from "./mutations.js"
//获取到各模块store(各模块都拥有自己的局部状态，可以单独定义action和state等)
import todoList from "./modules/todoList_store.js"
import EMP from "./modules/EMP_store.js"

//启用Vuex
Vue.use(Vuex)

//根store(合并的store)
//在各局部模块中，getter和mutation的第一个参数是局部state，第三参数是rootstate,即根store的state。同时，action可以通过context.rootState获取到根级别state  
//而在各vue组件中，访问各store模块需要使用"this.$store.state.模块名"访问相应的state，这也意味着map辅助函数的数组写法不适用于module化的store(因为map函数数组写法默认访问的是this.$store.state)，而应该改成"mapState({data:state=>state.模块名.data})"
export const store = new Vuex.Store({
    actions,
    mutations,
	modules: {
		todoList,
        EMP
	}
})