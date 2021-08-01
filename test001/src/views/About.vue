<template>
  <div class="about">
    <el-table :data="list" style="width: 100%; height: 100%" border>
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.factorcode }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <div
            v-show="
              scope.row.factorType === '01' || scope.row.factorType === '02'
            "
          >
            <el-selects
              :options="scope.row.options"
              v-model="scope.row.factorvalue"
              :scopindex="scope.$index"
              @input="getinput"
              @blurchange="blurchangeone"
              ref="child"
              :disabled="false"
              :sClearable="true"
              :sFilterable="true"
              :allowCreate="true"
              :firstOoption="true"
              :label="label"
              :sPlaceholder="sPlaceholder"
            ></el-selects>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      active: "home-o",
      list: [],
      options: [
        {
          id: "1",
          name: "黄金糕",
        },
        {
          id: "2",
          name: "双皮奶",
        },
      ],
      optionsstwo: [
        {
          id: "1",
          name: "黄金糕aa",
        },
        {
          id: "2",
          name: "双皮奶www",
        },
      ],
      formdata: {
        value: "",
      },
      option: "id",
      label: "name",
      sPlaceholder: "",
    };
  },
  methods: {
    getinput(value) {
      this.formdata.value = value;
      // console.log(this.formdata.value);
    },
    blurchangeone(value, scopes) {
      this.list[scopes].name = "";
    },

    blurchangetwo(value, index) {
      let flag = true;
      this.list[index].options.forEach((val) => {
        if (val.id == value) {
          this.list[index].factorcode = value;
          flag = false;
        }
      });
      if (flag) {
        this.list[index].factorcode = "";
      }
    },
    findList(data1) {
      this.list = data1;
      this.list.forEach((item) => {
        if (item.factorType == "01" || item.factorType == "02") {
          let data = [
            {
              id: "1",
              name: "黄金糕aa",
            },
            {
              id: "2",
              name: "双皮奶www",
            },
          ];
          item.options = data;
        }
      });

      // console.log(this.list);
    },
  },
  created() {
    let data = [
      {
        factorcode: "FT075",
        factorType: "02",
        factorvalue: "",
      },
      {
        factorcode: "FT074",
        factorType: "01",
        factorvalue: "",
      },
    ];
    this.findList(data);
  },
};
</script>
<style  scoped lang="scss">
// .about{
//   width: 100%;
//   height:100px;
//   background: red;
// }
</style>
