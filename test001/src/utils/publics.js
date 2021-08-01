

import Vue from 'vue'
//过滤方法名为msgfilters  需要过滤的值是val的数据 过滤后return出去
//全局过滤函数分为有参数和无参数 arg1 arg2  都是函数传递的参数
Vue.filter('msgfilters',(val,arg1,arg2)=>{
  //拼接需要和过滤的数据val 和两个参数
  return val+`${arg1}${arg2}`
})
//日期格式化
Vue.filter('formatDate',(val)=>{
  const date = new Date(val);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hour} : ${minutes} : ${seconds}`;
})
