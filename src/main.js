import Vue from 'vue'
import App from './components/App.vue'
//引入router(注意首字母必须小写)
import router from "./router/router.js"

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
