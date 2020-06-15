<template>
  <div class="container" ref="container">
    <h1>Login</h1>
    <div class="loginForm">
      <div class="div">
        <span>UserName</span>
        <el-input v-model="loginForm.name"></el-input>
      </div>
      <div class="div">
        <span>Password</span>
        <el-input type="password" v-model="loginForm.password"></el-input>
      </div>
      <div class="div">
        <el-button type="primary" @click="login_">Confirm</el-button>
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
  background: #2d3a4b;
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
    color: #eee !important;
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
    }
    .el-input {
      width: 300px;
    }
  }
}
</style>