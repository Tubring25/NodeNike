<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      <div class="item info">
        <h2 class="title">个人信息
          <el-button type="primary" @click="edit">{{editName}}</el-button>
        </h2>
        <div class="detail">
          <p class="name">用户名:<span v-show="!ifEdit">{{userInfo.name}}</span>
            <el-input v-show="ifEdit" v-model="userInfo.name" type="text" placeholder="请输入用户名"></el-input>
          </p>
          <p class="name">邮箱:<span v-show="!ifEdit">{{userInfo.email}}</span>
            <el-input v-show="ifEdit" type="text" v-model="userInfo.email" placeholder="请输入邮箱"></el-input>
          </p>
          <p class="name">性别:<span v-show="!ifEdit">{{gender}}</span>
            <el-radio-group v-show="ifEdit" v-model="userInfo.gender">
              <el-radio label="0">女</el-radio>
              <el-radio label="1">男</el-radio>
            </el-radio-group>
          </p>
          <p class="name">电话号码:<span v-show="!ifEdit">{{userInfo.phone}}</span>
            <el-input v-show="ifEdit" type="text" v-model="userInfo.phone" placeholder="请输入手机号码"></el-input>
          </p>
        </div>
      </div>
      <hr>
      <div class="item pwd">
        <h2 class="title">更改密码</h2>
        <p>请输入原密码:<el-input type="password" placeholder="请输入原密码" v-model="pwd.old"></el-input> </p>
        <p>请输入新密码: <el-input type="password" placeholder="请输入新密码" v-model="pwd.new"></el-input></p>
        <el-button type="primary" @click="resetPwd_">确&nbsp;&nbsp;&nbsp;&nbsp;认</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {updateUser,resetPwd} from '../api/user'
import navBar from '../components/nav'
import util from '../util/util'
export default {
  name: 'user',
  components: {navBar},
  data(){
    return {
      userInfo:{}, // 用户信息
      ifEdit: false, // 是否编辑
      editName: '编辑',
      gender: '', // 性别
      pwd: {old: '', new: ''}, // 密码
    }
  },
  created() {
    if(localStorage.getItem('userInfo')) {
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
      this.userInfo.gender == '0' ? this.gender = '女' : this.gender = '男'
    }
  },
  methods: {
    // 编辑用户信息
    edit(){
      if(this.ifEdit) {
        for (const key in this.userInfo) {
          if(util.trim(this.userInfo[key].toString()) == '') {
            this.$message.error('请检查输入是否完整')
            return
          }
        }
        if (!util.isTel(this.userInfo.phone)){
          this.$message.error('请输出正确手机号')
          return
        }
        if (!util.isEmail(this.userInfo.email)){
          this.$message.error('请输出正确邮箱')
          return
        }
        updateUser(this.userInfo).then(res=>{
          if(res.data.code == 0) {
            this.$message.success('更新成功')
            this.ifEdit = false
            this.editName = '编辑'
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
            this.userInfo.gender == '0' ? this.gender = '女' : this.gender = '男'
          } else {
            this.$message.error('更新失败'+ res.data.msg)
          }
        })

        
      } else {
        this.ifEdit = true
        this.editName = '保存'
      }
    },
    // 更改密码
    resetPwd_(){
      for (const key in this.pwd) {
        if (util.trim(this.pwd[key]) == '') {
          this.$message.error('请输入完整')
          return
        }
      }
      let postData = {id:this.userInfo.id, oldpwd: this.pwd.old, newpwd: this.pwd.new}
      resetPwd(postData).then(res=>{
        if(res.data.code == 0) {
          this.$message.success("修改成功,,请重新登陆")
          localStorage.removeItem("userInfo")
          this.$router.push('/')
        }else{
          this.$message.error(res.data.msg)
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
  position: relative;
  top: 50px;
  border-radius: 10px;
  border: 1px solid black;
  .item {
    margin: 50px 0;
    text-align: center;
    h2 {
      font-size: 35px;
    }
    .el-button {
      vertical-align: middle;
    }
    p{
      padding: 30px 0;
      font-weight: bold;
      font-size: 20px;
      color: black;
      span{
        font-size: 25px;
        color: #3a8ee6;
      }
    }
  }
}
.el-input{
  width: 300px;
}
</style>