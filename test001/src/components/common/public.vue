<template>
    <div>
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
      v-for="(item,index) in tabcolumn"
      :key='index'
        :prop="item.title"
        :label="item.label"
        :width="item.width">
      </el-table-column>
     
      </el-table>
     <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="this.page"
      :page-sizes="[1, 2, 10, 40]"
      :page-size="this.pagesize" 
      layout="total, sizes, prev, pager, next, jumper"
      :total="this.total">
    </el-pagination>
    </div>
</template>
<script>
export default {
    name:'public', 
    props:{
        activeName:{
            type:String
        },
      
    
    },
  
    watch: {
        activeName(activeName){
                this.tabcolumn=[];
            if(activeName==='first'){
           
            this.tabcolumn=this.tabcolumnfirst;
            this.clear()
              this.tableData=[{date: "2016-05-02",
         } ,
          {date: "2016-05-02",
         } 
        ]
        this.total=1
       
            // 重新查询 赋值列表tableData
            }else if(activeName==='second'){
            this.clear()
     this.tabcolumn=this.tabcolumnsecond
     this.tableData=[{date: "2016-05-02",
           age: "上海市普陀区金沙江路 1518 弄",
         } ,
          {date: "2016-05-02",
          age: "上海市普陀区金沙江路 1518 弄",
        } 
        ]
           this.total=2
    //  重新查询 赋值列表 tableData
            }else if(activeName==='third'){
                this.clear()
                  this.tabcolumn=this.tabcolumnthird
                //   重新查询 赋值列表tableData
                this.tableData=[{date: "2016-05-02",
          name: "王小虎",
          age: "上海市普陀区金沙江路 1518 弄",} ,
          {date: "2016-05-02",
          name: "王小虎",
          age: "上海市普陀区金沙江路 1518 弄",} 
        ]
           this.total=3
            }
        },
        deep:true,
        immediate: true
    },
    // 封装三个查询tab切换的函数  
    created () {
        this.tabcolumn=[{ title:"date",label:"日期" ,width:""}];
     this.clear()
        //刚点击进来调取第一个查询tab切换函数  查询分页总是和tab数据
         this.tableData=[{date: "2016-05-02",
         } ,
         this.total=1
         //查询第一个tab分页
        ]
     
    },
 
    data(){
        return {
             page:1,
            pagesize:10,
            total:0,
            tableData:[],
       tabcolumn:[ { title:"date",label:"日期" ,width:""}],
               tabcolumnfirst:[
                   { title:"date",label:"日期" ,width:""},

                    ],
                       tabcolumnsecond:[
                   { title:"date",label:"日期" ,width:""},
                   { title:"age",label:"年龄" ,width:""},

                    ],
                       tabcolumnthird:[
                    { title:"date",label:"日期" ,width:""},
                   { title:"age",label:"年龄" ,width:""},
                   { title:"name",label:"姓名" ,width:""},

                    ],

        }
    },
    
    methods:{
          clear(){
            this.page=1;
            this.pagesize=10;
            console.log(this.pagesize)
            this.tableData=[];
             this.total=0
    },
           handleSizeChange(val) {
                this.pagesize=val;
                //通过ac判断点击的是那个tab
                //就调取那个查询接口
                   if(this.activeName==='first'){
                    alert(111)
                   }else if(this.activeName==='first'){
                    alert(222)
                   }else if(this.activeName==='first'){
                       alert(444)
                   }
      },
      handleCurrentChange(val) {
          this.page=val;
             //通过ac判断点击的是那个tab
                //就调取那个查询接口
                 if(this.activeName==='first'){
                    alert(111)
                   }else if(this.activeName==='first'){
                    alert(222)
                   }else if(this.activeName==='first'){
                       alert(444)
                   }
      }
    }

}
</script>