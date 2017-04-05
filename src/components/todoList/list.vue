<template>
    <ul>
        <li v-for="item in listData" :class="{done:item.done}" @click="switchDone(item)">{{item.content}}</li>
    </ul>
</template>

<script>
export default {
    methods:{
        switchDone(item){
            item.done = !item.done;
        }
    },
    props:["listData"]
}

</script>

<style>
    
</style>
