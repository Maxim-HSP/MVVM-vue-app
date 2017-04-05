import Vue from 'vue'
import vuexApp from "./components/vuexApp.vue"
//获取合并好的store
import { store } from "./store/index.js"
//获取路由逻辑
import router from "./router/router.js"

new Vue({
    el: '#vuex_app',
    store,
    router,
    render: h => h(vuexApp)
})
