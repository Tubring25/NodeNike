<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="16" style="height:50px">
        <img class="logo" src="../static/logo.png" alt="" @click="back" style="cursor: pointer;">
      </el-col>
      <el-col :span="4">
        <i class="el-icon-user"></i>
        <span v-if="hasLogin" @click="goUser">{{userInfo.name}}</span>
        <span v-show="!hasLogin" @click="login(1)">登录</span>/<span v-if="!hasLogin" @click="login(0)">注册</span>
        <span v-if="hasLogin" @click="loginout">退出</span>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-shopping-cart-full"></i>
        <span @click="goShopCart">购物车</span>
      </el-col>
      <el-col :span="2">
        <i class="el-icon-goods"></i>
        <span @click="goShopCart">订单</span>
      </el-col>
    </el-row>
    <el-menu class="el-menu-demo" mode="horizontal" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu :index="(index).toString()" v-for="(item, index) in navGender" :key="index" :ref="item.id">
        <template slot="title">{{item.name}}</template>
        <div class="subTitle" v-for="(item2, index2) in navSeries" :key="index2">
          <el-menu-item :index="index+'-'+index2" :ref="item2.id" @click="navSelect(index,index2)">{{item2.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
    <!-- dialog for login and register -->
    <el-dialog class="dialog" :title="dialogTitle" :visible.sync="registerVisible" center width="35%">
      <el-form :mode="loginForm" label-width="120px" label-position="right" v-if="dialogStatus === 1">
        <el-form-item label="用户名" prop="name">
          <el-input class="input" v-model="loginForm.name" placeholder="请输入用户名" maxlength="30"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input class="input" type="password" placeholder="请输入密码" maxlength="30" v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <el-form :mode="registerFrom" label-width="120px" label-position="right" v-else>
        <el-form-item label="用户名" prop="name">
          <el-input class="input" v-model="registerFrom.name" placeholder="请输入用户名" maxlength="30"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input class="input" v-model="registerFrom.phone" placeholder="请输入手机号码" maxlength="30"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="registerFrom.gender">
            <el-radio label="0">女</el-radio>
            <el-radio label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input class="input" type="password" placeholder="请输入密码" maxlength="30" v-model="registerFrom.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input class="input" v-model="registerFrom.email" placeholder="请输入邮箱" maxlength="30"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="registerVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {getCategoryGender, getCategorySeries, getBanner, getGoods, getHotGoods, getNewGoods} from '../api/goods'
import {register,login} from '../api/user.js'
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
    };
  },
  created() {
    this.getCategoryGender_()
    this.getCategorySeries_()
    if(localStorage.getItem('userInfo')) {
      this.hasLogin = true
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    // 前往购物车
    goShopCart(){
      if(this.userInfo.id) {
        this.$router.push('/shoppingCart')
      } else {
        this.$message.info('请先登录')
      }
    },
    // 回到首页
    back(){
      this.$router.push('/')
    },
    // 筛选
    navSelect(ind1, ind2){
      if(this.$route.path == '/goodsList') {
        this.$emit('changeList', {gid: this.navGender[ind1].gid, sid: this.navSeries[ind2].sid})
      } else {
        this.$router.push({path: '/goodsList', query:{gid: this.navGender[ind1].gid, sid: this.navSeries[ind2].sid}})
      }
    },
    // 获取商品分类: 性别
    getCategoryGender_() {
      getCategoryGender().then(res => {
        this.navGender = res.data.data
      })
    },
    // 获取商品分类: 系列
    getCategorySeries_() {
      getCategorySeries().then(res=>{
        this.navSeries = res.data.data
      })
    },
    // 前往个人中心
    goUser(){
      this.$router.push('/user')
    },
    // 展示弹出框
    login(type) {
      type == 0 ? this.dialogTitle = '注册' : this.dialogTitle = '登录'
      this.dialogStatus = type
      this.registerVisible = true
    },
    // Dialog确认
    dialogConfirm() {
      if (this.dialogStatus == 0) {
        for (const key in this.registerFrom) {
          if(util.trim(this.registerFrom[key]) == ''){
            this.$message.error('请检查输入是否完整')
            return
          }
        }
        if (!util.isTel(this.registerFrom.phone)){
          this.$message.error('请输出正确手机号')
          return
        }
        if (!util.isEmail(this.registerFrom.email)){
          this.$message.error('请输出正确邮箱')
          return
        }
        register(this.registerFrom).then(res=>{
          if (res.data.code == 0 ) {
            this.$message.success('注册成功, 请登录')
            this.registerFrom = {name: '', phone: '', gender: '0', password: '', email: ''}
            this.dialogStatus = 1
          } else if (res.data.code == 2) {
            this.$confirm('该手机号已被注册, 是否跳转登录?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.registerFrom = {name: '', phone: '', gender: '0', password: '', email: ''}
              this.dialogStatus = 1
            })
          } else {
            this.$message.error(res.data.msg)
          }
        })
        
      } else {
        if(util.trim(this.loginForm.name)=='') {
          this.$message.error('请输入用户名')
          return
        }
        if(util.trim(this.loginForm.password)=='') {
          this.$message.error('请输入密码')
          return
        }
        login(this.loginForm).then(res=>{
          console.log(res);
          if(res.data.code == 2){
            this.$confirm('用户不存在, 是否跳转注册?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.loginForm = {name: '', password: ''}
              this.dialogStatus = 0
            })
          } else if (res.data.code == 0) {
            this.loginForm = {name: '', password: ''}
            this.$message.success('登陆成功')
            this.hasLogin = true
            this.userInfo = res.data.data
            this.registerVisible = false
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))
          } else {
            this.$message.error(res.data.msg)
          }
        })
      }
    },
    // 退出登录
    loginout(){
      this.hasLogin = false
      this.userInfo = {}
      localStorage.removeItem('userInfo')
      this.$router.push('/')
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
