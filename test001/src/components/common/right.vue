<template>
    <div>
       我是right
        <el-button @click="dianjw">点我啊</el-button>
        
    </div>
</template>
<script>
import Bus from '../../api/Bus.js'
export default {
    name:'right',
    data(){
        return{
            priont:'我是right要传递的值'
        }
    },
   created () {
       Bus.$on('zizhu',(data,val)=>{
           console.log(data)
           console.log(val)
       })
   },
    methods:{
dianjw(){
   
}
    }
}
</script>
<style scoped>

</style>