<template>
    <div class="indes"> 
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
   <pagepublic :total=total :tableData=tableData :pageSize=pageSize
    :small=small
    @pageSizes=pageSizes @pagemit=pages
    > </pagepublic>
    </div>
</template>
<script>
import pagepublic from '.././components/common/pagepublic.vue'
export default {
    name:'nihao',
    components:{
pagepublic
    },
    data(){
        return {
         tableData:[],
         pageSize:10,
         total:0,
    small:true

    
        }
    },
    created () {
        this.tableData=[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }];
        
    
        this.pageSize=10;
        this.total=4

    },
    methods:{
      pageSizes(pagesize){
        console.log(pagesize)
      } ,
      pages(page){
        console.log(page)
      }
    }
}
</script>
<style scoped>

</style>