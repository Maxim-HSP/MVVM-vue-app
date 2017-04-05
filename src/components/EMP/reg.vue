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
    //获取babel-polyfill(使用generator函数的必需支持)
    import "babel-polyfill"
    import axios from "axios"
    
    export default{
        data(){
            return{
                username:"",
                password:"",
                isUse:false,
                regIsSuccess:false
            }
        },
        methods:{
            loginFn(){
                //测试通过url栏传送参数
                router.push("/login/"+this.username)
            },
            async regFn(){
                let finish = await axios.get('http://localhost:3001/users/reg',{
                    params:{
                        username:this.username,
                        password:this.password
                    }
                });
                if(finish.data){
                    this.regIsSuccess = true;
                    this.username = ""
                    this.password = ""
                    setTimeout(()=>{
                        this.regIsSuccess = false;
                    },1000)
                }
            },
            //es7的终极异步语法糖:
            //--基于generator函数，所以必需安装并引入babel-polyfill(主要由于目前浏览器不支持es7及generator)
            //--使用：在需要异步的函数前添加async关键字，同时在这个函数中声明一个变量用以接收添加了await关键字的异步处理方法(如ajax、axios、setTimeout等)。之后可以使用同步写法操作这个变量(如axios，这个变量中的data即后台返回的数据，同时还有status、header等其他相关参数。又如setTimeout,此变量就是setTimeout的计数)
            async checkIsUse(){
//                let result = await setTimeout(()=>{console.log("run")},500)
                let result = await axios.get('http://localhost:3001/users/isUse',{
                    params : {
                        username:this.username
                    }
                });
                if(result.data){
                    this.isUse = true;
                }else{
                    this.isUse = false;
                }
            }
        }
    }
</script>

<style>
    
</style>