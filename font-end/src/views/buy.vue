<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      <el-card class="box-card">
        <div>
          <p>收件人： 
            <span v-if="hasInfo">{{orderUser.name}}</span>
            <el-input v-else v-model="orderUser.name" placeholder="请输入收件人"></el-input>
          </p>
          <p>电话：
            <span v-if="hasInfo">{{orderUser.phone}}</span>
            <el-input v-else v-model="orderUser.phone" placeholder="请输入电话"></el-input>
          </p>
          <p>详细地址：
            <span v-if="hasInfo">{{orderUser.address}}</span>
            <el-input v-else v-model="orderUser.address" placeholder="请输入详细地址"></el-input>
          </p>
          <el-button type="primary" @click="btnClick">{{btnName}}</el-button>
        </div>
      </el-card>
      <div class="item" v-for="item in cartList" :key="item.id">
        <el-col :span="6" class="left">
          <el-image :src="item.goods_img" fit="fit"></el-image>
        </el-col>
        <el-col :span="14" class="middle">
          <p class="title">{{item.goods_title}}</p>
          <span class="price">{{item.num}}件 / ￥{{item.price}}</span>
        </el-col>
      </div>
      <div class="total">
        <el-button type="primary">共{{total}}件</el-button>
        <el-button type="danger" @click="buy_">确认订单</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from "../components/nav";
import {getCart} from '../api/cart';
import {buy} from '../api/order'
export default {
  components: { navBar },
  data() {
    return {
      orderUser:{name:"", address:'', phone:''},// 下单信息
      origin: "", // 来源
      cartList: [], // 购物车列表
      total: "", // 总数
      hasInfo: false, // 是否有收件信息
      btnName: '确定'
    };
  },
  created() {
    this.origin = this.$route.query.origin;
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      this.$message.info("请先登录");
      return;
    }
    if (this.$route.query.origin == "cart") {
      this.getCart_();
    }
  },
  methods: {
    // 获取购物车
    getCart_(){
      getCart({uid: JSON.parse(localStorage.getItem('userInfo')).id}).then(res=>{
        this.cartList = res.data.data
        this.total = this.cartList.length
      })
    },
    buy_(){
      let postData = {}
      postData.uid = JSON.parse(localStorage.getItem('userInfo')).id
      postData.num = this.total
      postData.address = this.orderUser.address
      postData.phone = this.orderUser.phone
      postData.order_name = this.orderUser.name
      postData.goods = this.cartList.map(a=>a.gid).join(',')
      buy(postData).then(res=>{
        if(res.data.code == 0) {
          this.$message.success('下单成功')
          this.$router.push('/')
        }else {
          this.$message.error(res.data.msg)
        }
      })
    },
    btnClick(){
      if (this.btnName == '确定') {
        for (let key in this.orderUser){
          if(this.orderUser[key] == '') {
            this.$message.info('请输入完整')
            return
          }
        }
      }
      this.hasInfo==true ? this.hasInfo = false : this.hasInfo=true
      this.btnName == '编辑' ? this.btnName = '确定' : this.btnName = '编辑'
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  width: 80%;
  margin: 0 auto;
}
.item {
  width: 100%;
  height: 200px;
  margin: 20px 0;
  border: 1px solid lightgray;
}
.left, .middle, .right {
  height: 100%;
  position: relative;
}
.left{
  .el-image{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
.middle {
  .title {
    font-size: 30px;
    padding-top: 30px;
    padding-bottom: 70px;
  }
  .price {
    padding-left: 30px;
    font-size: 35px;
    font-weight: bold;
    color: rgb(250, 75, 75);
  }
}
.right {
  text-align: center;
  line-height: 300px;
  font-size: 30px;
  background: rgba(224, 23, 64,.8);
  color: #fff;
  font-weight: bold;
  letter-spacing: 10px;
  cursor: pointer;
}
.total{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
}
.box-card{
  margin-top: 15px;
  position: relative;
  p{
    padding: 10px 0;
  }
  .el-input {
    width: 300px;
  }
  .el-button {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
}
</style>