<template>
  <div class="regiser-style">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="form.userName"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input v-model="form.confirmPassword" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="12" :offset="0">
          <el-button type="primary" @click="onSubmit()">注册</el-button>
        </el-col>
        <el-col :span="12" :offset="0">
          <router-link to="/login">
            <el-button>取消</el-button>
          </router-link>
        </el-col>
      </el-form-item>
    </el-form>
    <!-- </el-col> -->
    <!-- </el-row> -->
  </div>
</template>

<script>
import { getUserByName, createUser } from "@/api/user.js";
export default {
  name: "register",
  data() {
    return {
      form: {
        userName: "",
        password: "",
        confirmPassword: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
        confirmPassword: [
          { required: true, message: "请输入确认密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    onSubmit: function () {
      // 检查用户名是否已经存在
      const userName = this.form.userName;
      const pwd = this.form.password;
      const confirmpwd = this.form.confirmPassword;
      if (userName === "") {
        this.$message({
          message: "请填写用户名！",
          type: "warning",
        });
        return;
      }
      if (userName.length > 5 || userName.length < 2) {
        this.$message({
          message: "用户名长度异常！",
          type: "warning",
        });
        return;
      }
      if (pwd === "" || confirmpwd === "") {
        this.$message({
          message: "请填写密码！",
          type: "warning",
        });
        return;
      }
      if (pwd != confirmpwd) {
        this.$message({
          message: "密码不一致！",
          type: "warning",
        });
        return;
      }

      getUserByName(userName).then((result) => {
        if (result.data.data && result.data.data.length > 0) {
          this.$message({
            message: "用户名已存在！",
            type: "warning",
          });
        } else {
          const user = {
            name: userName,
            age: 18,
            sex: "男",
            password: pwd,
            confirmPassword: confirmpwd,
          };
          createUser(user)
            .then(() => {
              this.$message({
                message: "注册成功！",
                type: "success",
              });
            })
            .catch(() => {
              this.$message.error("服务异常，注册失败！");
            });
        }
      });
    },
  },
};
</script>
<style scoped>
.regiser-style {
  height: 400px;
  width: 400px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>