<template>
  <div id="app">
    <router-view />
    <Mytabs
      v-if="this.$route.meta.iShow"
      :tabs="tabs"
      :active="active"
      :route="route"
      @change="onChange"
    ></Mytabs>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      active: 0,
      route: true,

      //tab需要展示的数据
      tabs: [
        {
          replace: true,
          to: "/",
          icon: "home-o",
          inner: "标签1",
        },
        {
          replace: true,
          to: "/login",
          icon: "search",
          inner: "标签2",
        },
        {
          replace: true,
          to: "/register",
          icon: "friends-o",
          inner: "标签3",
        },
        {
          replace: false,
          to: "",
          icon: "setting-o",
          inner: "标签4",
        },
      ],
    };
  },

  methods: {
    onChange(index) {
      this.active = index;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>