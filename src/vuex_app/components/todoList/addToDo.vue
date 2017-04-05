<template>
   <div>
       <input v-model="inuptTodo" type="text" placeholder="请输入">
       <input @click="addTodo" type="button" value="add">
   </div>
</template>

<script>
export default {
  data () {
    return {
        inuptTodo:""
    }
  },
    methods:{
        addTodo(){
            this.$emit("addTodo",this.inuptTodo);
            this.inuptTodo = ""
        }
    }
}
</script>

<style>

</style>
