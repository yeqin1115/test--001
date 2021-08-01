<template>
  <div>
     <el-select
     :filterable="sFilterable"
     :allow-create="allowCreate"
     :default-first-option="firstOoption"
    :clearable="sClearable"
    :disabled="sDisabled"
    v-model="svalue"
   :placeholder="sPlaceholder"
    @change="sChange"
   
  >
    <el-option
    v-for="item in options"
      :key="item.id"
      :label="item.name"
      :value="item.id"
    >
    <span style="margin-right:10px">{{item[label]}}</span>
      <span>{{item[option]}}</span>
    </el-option>
   
  </el-select>
  </div>
</template>

<script>
export default {
    name:'elselect',
    props: {
        scopindex:{
        type: Number,
      required: false
        },
    value: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
     
    },
    keys: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: "Text"
    },
    option: {
      type: String,
      default: "Value"
    },
 sFilterable:{
     type:Boolean,
     default:true
 },
 allowCreate:{
       type:Boolean,
     default:false
 },
  firstOoption:{
        type:Boolean,
     default:false
  },
  isdisabled:{
        type:Boolean,
     default:false
  },
    sClearable: {
      type: Boolean,
      default: true
    },
    sPlaceholder: {
      type: String,
    },
    sDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      svalue: this.value,
      scopsww:this.scopindex
    };
  },
  methods: {
    sChange() {
       this.$emit("blurchange", this.svalue,this.scopsww);
    },
   

  },
  watch: {
    value(newVal) {
      this.svalue = newVal;
    },
    svalue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("input", this.svalue);
      }
    }
  }

}
</script>

<style>

</style>