<template>
    <div>
        <add-todo @addTodo="addTodo"></add-todo>
        <list :listData="filterListData"></list>
        <todo-filter :curShowtype="showType" @setShowType="SET_SHOW_TYPE"></todo-filter>
    </div>
</template>

<script>
    //引入组件
    import addTodo from "./addToDo.vue";
    import list from "./list.vue";
    import todoFilter from "./filter.vue";
    //引入vuex提供的辅助函数(加快编写效率)
    import { mapState, mapGetters , mapMutations } from "vuex";
    //获取事件类型常量
    import { ADD_TODO , SWITCH_DONE, SET_SHOW_TYPE } from "../../store/type"
    
    export default {
        name:"todoList_wrap",
        components:{
            addTodo,
            list,
            todoFilter,
        },
        computed:{
            //store进行了module化，所以mapState的数组写法不适用
            ...mapState({
                listData: state => state.todoList.listData,
                showType: state => state.todoList.showType
            }),
            //获取过滤过后的数据
            ...mapGetters(["filterListData"])
        },
        methods:{
            addTodo(inuptTodo){
                this.ADD_TODO(inuptTodo)
            },
            //相当于将this.ADD_TODO()映射为this.$store.commit("ADD_TODO")
            //如果不使用事件类型常量的话，直接mapMutations即可(this.addTodo()),不用再重新声明一个addTodo执行this.ADD_TODO，当然，在template中绑定ADD_TODO也可以
            ...mapMutations([ADD_TODO, SET_SHOW_TYPE])
        }
    }
    
</script>

<style>
    
</style>
