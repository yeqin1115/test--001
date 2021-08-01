<template>
  <div class="logins">
    <div class="vanImage">
      <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>

    <van-form @submit="onSubmit" class="vanForms">
      <van-field
        v-model="userinfo.username"
        name="用户名"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userinfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit" @click="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <div class="login-footer">
      <span>没有账号?立即</span>
      <a @click="links"> 注册 </a>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Form } from "vant";
import { Field } from "vant";
Vue.use(Form);
Vue.use(Field);
export default {
  name: "login",
  data() {
    return {
      userinfo: {
        username: "",
        password: "",
      },
      active: "search",
    };
  },

  methods: {
    // onSubmit() {
    //   //     //点击登录页面 跳转到/主页面  把值存到vuex里
    //   //     this.$store.commit('handleUserName',{name:'yq'});
    //   // //   localStorage.setItem('hou', JSON.stringify(info));
    //   //      this.$router.push('/Demoone')
    // },
    onSubmit(values) {
      console.log("submit", values);
    },
    submit() {
      if (this.userinfo.username === "" || this.userinfo.password === "") {
        // this.$toast.success("请输入登录信息");
        this.$toast("请输入登录信息");
        return false;
      } else {
        this.$router.push({ path: "/" });
      }
    },
    links() {
      this.$router.push({ name: "register" });
    },
  },
};
</script>
<style scoped lang="scss">
.vanForms {
  margin-top: 30px;
}
.vanImage {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-footer {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>