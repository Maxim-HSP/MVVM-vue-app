<template>
    <div>
        <span>show:</span>
        <span v-if="curShowtype === 'all'">all</span>
        <a v-else @click="setShowType" href="">all</a>
        <span v-if="curShowtype === 'done'">done</span>
        <a v-else  @click="setShowType" href="#">done</a>
        <span v-if="curShowtype === 'active'">active</span>
        <a v-else @click="setShowType" href="#">active</a>
    </div>
</template>

<script>
export default {
    props:["curShowtype"],
    methods:{
        setShowType(e){
            e.preventDefault();
            this.$emit("setShowType",e.target.innerHTML)
        }
    }
}
</script>

<style>

</style>
