<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="16" style="height:50px">
        <img class="logo" src="../static/logo.png" alt="" @click="back" style="cursor: pointer;">
      </el-col>
      <el-col :span="4">
        <i class="el-icon-user"></i>
        <span v-if="hasLogin" @click="goUser">{{userInfo.name}}</span>
        <span v-show="!hasLogin" @click="login_">登录</span>
        <span v-if="hasLogin" @click="loginout">退出</span>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-goods"></i>
        <span>管理端</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {login} from '../api/admin.js'
import util from '../util/util'
export default {
  name: "navBar",
  data() {
    return {
      navGender: [], // 性别分类
      navSeries: [], // 系列分类
      banner: [], // 轮播图
      dialogStatus: 1, // 弹出框状态： 1登录 | 0注册
      dialogTitle: '登录', // 弹出框标题
      registerVisible: false, // 弹出框显示隐藏 
      registerFrom: {name: '', phone: '', gender: '0', password: '', email: ''}, // 注册信息
      loginForm: {name: '', password: ''}, // 登录信息
      hasLogin: false, // 是否登录
      userInfo: {}, // 用户信息
      hotGoods:[], // 热门商品
      newGoods: [], // 最新商品
      staName: '管理端', // 用户端 || 管理端
    };
  },
  created() {
    if(localStorage.getItem('userInfo')) {
      this.hasLogin = true
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    } else {
      this.$router.push('/adminLogin')
    }
  },
  methods: {
    // 回到首页
    back(){
      this.$router.push('/admin')
    },
    // 前往个人中心
    goUser(){
      this.$router.push('/user')
    },
    // 退出登录
    loginout(){
      this.hasLogin = false
      this.userInfo = {}
      localStorage.removeItem('userInfo')
      this.$router.push('/adminLogin')
    },
    login_(){
      this.$router.push('/adminLogin')
    }
  },
};
</script>
<style lang="scss" scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-around;
}
.header {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: black;
  color: #fff;
  .logo{
    padding-left: 10%;
    height: 50px;
  }
  span {
    padding: 0 10px;
    cursor: pointer;
  }
}
.banner {
  height: 650px;
}
h3 {
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  font-size: 40px;
  text-align: center;
  background: #fff;
  position: relative;
  top: 20px;
}
hr {
  width: 90%;
  margin: 0 auto;
}
.goods-box {
  width: 90%;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .item {
    width: 300px;
    height: 400px;
    margin: 20px 30px;
    cursor: pointer;
    .image {
      display: block;
      width: 220px;
      margin: 0 auto;
    }
    .name {
      width: 280px;
      margin: 0 auto;
      margin-top: 80px;
      font-size: 22px;
      text-align: center;
      overflow: hidden; 
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .item:hover {
    border: 1px solid #333;
  }
}
.activity-con {
  margin-bottom: 50px;
}
.act-title {
  font-size: 25px;
  width: 90%;
  color: #fff;
  background: #333;
  text-align: left;
  margin-top: 50px;
  img {
    display: inline-block;
    margin: 0 20px;
  }
}
.activity-box {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 50px;
  .img {
    width: 350px;
    cursor: pointer;
  }
  .name {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -1px;
    margin: 10px 0;
    cursor: pointer;
    text-align: center;
  }
  .desc {
    font-weight: bold;
    font-size: 25px;
    width: 200px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    color: #fff;
    background: #333;
    text-align: center;
    cursor: pointer;
  }
  .desc:hover {
    color: #333;
    background: rgb(209, 209, 209);
  }
}
.footer-box {
  height: 80px;
  background: black;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.dialog {
  .input {
    width: 80%;
  }
}
</style>
