import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //管理数据 相当于vue页面的data
  state: {
    data:1,
    data1:2,
    count:'床前明月光',
    cartList:[1,2,1],
    user_name: JSON.parse(localStorage.getItem("user_name"))
  },

  // 专用于修改state中的数据，通过commit触发
  mutations: {
    changeDataMut(state,params){  
      state.data = params
  },
    //获取登录信息 持久化
  getuserinfo(state,info){
    localStorage.setItem(info,JSON.stringify(info))
    
      state.userinfo=info;
  },
  handleUserName: (state, user_name) => {
    state.user_name = user_name
        // 把登录的用户的名保存到localStorage中，防止页面刷新，导致vuex重新启动，用户名就成为初始值（初始值为空）的情况
    localStorage.setItem(user_name, JSON.stringify(user_name))
}
  },

  // 可以处理异步，通过dispatch触发，不能直接修改state，
  // 首先在组件中通过dispatch触发action，然后在action函数内部commit触发mutation，
  // 通过mutation修改state状态值
  actions: {
  //   changeDataAct(context,params){  //context是一个对象，从它里面把咱们需要的commit方法解构出来
  //     let {commit} = context
  //     console.log({commit})
  //     commit('changeDataMut',params)
  // }
  },

  // Vuex中的计算属性，相当于vue中的computed,依赖于state状态值，状态值一旦改变，
  // getter会重新计算，也就是说，当一个数据依赖于另一个数据发生变化时，就要使用getter
  getters: {
  //   doubleGet(state){
  //     return state.data*2
  // }
    userName: (state) => state.user_name
    
  },
  
  // 模块化管理
  modules: {
  }
})
