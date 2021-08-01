<template>
  <div>
    <el-button @click="add">添加</el-button>
    <el-dialog :visible.sync="isshow">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
     <el-tab-pane label="用户管理" name="first">
        <recvm
    
            :tableData="tableData"
           :tableHandle=tableHandle
          ></recvm>
    </el-tab-pane>
    <!-- v-if="tab2.length>0" -->
    <el-tab-pane label="配置管理" name="second" >
         <recvm 
            :tableData="tableData"
           :tableHandle=tableHandle
          ></recvm>
 </el-tab-pane>
 <!-- v-if="tab3.length>0" -->
    <el-tab-pane label="角色管理" name="third" v-if="tab3.length>0" >
          <recvm
            :tableData="tableData"
           :tableHandle=tableHandle
          ></recvm>
          </el-tab-pane>
  </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import recvm from '.././components/common/recvm.vue'
// import {tableHeader,tableHandle} from '../utils/recs'
export default {
  components: {
    recvm,
  },
  name: "rec",
  data() {
    return {
        tab3:[],
  
 tableHandle : [
        { title: "date", label: "日期", width: "" },
        { title: "name", label: "名字", width: "" },
        { title: "age", label: "地址", width: "" },
],
   
      isshow: false,
      activeName: "first",
      tableData: [
         
      ],
    };
  },

  methods: {
    add() {
      this.isshow = true;
  


      this.tableData=[
            {
            date: "2016-05-02",
            name: "王小虎",
            age: "上海市普陀区金沙江路 1518 弄",
          },
      ]
    },
    //封装公共查询方法第一个  第二个  第三个

    handleClick() {
      debugger
    //就调取那个查询接口
                 if(this.activeName==='first'){
                     //查第一个 调取第一个函数
                    alert(111)
                   }else if(this.activeName==='second'){
                   this.tableData=[]
                   }else if(this.activeName==='third'){
                       this.tableData=[
            {
            date: "2016-05-02",
            name: "王小虎",
            age: "上海市普陀区金沙江路 1518 弄",
          },
      ]
                       alert(33)
                   }
    },
  },
};
</script>