<template>
  <div class="login-container">
    <el-form ref="login-form" :model="loginFrom" :rules="loginRules">
      <h3 class="title">Login</h3>
      <el-form-item prop="username">
        <i class="el-icon-user"></i>
        <el-input class="input" v-model="loginFrom.username" placeholder="Username" tabindex="1" type="text" />
      </el-form-item>
      <el-form-item prop="password">
        <i class="el-icon-lock"></i>
        <el-input class="input" v-model="loginFrom.password" placeholder="password" tabindex="1" type="password" />
      </el-form-item>
      <el-form-item></el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data(){
    const validateUserName = (rule, username, callback) => {
      if (!username) {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, password, callback) => {
      // if(!password) {
      //   callback(new Error('请输入密码'))
      // } else {
      //   callback()
      // }
      password ? callback() : callback(new Error('请输入密码'))
    }
    return {
      loginFrom: {username: '', password: ''},
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUserName }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      }
    }
  }
}
</script>