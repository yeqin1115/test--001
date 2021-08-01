<template>
    <div>
          <el-button @click="add">添加</el-button>
     <el-dialog  :visible.sync="isshow">
   <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
     <el-tab-pane label="用户管理" name="first">
       <publicviw :activeName="activeName" :tableData=tableData></publicviw>
    </el-tab-pane>
    <!-- v-if="tab2.length>0" -->
    <el-tab-pane label="配置管理" name="second" >
       <publicviw :activeName="activeName"></publicviw>
 </el-tab-pane>
 <!-- v-if="tab3.length>0" -->
    <el-tab-pane label="角色管理" name="third" >
        <publicviw :activeName="activeName"></publicviw>
         </el-tab-pane>
  </el-tabs>
 
     
    
    </el-dialog>

    </div>
</template>
<script>
import publicviw from '.././components/common/public.vue'
export default {
    components:{
        publicviw
    },
    name:'pub',
    data(){
        return{
            isshow:false,
            activeName:'first',
            tableData:[], 
            tab2:[],
            tab3:[]
        }
    },
    created () {
    //    页面加载进来 查询后两个页面  控制动态展示
    //    第一个列表的tableData  赋值给子组件展示
    //调取子组件方法 查询3和4  控制动态展示
      
       
    },
    methods:{
        add(){
            this.isshow=true
        },
        handleClick(tab,event){
            console.log(tab)
            console.log(event)
        }

}
}
</script>