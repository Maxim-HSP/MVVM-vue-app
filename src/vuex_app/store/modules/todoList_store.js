//获取事件类型常量
import * as type from "../type.js"
let {
    ADD_TODO,
    SWITCH_DONE,
    SET_SHOW_TYPE,
    filter
} = type

export default {
    state:{
        listData:[{
            content:"备忘1",
            done:false
        },{
            content:"备忘2",
            done:true
        },{
            content:"备忘3",
            done:false
        },{
            content:"备忘4",
            done:true
        }],
        showType:"all"
    },
    
    getters:{
        filterListData(state){
            switch(state.showType){
                case filter.ALL:
                    return state.listData
                case filter.DONE:
                    return state.listData.filter((item) => item.done)
                case filter.ACTIVE:
                    return state.listData.filter((item) => !item.done)
            }
        }
    },
    
    mutations:{
        [ADD_TODO](state,inputTodo){
            state.listData.push({
                content:inputTodo,
                done:false
            })
        },
        [SWITCH_DONE](state,item){
            item.done = !item.done
        },
        [SET_SHOW_TYPE](state,showType){
            state.showType = showType;
        }
    }
}