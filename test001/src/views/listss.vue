<template>
  <div>
    <el-button @click="add">添加</el-button>
    <el-dialog :visible.sync="isshow">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in listTab" :key="index" :label="item.label" :name="item.name">
          <publicviw
            :index="index"
            :tableData="tableData"
          ></publicviw>
        </el-tab-pane>
        
      </el-tabs>
    </el-dialog>
  </div>
</template>
<script>
import publicviw from '.././components/common/publictwo.vue'
export default {
  components: {
    publicviw,
  },
  name: "listtitle",
  data() {
    return {
      listTab:[
          {
            label:"用户管理",
            name:"first"
          },
           {
            label:"配置管理",
            name:"second"
          },
           {
            label:"角色管理",
            name:"third"
          },
      ],
      isshow: false,
      activeName: "first",
      tableData: [
           {
            date: "2016-05-02",
            name: "王小虎",
            age: "上海市普陀区金沙江路 1518 弄",
          },
      ],
    };
  },
 
  methods: {
    add() {
      this.isshow = true;
    },
    handleClick(tab, event) {
      console.log(tab);
      console.log(event);
    },
  },
};
</script>