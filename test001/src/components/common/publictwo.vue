<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column
        v-for="(item, index) in tabcolumn"
        :key="index"
        :prop="item.title"
        :label="item.label"
        :width="item.width"
      >
      </el-table-column>
    </el-table>
   
  </div>
</template>
<script>
export default {
  name: "public",
  props: {
    tableData: {
      type: Array,
    },
    index: {
      type: Number,
    },
  },
  created() {
    this.handerColumn(this.index);
  },

  data() {
    return {
      tabcolumn: [], // 展示的表头
      allColumn: [ //所有的表头
        { title: "date", label: "日期", width: "" },
        { title: "name", label: "名字", width: "" },
        { title: "age", label: "地址", width: "" },
      ],
    };
  },

  methods: {
    handerColumn(idx) { 
      this.allColumn.map((item, index) => {
        if (idx >= index) { 
          this.tabcolumn.push(item);
        }
      });
    },
  },
};
</script>