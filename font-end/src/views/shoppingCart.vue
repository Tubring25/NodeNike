<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      <div class="item" v-for="(item, index) in cartList" :key="item.id">
        <el-col :span="6" class="left">
          <el-image :src="item.goods_img" fit="fit"></el-image>
        </el-col>
        <el-col :span="14" class="middle">
          <p class="title">{{item.goods_title}}</p>
          <el-input-number class="number" v-model="item.num" :min="1" :max="100" size="small" :precision="0" @change="handleSingle(index)"></el-input-number>
          <span class="price">￥{{item.price}}</span>
        </el-col>
        <el-col :span="4" class="right">
          <div @click="deleteItem(item)">删除</div>
        </el-col>
      </div>
      <div class="total">
        <el-button type="primary">共{{total}}件</el-button>
        <el-button type="danger">立即下单</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from '../components/nav'
import {addCart, getCart, deleteCart} from '../api/cart'
export default {
  components:{navBar},
  data(){
    return {
      cartList: [], // 购物车列表
      total: '', // 总数
    }
  },
  created() {
    if(!JSON.parse(localStorage.getItem('userInfo'))){
      this.$message.info('请先登录')
      return
    }
    this.getCart_()
  },
  methods: {
    // 获取购物车
    getCart_(){
      getCart({uid: JSON.parse(localStorage.getItem('userInfo')).id}).then(res=>{
        for(const i in res.data.data) {
          res.data.data[i].singlePirce = res.data.data[i].price / res.data.data[i].num
        }
        this.cartList = res.data.data
        this.total = this.cartList.length
      })
    },
    // 单个操作
    handleSingle(ind){
      this.cartList[ind].price = this.cartList[ind].num * this.cartList[ind].singlePirce
      let postData = {}
      postData = Object.assign(this.cartList[ind], {})
      postData.uid = this.cartList[ind].user_id
      addCart(postData).then(res=>{

      })
    },
    // 删除
    deleteItem(item) {
      let postData = {uid: item.user_id, gid: item.gid}
      deleteCart(postData).then(res=>{
        if(res.data.code == 0) {
          this.$message.success('删除成功')
          this.getCart_()
        } else {
          this.$message.error('删除失败，请稍后重试')
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
}
.item {
  width: 100%;
  height: 300px;
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
    padding-bottom: 120px;
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
</style>