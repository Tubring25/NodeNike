<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="16">
        <img class="logo" src="../assets/logo.png" alt="">
      </el-col>
      <el-col :span="4">
        <i class="el-icon-user"></i>
        <span v-if="hasLogin">{{userInfo.name}}</span>
        <span v-show="!hasLogin" @click="login(1)">登录</span>/<span v-if="!hasLogin" @click="login(0)">注册</span>
        <span v-if="hasLogin" @click="loginout">退出</span>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-shopping-cart-full"></i>
        <span>购物车</span>
      </el-col>
    </el-row>
    <el-menu class="el-menu-demo" mode="horizontal" @select="navSelect" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu :index="(index).toString()" v-for="(item, index) in navGender" :key="index" :ref="item.id">
        <template slot="title">{{item.name}}</template>
        <div class="subTitle" v-for="(item2, index2) in navSeries" :key="index2">
          <el-menu-item :index="index+'-'+index2" :ref="item2.id">{{item2.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
    <el-carousel :interval="4000" arrow="always" class="banner" height="650px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <!-- <img :src="item.url" alt=""> -->
        <el-image :src="item.url" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>

    <!-- dialog for login and register -->
    <el-dialog class="dialog" :title="dialogTitle" :visible.sync="registerVisible" center width="40%">
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
import {getCategoryType, getCategoryGender, getCategorySeries, getBanner, getGoods, getHotGoods, getNewGoods} from '../api/goods'
import {register,login} from '../api/user.js'
import util from '../util/util'
export default {
  name: "Home",
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
      hotGodds:[], // 热门商品
      newGoods: [], // 最新商品
    };
  },
  created() {
    this.getCategoryType_()
    this.getCategoryGender_()
    this.getCategorySeries_()
    this.getBanner_()
    this.getHotGoods_()
    this.getNewGoods_()
    if(localStorage.getItem('userInfo')) {
      this.hasLogin = true
      this.userInfo = JSON.parse(localStorage.getItem('userInfo'))
    }
  },
  methods: {
    navSelect(inx, indP){
    },
    // 获取商品分类: 分类(服饰 | 鞋类 | 背包)
    getCategoryType_(){
      getCategoryType().then(res=>{
        console.log(typeof(res.data.data[0].cid))
      })
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
    // 获取轮播图
    getBanner_(){
      getBanner().then(res=>{
        this.banner = res.data.data
      })
    },
    // 获取热门商品
    getHotGoods_(){
      getHotGoods().then(res=>{
        this.hotGodds = res.data.data
      })
    },
    // 获取最新商品
    getNewGoods_() {
      getNewGoods().then(res=>{
        this.newGoods = res.data.data
      })
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
  }
  span {
    padding: 0 10px;
    cursor: pointer;
  }
}
.banner {
  height: 650px;
}
.dialog {
  .input {
    width: 250px;
  }
}
</style>
