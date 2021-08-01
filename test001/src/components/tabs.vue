<template>
  <div class="tabs">
    <van-tabbar :v-model="active" :route="route">
      <van-tabbar-item
        v-for="(val, index) in tabs"
        :key="index"
        :replace="val.val"
        :to="val.to"
        :icon="val.icon"
        >{{ val.inner }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Mytabs",
  props: {
    route: {
      type: Boolean,
      required: true,
      default: false,
    },
    active: {
      type: Number,
      required: true,
      default: 0,
    },
    tabs: {
      type: Array,
      required: true,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      routess: this.$route.path,
    };
  },
  created() {
    // console.log(this.$route.path);
    // console.log(this.tabbar);
    // this.tabbar.filter((val) => {
    //   // console.log(val.to);
    //   if (val.to === this.routess) {
    //     console.log(val.to);
    //     console.log(this.routess + "====");
    //     this.isshow = true;
    //     console.log(this.isshow);
    //   } else {
    //     this.isshow = false;
    //   }
    // });
  },
  watch: {
    // routess: {
    //   handler(val) {
    //     console.log(val);
    //     // this.tabbar.filter((val) => {
    //     //   if (val.to === this.routess) {
    //     //     this.isshow = true;
    //     //   } else {
    //     //     this.isshow = false;
    //     //   }
    //     // });
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
};
</script>

<style>
</style>