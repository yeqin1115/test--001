import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import Vant from 'vant'
import './utils/vant.js'

import axios from 'axios'
Vue.prototype.$ajax = axios

import Vuex from 'vuex'
import 'lib-flexible/flexible.js'
// import less from 'less'
// Vue.use(less)

import elselect from './components/elSelect.vue'//引入组件
Vue.component('el-selects', elselect)//初始化组件

import "./utils/watchdia"
Vue.use(Vuex)
Vue.use(ElementUI);
Vue.use(Vant)

Vue.config.productionTip = false

//引入公共组件 二次封装vant组件
import Mytabs from './components/tabs'
Vue.component("Mytabs", Mytabs);
//引入手写tabbar 自己封装
import Mytabbar from './components/tabber'
Vue.component('Mytabbar', Mytabbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
