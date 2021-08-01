<template>
    <div>
          <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :page-sizes="[1,5,10,15,,20]"
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="page"
        :page-size="pageSize"
        :total="total"
        :small="small">
        </el-pagination>

    </div>
</template>
<script>
export default {
    name:'formatin',
    data(){
        return {
        
pageNum:1
        }
    },
   props: ['page', 'pageSize', 'total','tableData','small'],
    created(){
     
    },

    methods:{
    sizeChange(sizeval){
            // val传递给父组件 用来查询对应的每页展示val条的数据列表
            this.$emit('pageSizes',sizeval)
       
    },
     currentChange(currenval){
    this.$emit('pagemit',currenval)
    },
    },


}
</script>