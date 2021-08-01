<template>
    <div>
        <el-button @click="dianji">dianjiq</el-button>
       <el-table
      :data="tableData"
      style="width: 50%"
      border="" 
      >
      <el-table-column
        prop="date"
        label="日期"
        width="">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="">
      </el-table-column>
      <el-table-column
        prop="address" v-if="activeName=='first'"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="" v-if="activeName=='first'"
        label="操作">
            <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
    </div>
</template>

<script>
export default {
    name:'headerpuble',
    props:{
        tableData:{
            type:Array,
        },
        activeName:{
            type:String
        }
    },
    data(){
return{
   
}
    },
    methods:{
        dianji(){
            alert(this.activeName)
        },
        handleClick(scope){
            console.log(scope)
        }
    }
   

}
</script>

<style scoped>

</style>