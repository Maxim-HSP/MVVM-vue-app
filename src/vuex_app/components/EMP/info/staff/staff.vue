<template>
    <div class="staffNav">
        <ul :style="{marginRight:'20px'}">
			<li><router-link to="/vuex_EMP/info/staff/addEmp">新增员工</router-link></li>
			<li><router-link to="/vuex_EMP/info/staff/empList">员工列表</router-link></li>
		</ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"staffModel"
    }
</script>

<style>
    .staffNav{
        display: flex
    }
</style>