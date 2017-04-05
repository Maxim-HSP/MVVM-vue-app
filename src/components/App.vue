<template>
   <div>
    <h3>todoList测试1</h3>
    <hr>
    <div class="wrap">
        <add-todo @addTodo="addTodo"></add-todo>
        <list :listData="dataFilter()"></list>
        <todo-filter :curShowtype="showType" @setShowType="setShowType"></todo-filter>
    </div>
    <hr>
    <h3>EMP SPA(vue-router)</h3>
    <hr>
    <div class="wrap">
        <!--router-view组件作用类似于react的this.props.children,用来加载单页子组件位置-->
        <router-view></router-view>
    </div>
    <hr>
    <h3>vuex的使用</h3>
    <hr>
    <a href="../src/vuex_app/BasicTest/vuex_test.html">载入基础练习实例</a>
    <a href="../src/vuex_app/vuex.html">载入模块化后实例</a>
   </div>
</template>

<script>
//---todoList---
import addTodo from "./todoList/addToDo.vue";
import list from "./todoList/list.vue";
import todoFilter from "./todoList/filter.vue";
//---EMP SPA---
//使用vue-router(在作为项目入口的main.js中引入配置好的router.js注入Vue实例)，在router.js文件中引入vue-router配置路径和模块。在组件中使用router-view组件，在template中渲染，类似于react的this.props.children


export default {
    name: 'vue_test1',
	//注册组件（注意写在template中时要从驼峰命名变为连接符命名才能识别）
    components:{
        addTodo,
        list,
        todoFilter,
    },
    data () {
        return {
            listData:[
                {
                    content:"备忘1",
                    done:false
                },{
                    content:"备忘2",
                    done:true
                },{
                    content:"备忘3",
                    done:false
                },{
                    content:"备忘4",
                    done:false
                }
            ],
            showType:"all",
        }
    },
    methods:{
        addTodo(inuptTodo){
            this.listData.push({
                content:inuptTodo,
                done:false
            })
        },
        setShowType(showType){
            this.showType = showType;
        },
        dataFilter(){
            switch(this.showType){
                case "all":
                    return this.listData;
                case "done":
                    return this.listData.filter((item)=>item.done);
                case "active":
                    return this.listData.filter((item)=>!item.done)
            }
        }
    }
}
</script>

<style>
    .wrap{
        border: 1px solid skyblue;
        padding: 5px;
    }
    .done{
        color: skyblue;
        text-decoration: line-through;
    }
</style>
