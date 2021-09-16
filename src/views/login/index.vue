<template>
  <div class="login">
    <el-card>
      <div slot="header" class="clearfix head-title">
        <span>admin-system</span>
      </div>
      <div>
        <el-form :model="form" ref="form" label-width="60px" :inline="false" size="normal">
          <el-form-item label="用户名">
            <el-input type="text" v-model="form.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-col :span="8"></el-col>
            <el-col :span="8">
              <el-button type="primary" @click="login()">登录</el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="primary" @click="register()">注册</el-button>
            </el-col>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
// import data from "@/mock/user.js";
import { getUserByNameAndPwd } from "@/api/user.js";
export default {
  name: "login",
  data() {
    return {
      form: {
        userName: "",
        password: "",
      },
    };
  },
  methods: {
    login: function () {
      const userName = this.form.userName;
      const pwd = this.form.password;
      getUserByNameAndPwd(userName, pwd)
        .then((result) => {
          if (result.data.data && result.data.data.length > 0) {
            this.$router.push({ name: "dashboard" });
          } else {
            this.$message({
              message: "用户名或密码错误！",
              type: "warning",
            });
          }
        })
        .catch((err) => {
          this.$message({
            message: err,
            type: "warning",
          });
        });
    },
    register: function () {
      this.$router.push({ name: "register" });
    },
  },
};
</script>
<style scoped>
.login {
  width: 380px;
  height: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.head-title {
  text-align: center;
  font-size: 26px;
}
</style>