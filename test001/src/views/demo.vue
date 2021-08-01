<template>
  <div>
    <!-- <el-select class="width100" v-model="form.nowname" clearable   
              filterable 
              allow-create 
                default-first-option
                placeholder="输入修改后的文件名，用回车添加"
                @on-create="handleCreate1"
                >
  <el-option v-for="item in options" :key="item.key" :label="item.labe l" :value="item.label"></el-option>
</el-select>
<el-button @click="dianji">ddd</el-button> -->
    <el-button @click="dianji">ddd</el-button>
  </div>
</template>
<script>
export default {
  name: "goTop",
  data() {
    return {
      isa: "a231",
      //      options: [{
      //   value: '测试1',
      //   label: '测试'
      // }],
      // form:{
      //     nowname:''
      // },
      // value: []
    };
  },

  methods: {
    dianji() {
      var sSrc = "a33333";
      if (typeof sSrc === "string") {
        var sASC = sSrc.charCodeAt(0);
        if ((sASC >= 65 && sASC <= 90) || (sASC >= 97 && sASC <= 122)) {
          alert("我首位是子母");
        }
      }
    },
  },
};
</script>