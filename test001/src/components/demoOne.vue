<template>
  <div class="demoone">
  您好，{{this.$store.state.user_name.name}}
     <!-- <button @click='changeData'>改数据</button>
   {{this.$store.getters.doubleGet}}
      <div>{{count}}</div>

       <div> {{count}}+{{cartList}}+{{data1}}</div> -->
       <!-- {{this.$store.state.userinfo}}
    {{ this.$store.state.count}} -->

  </div>
</template>

<script>
// 引入mapState赋值函数 可以读出store里数据
// import { mapState } from 'vuex'

export default {
  name: 'Demoone',
  data(){
        return{
            userinfo:"",
        }
    },



  methods: {
    // changeData(){
    //           // 通过commit 触发 mutation 并传参
    //            this.$store.commit('changeDataMut',10)  //此时组件1和组件2中data都是10啦
    //            this.$store.dispatch('changeDataAct', 200)
 
    //        }
    },

    // 计算属性
    computed:{
      // ...mapState({
      //   cartList:state => state.cartList,
      //    count:state => state.count,
      //     data1:state => state.data1,
      // }),



      //  count1(){
      //  return this.$store.state.count;

 }
    }

  
</script>
<style scoped>
</style>
