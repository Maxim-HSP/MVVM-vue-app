//获取babel-polyfill(使用generator函数的必需支持)
//async&await基于generator函数
import "babel-polyfill"
import axios from "axios"

export default {
    state:{
        //登录、注册
        isLoginFailed:false,
        regIsSuccess:false,
        isUse:false,
        //员工列表
        listData:{
            curPage:1,
            eachPage:10,
            maxPage:0,
            count:0,
            data:[]
        }
    },
    mutations:{
        setLoginFailed(state,payload){
            state.isLoginFailed = payload
        },
        setRegSuccess(state,payload){
            state.regIsSuccess = payload
        },
        setIsUse(state,payload){
            state.isUse = payload
        },
        setListData(state,payload){
            state.listData = payload
        }
    },
    actions:{
        //使用es7语法糖- async&await
        async asyncLoginFn(context,payload){
            let result = await axios.get('http://localhost:3001/users/login',{
                params:{
                    username:payload.username,
                    password:payload.password
                }
            })
            if(result.data){
                context.commit("setLoginFailed",false)
            }else{
                context.commit("setLoginFailed",true)
            }
        },
        async asyncRegFn(context,payload){
            let finish = await axios.get('http://localhost:3001/users/reg',{
                params:{
                    username:payload.username,
                    password:payload.password
                }
            });
            if(finish.data){
                context.commit("setRegSuccess",true)
            }
        },
        async asyncIsUse(context,payload){
            let result = await axios.get('http://localhost:3001/users/isUse',{
                params : {
                    username:payload.username
                }
            });
            if(result.data){
                context.commit("setIsUse",true)
            }else{
                context.commit("setIsUse",false)
            }
        },
            //payload默认值，当前页和每页条目(当dispatch没有额外参数时使用默认值，防止出错)
        async asyncGetListData(context, payload = {
            curPage : context.state.listData.curPage, 
            eachPage : context.state.listData.eachPage
        }) {
            let result = await axios.get('http://localhost:3001/emp/getEmpByPage',{
                params:{
                    curPage:payload.curPage,
                    eachPage:payload.eachPage
                }
            });
            context.commit("setListData",result.data)
        },
        async asyncDelFn(context, payload){
            let result = await axios("http://localhost:3001/emp/delById",{
                params:{
                    _id : payload._id
                }
            })
            console.log(result)
            if(result.data){
                //删除成功后重新请求列表数据
                context.dispatch("asyncGetListData", payload )
            }
        }
    } 
}