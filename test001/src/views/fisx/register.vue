<template>
  <div class="register">
    <div class="van-ivons">
      <van-icon name="arrow-left" @click="goOn" />
      <span>注册</span>
    </div>
    <div class="register-header">
      <van-field name="uploader" label="文件上传" class="header-label">
        <template #input>
          <van-uploader v-model="uploader" style="maring-left: 50px" />
        </template>
      </van-field>
    </div>
    <div>
      <van-form @submit="onSubmit" class="register-vanForms">
        <van-cell-group>
          <van-field
            v-model="forms.phone"
            required
            label="手机号"
            placeholder="请输入手机号"
            :rules="[
              { required: true },
              { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
            ]"
          />
          <van-field
            v-model="forms.sms"
            center
            clearable
            label="短信验证码"
            placeholder="请输入短信验证码"
            :rules="[
              {
                required: true,
                message: '请输入短信验证码',
              },
            ]"
          >
            <template #button>
              <van-button size="small" type="primary">发送验证码</van-button>
            </template>
          </van-field>
          <van-field
            v-model="forms.password"
            required
            type="password"
            label="密码"
            placeholder="请输入密码"
          />
          <van-field
            v-model="forms.password1"
            required
            type="password"
            label="确认密码"
            placeholder="请再次输入密码"
          />

          <van-field
            readonly
            clickable
            name="picker"
            :value="value"
            label="选择地区"
            placeholder="点击选择城市"
            @click="showPicker = true"
          />
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
        </van-cell-group>

        <div style="margin: 16px">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="registers"
            >注册</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
// import { Toast } from "vant";
import { Notify } from "vant";

// Vue.use(Toast);
export default {
  name: "register",
  components: {
    [Notify.Component.name]: Notify.Component,
  },

  data() {
    return {
      active: "friends-o",
      forms: {
        phone: "",
        password: "",
        sms: "",
        password1: "",
      },
      showPicker: false,
      value: "",
      uploader: [{ url: "https://img01.yzcdn.cn/vant/leaf.jpg" }],
      columns: ["城中区", "鱼峰区", "柳南区", "柳北区", "柳江区"],
    };
  },

  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    onSubmit(val) {
      console.log(val);
    },
    registers() {
      if (this.forms.phone === "" || this.forms.sms === "") {
        this.$toast.fail("请完善注册信息");
        return false;
      } else if (this.forms.password != this.forms.password1) {
        this.$toast.fail("密码两次输入不一致");
        return false;
      } else {
        this.$toast.success({
          message: "注册成功",
        });
        Notify({
          type: "success",
          message: "注册成功，3s后返回登录",
          duration: 3000,
        });
        setTimeout(() => {
          this.$router.go(-1);
        }, 3000);
      }

      // this.$router.push({ name: "login" });
    },
    goOn() {
      this.$router.push({ name: "login" });
    },
  },
};
</script>
<style scoped lang="scss">
.register {
  width: 100%;
  .van-ivons {
    width: 100%;
    padding: 0px 10px;
    margin: 20px 10px;
    span {
      margin-left: 200px;
      width: 30%;
    }
  }
  .register-header {
    width: 100%;
    padding: 0px 10px;
    margin: 20px 10px;
  }
}
// /deep/ .van-radio__label {
//   width: auto;
//   word-wrap: break-word !important;
//   // width: 40px !important;
//   white-space: nowrap !important;
//   overflow: hidden !important;
//   text-overflow: ellipsis !important;
// }
</style>

