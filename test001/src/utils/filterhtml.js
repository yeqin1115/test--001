import moment from 'moment'
import Vue from 'vue'
Vue.filter('format',function(val,arg){
  
    if(!val) return;
    val = val.toString()
    console.log(moment(val))
    console.log(moment(val).format(arg))
    return moment(val).format(arg)
  })