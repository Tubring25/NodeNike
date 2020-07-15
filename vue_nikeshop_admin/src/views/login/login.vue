<template>
  <div ref="login-container" class="login-container">
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
        <el-button type="primary" class="login-in" @click="Login" :disabled="btnDisable">Login in</el-button>
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
      },
      btnDisable: false
    };
  },
  mounted() {
    this.$refs['login-container'].style.height = document.documentElement.clientHeight + 'px'
  },
  methods: {
    Login() {
      this.btnDisable = true
      if(this.loginFrom.password && this.loginFrom.username && this.loginFrom.password.length>=6) {
        this.$store.dispatch('user/login', this.loginFrom).then(res=>{
          this.btnDisable = false
          if(res.code == 1) {
            this.$router.push('/')
            this.$store.dispatch('user/getUserInfo')
          }
        })
      }
    }
  },
};
</script>
<style lang="scss" scoped>
@import "../../style/theme.scss";

.login-container {
  background-color: $deepBg;
  width: 100%;
  height: 100%;
  position: relative;
  color: #BDBDBD;
  text-align: center;
  .el-form {
    display: block;
    width: 600px;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 30%);
    .title {
      font-size: 35px;
    }
    i {
      font-size: 25px;
      color: #BDBDBD;
    }
    .el-input {
      width: 70%;
      vertical-align: bottom;
      padding-left: 15px;
    }
    .el-button--primary {
      background-color: $bg;
      border: #fff;
    }
  }
}
</style>