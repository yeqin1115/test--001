<template>
<div>
 <div >我是子组件left
     <el-button @click="dianji">点击</el-button>
   
 </div>

</div>
   
</template>

<script>
import Bus from '../../api/Bus.js'
export default {
    name:'left',
    data(){
        return {
            usr:'我是叶琴啊',
            a:1
        }
    },
        methods:{
dianji(){
  //点击时候 把值通过bus.$emit传递到bus.js文件
  Bus.$emit('zizhu',this.a++,'传递')
}

    },
  
       
    

    
}
</script>