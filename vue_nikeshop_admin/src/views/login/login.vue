<template>
  <div class="login-container">
    <el-form ref="login-form" :model="loginFrom" :rules="loginRules">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <i class="el-icon-user"></i>
        <el-input
          class="input"
          v-model="loginFrom.username"
          placeholder="Username"
          tabindex="1"
          type="text"
        />
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-lock"></i>
        <el-input
          class="input"
          v-model="loginFrom.password"
          placeholder="password"
          tabindex="1"
          type="password"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">Login in</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-in" @click="Login">Login in</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    const validateUserName = (rule, username, callback) => {
      username ? callback() : callback(new Error('请输入用户名'))
    }
    const validatePassword = (rule, password, callback) => {
      if(!password) {
        callback(new Error('请输入密码'))
      } else if (password.length < 6) {
        callback(new Error('密码长度不小于6位'))
      } else{
        callback()
      }
    }
    return {
      loginFrom: { username: "", password: "" },
      loginRules: {
        username: [
          { required: true, trigger: "blur", validator: validateUserName }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/theme.scss";

.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  color: $fontColor;
  text-align: center;
  .el-form >>> .el-form-item__content {
      height: 40px;
      line-height: 40px;
    }
  .el-form {
    display: block;
    width: 500px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 25%);
    i {
      font-size: 25px;
      color: #BDBDBD;
    }
    .el-input {
      width: 70%;
      vertical-align: bottom;
      padding-left: 15px;
    }
  },
  methods: {
    Login() {
      if(this.loginFrom.password && this.loginFrom.username && this.loginFrom.password.length>=6) {
        this.$message.info('inde')
      }
    }
  },
}
</style>