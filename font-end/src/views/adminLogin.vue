<template>
  <div class="container" ref="container">
    <h1>Login</h1>
    <div class="loginForm">
      <div class="div">
        <span>UserName</span>
        <input type="text" v-model="loginForm.name">
      </div>
      <div class="div">
        <span>Password</span>
        <input type="password" v-model="loginForm.password">
      </div>
      <div class="div">
        <el-button type="primary" @click="login_" style="background: #111;color:#fff;border:1px solid #111">Confirm</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {login} from '../api/admin'
export default {
  data() {
    return {
      loginForm: {
        name: "",
        password: ""
      }
    };
  },
  created() {},
  mounted() {
    this.$refs.container.style.height = window.innerHeight + "px";
  },
  methods: {
    login_() {
      if (this.loginForm.name == "") {
        this.$message.error("请输入登录名");
        return;
      }
      if (this.loginForm.password == "") {
        this.$message.error("请输入密码");
        return;
      }
      login(this.loginForm).then(res=>{
        if(res.data.code ==0){
          this.$message.success('登录成功')
          localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          this.$router.push('/admin')
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  background: #fff;
  h1 {
    margin: 0;
    text-align: center;
    position: relative;
    top: 200px;
  }
  .loginForm {
    display: block;
    width: 500px;
    margin: 0 auto;
    color: #333 !important;
    position: relative;
    top: 250px;
    .div{
      margin: 30px 0;
      span {
        display: inline-block;
        width: 100px;
        font-size: 18px;
      }
      .el-button {
        display: block;
        margin: 0 auto;
      }
      input {
        width: 300px;
        display: inline-block;
        height: 35px;
        line-height: 35px;
        border: 1px solid lightgray;
        border-radius: 5px;
        background: rgba(129, 129, 129, 0.5);
        color: #fff;
      }
    }
    .el-input {
      width: 300px;
    }
  }
}
</style>