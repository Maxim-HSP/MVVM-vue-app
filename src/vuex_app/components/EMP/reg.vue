<template>
    <div>
       <h4>注册模块</h4>
        <p>账户: <input v-model="username" type="text" placeholder="输入以检测是否被使用" @blur="checkIsUse"><span v-if="isUse">用户名已被使用</span></p>
        <p>密码: <input v-model="password" type="text"/><span v-if="regIsSuccess">注册成功</span></p>
        <p>
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="回到登录" @click="loginFn">
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="确认注册" @click="regFn" :disabled="isUse">
        </p>
    </div>
</template>

<script>
    //获取到路由逻辑
    import router from "../../router/router.js"
    //获取map辅助函数
    import {mapState,mapMutations,mapActions} from "vuex"
    import "babel-polyfill"
    
    export default{
        data(){
            return{
                username:"",
                password:"",
            }
        },
        computed:{
            ...mapState({
                isUse: state=> state.EMP.isUse,
                regIsSuccess: state=> state.EMP.regIsSuccess
            })
        },
        methods:{
            loginFn(){
                //测试:通过url栏传送参数
                router.push("/vuex_EMP/login/"+this.username)
            },
            async regFn(){
                await this.asyncRegFn({
                    username:this.username,
                    password:this.password
                })
                //asyncRegFn完成后清空并还原状态
                this.username = ""
                this.password = ""
                setTimeout(()=>{
                    this.$store.commit("setRegSuccess",false);
                },1000)
            },
            checkIsUse(){
                this.asyncIsUse({
                    username:this.username
                });
            },
            ...mapActions(["asyncRegFn","asyncIsUse"]),
        }
    }
</script>

<style>
    
</style>