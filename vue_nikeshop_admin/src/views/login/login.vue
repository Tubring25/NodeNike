<template>
  <div class="login-container">
    <el-form ref="login-from" :model="loginFrom" :rules="loginRules"></el-form>
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