<template>
    <div>
       <h4>登录模块</h4>
        <p>账户: <input v-model="username" type="text"/></p>
        <p>密码: <input v-model="password" type="text"/><span v-if="isLoginFailed" :style="{color:'red'}">登录失败，账号验证不通过，请先注册</span></p>
        <p>
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="登录" @click="LoginFn">
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="注册" @click="regFn">
        </p>
    </div>
</template>

<script>
    //获取到路由逻辑
    import router from "../../router/router.js";
    //获取map辅助函数
    import {mapState,mapMutations,mapActions} from "vuex"
    import "babel-polyfill"
    
    export default{
        data(){
            return{
                //测试：在reg组件中使用router提供的push方法发送了参数后(同时需要在路由逻辑中配置)，目标组件的$route对象中的params有了相应的键值对
                username:this.$route.params.username,
                password:"",
            }
        },
        computed:{
            ...mapState({
                //登录是否失败状态
                isLoginFailed : state => state.EMP.isLoginFailed
            })  
        },
        methods:{
            regFn(){
                //使用push方法跳转路径
                router.push("/vuex_EMP/reg")
            },
            async LoginFn(){
                await this.asyncLoginFn({
                    username:this.username,
                    password:this.password
                });
                //使用async&await,等待asyncLoginFn完成后再检测isLoginFailed
                if( this.isLoginFailed === false){
                    router.push("/vuex_EMP/info")
                }
            },
            ...mapActions(["asyncLoginFn"])
        }
    }
</script>

<style>
    
</style>