<template>
    <div>
        <h3>vuex 模块化实例</h3>
        <p>将根级别的action，mutations，getters，state分别独立到单个js文件中，同时进行store的模块化，将不同功能的store独立到modules中(并且每个模块store有自己的局部状态，即局部action，state等)，再在一个js文件中合并这些模块（并获取根级别的action等加入到根store）到一个根store中暴露，主要适用于大型及复杂项目</p>
        <hr>
        <router-link to="/vuex_todoList">todoList的vuex重构</router-link>
        &nbsp;&nbsp;&nbsp;
        <router-link to="/vuex_EMP/login">EMP SPA的vuex重构</router-link>
        <div class="wrap">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:"vuexApp"
    }
    
</script>

<style>
    .wrap{
        border: 1px solid skyblue;
        padding: 5px;
        margin-top: 10px;
    }
    .done{
        color: skyblue;
        text-decoration: line-through;
    }
</style>
