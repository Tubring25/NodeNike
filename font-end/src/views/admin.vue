<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="content">
      <el-card class="item" shadow="hover" >
        <img src="../assets/01.png" alt="" @click="go(1)">
        <span @click="go(1)">商品数量<br><br>{{goodsLen}}</span>
      </el-card>
      <el-card class="item" shadow="hover" >
        <img src="../assets/02.png" alt="" @click="go(2)">
        <span @click="go(2)">用户数量<br><br>{{userLen}}</span>
      </el-card>
      <el-card class="item" shadow="hover">
        <img src="../assets/03.png" alt="" @click="go(3)">
        <span @click="go(3)">订单数量<br><br>{{orderLen}}</span>
      </el-card>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/nav2'
import {getGoods} from '../api/goods'
import {getUser} from '../api/admin'
import {getOrder} from '../api/order'

export default {
  components:{NavBar},
  data() {
    return {
      goodsLen: 0, // 商品数量
      userLen: 0, // 用户数量
      orderLen: 0, // 订单数量
    }
  },
  created() {
    this.getGoodsList()
    this.getUserList()
    this.getOrderList()
  },
  methods: {
    getGoodsList(){
      getGoods().then(res=>{
        if(res.data.code == 0) {
          this.goodsLen = res.data.data.length
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    getUserList(){
      getUser().then(res=>{
        if(res.data.code == 0) {
          this.userLen = res.data.data.length
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    getOrderList(){
      getOrder().then(res=>{
        if(res.data.code == 0) {
          this.orderLen = res.data.data.length
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    go(type) {
      switch (type) {
        case 1:
          this.$router.push('/adminGoods')
          break;
        case 2:
          this.$router.push('/adminUser')
          break;
        case 3:
          this.$router.push('/adminOrder')
          break;
      }
    }
    
  },
}
</script>
<style lang="scss" scoped>
.content{
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
.item {
  margin-top: 30px;
  span {
    display: inline-block;
    vertical-align: top;
    padding-left: 100px;
    font-size: 25px;
    font-weight: bold;
    color: tomato;
  }
}
</style>