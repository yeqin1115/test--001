<template>
<div>
<el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane
      v-for="(item, index) in list"
      :key="index"
      :label="item.label"
      :name="item.name"
    >
     <el-table :data="tableData" style="width: 100%">
      <el-table-column v-for="(item,index) in column" :key="index" :prop="item.title" :label="item.label" /> 
    </el-table>
    </el-tab-pane>

   
  </el-tabs>
</div>
</template>
<script>
export default {
    name:'list',
  data() {
    return {
      activeName: "first",
      list: [ //tab 切换的数组
        {
          label: "用户管理",
          name: "first",
        },
        {
          label: "配置管理",
          name: "second",
        },
        {
          label: "角色管理",
          name: "third",
        },
      ],
      tableColumn:[ // 表头汇总的数组
        {
          title:"date",
          label:"日期",
        },
        {
          title:"name",
          label:"姓名",

        },
        {
          label:"地址",
          title:"address",
        },
      ],
      column:[ //需要展示的数组
        {
          title:"date",
          label:"日期",
        },
       ], 
      
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
//    tableColumn:[ // 表头汇总的数组
//         {
//           title:"date",
//           label:"日期",
//         },
//         {
//           title:"name",
//           label:"姓名",

//         },
//         {
//           label:"地址",
//           title:"address",
//         },
//       ],
//  column:[ //需要展示的数组
//         {
//           title:"date",
//           label:"日期",
//         },
//        ], 
  methods: {
    handleClick(tab, event) {
      this.column = [] 
      console.log(tab.index, event);//0 1 2
      this.tableColumn.map((item)=>{
        //   debugger
        //   console.log(item+'````'+idx)
        if(tab.index===0){
        this.column.push(item)
        }
        // if( tab.index >= idx){
            
        //   this.column.push(item)
        // }
      })
    },
  },
};
</script>