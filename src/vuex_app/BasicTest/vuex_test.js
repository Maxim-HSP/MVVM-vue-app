import Vue from 'vue'
//引入vuex构造函数,以及vuex提供的各辅助map函数
import Vuex from "vuex"
import {
    mapState,
    mapGetters,
    mapMutations,
    mapActions
} from "vuex"
//开启vuex
Vue.use(Vuex)

//------------------------store---------------------------------
//创建一个vuex store实例，使用Vuex提供的Store方法
const store = new Vuex.Store({
    //state即store中的数据
    state:{
        count : 0,
        text: "字符串叠加"
    },
    
    //getter用于存放从store中的state中派生出一些状态,例如state中某个数组长度，对某个列表数据进行过滤并计数等
    getters:{
        textLength(state){
            return state.text.length
        }
    },
    
    //mutations定义操作state的方法，每个mutation都有一个字符串的事件类型(type)，和一个回调函数(handler),这个回调函数会接受state作为第一个参数，我们在这个函数中实现state的更改(状态更改).
    //为方便维护，规范mutations中只进行同步操作
    mutations:{
        increment(state){
            state.count++
        },
        addText(state,payload){
            //payload是commit时发送的参数，包含了type及数据
            if(typeof payload == 'string'){
                return state.text += payload
            }
            state.text += payload.text
        }
    },
    
    //actions主要用于异步操作，即在action中提交mutations
    actions:{
        asyncAddText(context,payload){
            setTimeout(()=>{
                context.commit("addText",payload)
            },1000)
        }
    }
})
//------------------------单模块中测试------------------------------
var TestApp = {
    name:"TestApp",
    template:`
        <div>
            <a href="../vuex.html">切换到vuex模块化实例</a>
            <hr>
            <h4>计数(获得state)：{{count}}</h4>
            <button @click="increment">载荷方式commit</button>
            <h4>叠加文本:{{text}}</h4>
            <input type="text" v-model="inputText">
            <button @click="addText">带参数的对象方式commit</button>
            <button @click="addText2">带参数的载荷方式commit</button>
            <button @click="asyncAddText">异步action(1秒后叠加)</button>
            <button @click="getTextLength">打印字符串长度(获取getter)</button>
        </div>
    `,
    data(){
        return{
            inputText:""
        }
    },
    //这里不用data是因为data不会监测store中state的变化，所以要使用计算属性computed，state变化时才会引起视图层更新，其访问方式与data一样。computed中的数据形式都是一个方法，属性名为方法名，值为这个方法的返回值
    computed:{
        count(){
            return store.state.count
        },
        text(){
            return store.state.text
        },
        ...mapGetters(['textLength'])
    },
    methods:{
        //访问getter
        getTextLength(){
            console.log(this.textLength)
        },
        //载荷方式commit
        increment(){
            store.commit("increment");
        },
        //对象方式commit(带参数)
        addText(){
            store.commit({
                type: "addText",
                text : "+"+this.inputText
            })
        },
        //载荷方式commit(带参数)
        addText2(){
            this.$store.commit("addText", "+"+this.inputText)
        },
        //异步action(1秒后才commit)
        asyncAddText(){
            this.$store.dispatch("asyncAddText","+"+this.inputText)
        }
    }
}
//-------------------根节点(主组件、应用入口)-------------------------
var container= new Vue({
    el: '#vuex_app',
    //在根节点中注入store(这样才能在任何组件中this.$store访问到这个vuex创建的实例，并使用commit方法等)
    store,
    render: h => h(TestApp)
})
