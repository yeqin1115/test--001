<template>
    <div>
        <el-dialog
   v-dialogDrag
   ref="xhzqDialog"
   class="xhzqDialog"
   :title="title"
   :fullscreen="isfullscreen"
   :visible.sync="dialogVisible"
   :append-to-body="true"
   :close-on-click-modal="false"
   :show-close="false"
   :width="width"
   :class="isminimize? 'isminimize': ''"
   center
 >
   <div v-show="!isminimize" slot="title" class="medium">
     <div></div>
     <div class="centers"><span>{{title}}</span></div>
     <div class="icons">
       <i class="iconfont icon-minus" style="font-size: 24px" @click="minimize"></i>
       <i :class="isfullscreen? 'iconfont icon-full-screen-exit' : 'iconfont icon-full-screen' " style="font-size: 24px" @click="IsFullscreen"></i>
       <i class="iconfont icon-close" style="font-size: 24px" @click="closeDialog"></i>
     </div>
   </div>
   <div v-show="isminimize" slot="title"  class="horn">
     <div class="lefts"><span>{{title}}</span></div>
     <div><i class="iconfont icon-full-screen" style="font-size: 10px" @click="minimize"></i></div>
     <div><i class="iconfont icon-close" style="font-size:10px" @click="closeDialog"></i></div>
   </div>
   <div v-show="!isminimize" class="dialogBody">
     <slot></slot>
   </div>
   <div v-show="!isminimize" v-if="isFooter" class="dialogFooter">
     <slot name="footer" solt="footer"></slot>
   </div>
 </el-dialog>
    </div>
</template>
<script>
export default {
    name:'dia',
    data() {
     return {
       isfullscreen: false, // 全屏
       isminimize: false, // 最小化
       dialogVisible: false // 隐藏弹窗
     }
   },

   props: {
  width: {
    type: String,
    default: '50%'
  },
  title: {
    type: String,
    default: ''
  },
  isFooter: { // 是否显示脚部
    type: Boolean,
    default: true
  }
},
watch: {
    dialogVisible(val) {
      if (val) {
        const el = this.$refs.xhzqDialog.$el.querySelector('.el-dialog')
        el.style.left = 0
        el.style.top = 0
      }
    }
  },

methods: {
     // 最小化
     minimize() {

         console.log( this.isminimize)
       this.isminimize = !this.isminimize
       console.log( this.isminimize)
       if (this.isfullscreen) this.isfullscreen = !this.isfullscreen
     },
     // 关闭弹窗
     closeDialog() {
         debugger
       this.dialogVisible = false
     },
     // 打开弹窗
     openDialog() {
       this.dialogVisible = true
     },
     // 全屏
     IsFullscreen() {
         
debugger
       this.isfullscreen = !this.isfullscreen
       if (this.isfullscreen) this.$emit('isfullscreen')
     }
   },
}
</script>
<style scoped>


</style>