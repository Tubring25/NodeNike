<template>
  <div class="container">
    <el-row class="header">
      <el-col :span="16">
        <img class="logo" src="../assets/logo.png" alt="">
      </el-col>
      <el-col :span="4">
        <i class="el-icon-user"></i>
        <span @click="login(1)">登录</span>/<span @click="login(0)">注册</span>
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
    <el-carousel :interval="4000" arrow="always" class="banner" height="750px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <!-- <img :src="item.url" alt=""> -->
        <el-image :src="item.url" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>

    <!-- dialog for login and register -->
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" center>
      <el-form :mode="registerFrom" lable-width="100px">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="registerFrom.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="registerFrom.phone" placeholder="请输入手机号码"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-radio-group v-model="registerFrom.gender">
            <el-radio label="0">女</el-radio>
            <el-radio label="1">男</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" placeholder="请输入密码" v-model="registerFrom.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="registerFrom.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import apiGoods from '../api/goods'
export default {
  name: "Home",
  data() {
    return {
      navGender: [], // 性别分类
      navSeries: [], // 系列分类
      banner: [], // 轮播图
      dialogStatus: 1, // 弹出框状态： 1登录 | 0注册
      dialogTitle: '登录', // 弹出框标题
      dialogVisible: false, // 弹出框显示隐藏 
      registerFrom: {name: '', phone: '', gender: 0, password: '', email: ''}, // 注册信息
      loginForm: {name: '', password: ''}, // 登录信息
    };
  },
  created() {
    this.getCategoryType_()
    this.getCategoryGender_()
    this.getCategorySeries_()
    this.getBanner_()
  },
  methods: {
    navSelect(inx, indP){
    },
    // 获取商品分类: 分类(服饰 | 鞋类 | 背包)
    getCategoryType_(){
      apiGoods.getCategoryType().then(res=>{
        console.log(typeof(res.data.data[0].cid))
      })
    },
    // 获取商品分类: 性别
    getCategoryGender_() {
      apiGoods.getCategoryGender().then(res => {
        this.navGender = res.data.data
      })
    },
    // 获取商品分类: 系列
    getCategorySeries_() {
      apiGoods.getCategorySeries().then(res=>{
        this.navSeries = res.data.data
      })
    },
    getBanner_(){
      apiGoods.getBanner().then(res=>{
        this.banner = res.data.data
      })
    },
    login(type) {
      type == 0 ? this.dialogTitle = '注册' : this.dialogTitle = '登录'
      this.dialogStatus = type
      this.dialogVisible = true
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
</style>
