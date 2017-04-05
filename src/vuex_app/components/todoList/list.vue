<template>
    <ul>
        <li v-for="item in listData" :class="{done:item.done}" @click="switchDone(item)">{{item.content}}</li>
    </ul>
</template>

<script>
export default {
    methods:{
        switchDone(item){
            //址传递对store也是有效果的(因为这里获取的数据是wrap.js通过computed属性在store中的todoList局部state中的listData，又通过vue组件props继承传递过来的)。
            //当然，这里也可以使用todoList_store模块中定义的mutation或者action进行state更新，效果一样。
            
            //this.$store.commit("SWITCH_DONE",item)
            item.done = !item.done;
            console.log(this.$store.state.todoList.listData)
        }
    },
    props:["listData"]
}

</script>

<style>
    
</style>
