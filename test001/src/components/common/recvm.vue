<template>
    <div>
         <el-table
      :data="tableData"
      style="width: 100%">
         <el-table-column
        type="selection"
        style="width: 40px;"
        align="center"
      ></el-table-column>
      <el-table-column
        type="index"
        width="50"
        label="序号"
        align="center"
      ></el-table-column>
       <el-table-column
      v-for="(item,index) in tableHandle"
      :key='index'
        :prop="item.title"
        :label="item.label"
        :width="item.width"
        >
      </el-table-column>
      </el-table>
     
    </div>
</template>
<script>
export default {
    name:'recvm', 
    props:['tableData','tableHandle'],
  created(){ 
    console.log(this.tableHandle)
  },
 
    data(){
        return {
       

        }
    },
    
    methods:{
       
    }

}
</script>