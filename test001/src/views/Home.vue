<template>
  <div class="home">
    <header>
      <span>
        <van-icon name="wap-nav" color="green" size="40" />
      </span>
      <div clsss="searchs" style="width: 80%">
        <van-search
          v-model="value"
          shape="round"
          background="white"
          width="80%"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          clearable
        />
      </div>
      <router-link
        :to="{ name: 'login' }"
        style="margin-top: 15px; margin-left: 10px"
        >登录</router-link
      >
    </header>
    <div class="banner" style="height: 150px">
      <van-swipe
        class="my-swipe"
        :autoplay="2100"
        indicator-color="green"
        touchable
        :loop="true"
        show-indicators
        style="height: 150px"
      >
        <van-swipe-item v-for="item of imgs" :key="item.id">
          <img
            v-lazy="item.image"
            class="banner-img"
            style="height: 150px; width: 100%"
          />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-grid :column-num="5" :border="false" square :gutter="10">
        <van-grid-item
          v-for="(value, index) in gridtarr"
          :key="index"
          :icon="value.icon"
          :text="value.text"
        />
      </van-grid>
      <van-grid :border="false" :column-num="3">
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg" />
        </van-grid-item>
        <van-grid-item>
          <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg" />
        </van-grid-item>
      </van-grid>
      <div style="margin-top: 20px">
        <h3 style="color: #1baeae; text-align: center">新品上线</h3>
        <van-grid clickable :column-num="2" icon-size="35px">
          <van-grid-item
            v-for="(value, index) in grinds"
            :key="index"
            :icon="value.icon"
            :text="value.text"
          />
        </van-grid>
      </div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  name: "Home",
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      value: "",
      imgs: [
        { id: 1, image: "https://img01.yzcdn.cn/vant/apple-2.jpg" },
        { id: 2, image: "https://img01.yzcdn.cn/vant/apple-2.jpg" },
      ],
      gridtarr: [
        {
          icon: "photo-o",
          text: "文字",
        },
        {
          icon: "photo-o",
          text: "购物啊",
        },
        {
          icon: "photo-o",
          text: "shop",
        },
        {
          icon: "photo-o",
          text: "逛街",
        },
        {
          icon: "photo-o",
          text: "臭美",
        },
      ],
      grinds: [
        {
          icon: "photo-o",
          text: "购物啊",
        },
        {
          icon: "photo-o",
          text: "shop",
        },
        {
          icon: "photo-o",
          text: "逛街",
        },
        {
          icon: "photo-o",
          text: "臭美",
        },
      ],
    };
  },

  methods: {
    getindex() {},
    onSearch(val) {
      this.$toast(val);
    },
  },
};
</script>
<style scoped lang="scss">
.home {
  background: white;
  width: 100%;
  header {
    width: 100%;
    background: white;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>

