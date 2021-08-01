<template>
    <div>
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
    <pagepublic :pageSize="pageSize" 
    :tableData='tableData' :total="total" :page.sync=page  @pageSizes=pageSizes 
    @pagemit=pagemit 
    ></pagepublic>
    </div>
</template>
<script>
import pagepublic from '.././components/common/pagepublic.vue'
export default {
    name:'pages',
    components:{
        pagepublic:pagepublic
    },
    data(){
        return {
            tableDatas:[],
            page:1,
            pageSize:10,
            total:2
        }
    },
    created(){
    
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
          }];
        
        this.page=1
        this.pageSize=20;
        this.total=3
    },
     methods:{
      pageSizes(pagesize){
       this.pagesize=pagesize
      } ,
      pagemit(page){
        this.page=page
      }
    }
}
</script>