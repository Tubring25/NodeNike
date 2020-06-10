<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      <img class="img" :src="goodsInfo.imgurl">
      <div class="info">
        <p class="title">{{goodsInfo.name}}</p>
        <p class="price"><span>价格：￥</span>{{goodsInfo.price}}</p>
        <p class="num"><span>数量： </span>
          <el-input-number class="number" v-model="num" :min="1" :max="100" size="small" :precision="0"></el-input-number>
        </p>
        <div class="btn-box">
          <div class="btn cart" @click="addCart_">加入购物车</div>
          <div class="btn buy">立即购买</div>
        </div>
      </div>
    </div>
    <h3>推荐商品</h3>
    <hr>
    <div class="more">
      <div class="item" v-for="(item,index) in randomGoods" :key="index" @click="getSingleGood_(item.id)">
        <img :src="item.imgurl" alt="">
        <el-tooltip class="item" effect="dark" :content="item.name" placement="top" style="width:100%">
          <p class="name">{{item.name}}</p>
        </el-tooltip>
      </div>
    </div>

  </div>
</template>
<script>
import {getSingleGood,getRandomGoods} from '../api/goods'
import {addCart} from '../api/cart'

import navBar from '../components/nav'
export default {
  components:{navBar},
  data(){
    return {
      goodsId: '', // 商品id
      goodsInfo: {}, // 商品信息
      num: '', // 数量
      randomGoods: [], // 随机商品
    }
  },
  created() {
    // console.log(this.$route.query)
    this.goodsId = this.$route.query.goodsId
    this.getSingleGood_(this.goodsId)
    this.getRandomGoods_()
  },
  methods: {
    // 获取商品详情
    getSingleGood_(goodsId) {
      getSingleGood({id: goodsId}).then(res=>{
        this.goodsInfo = res.data.data
        this.getRandomGoods_()
      })      
    }, 
    // 获取随即商品
    getRandomGoods_(){
      getRandomGoods().then(res=>{
        this.randomGoods = res.data.data
      })
    },
    // 添加购物车
    addCart_(){
      if(!JSON.parse(localStorage.getItem('userInfo'))){
        this.$message.info('请先登录')
        return
      } else {
        let that = this
        let postData ={
          uid: JSON.parse(localStorage.getItem('userInfo')).id,
          gid: that.goodsInfo.id,
          num: that.num,
          goods_title: that.goodsInfo.name,
          goods_img: that.goodsInfo.imgurl,
          price: that.num * that.goodsInfo.price
        }
        addCart(postData).then(res => {
          res.data.code == 0 ? this.$message.success("添加成功") : this.$message.success('添加失败')
        })
      }
    }
  },
}
</script>
<style lang="scss" scoped>
.content{
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .img {
    width: 300px;
    height: 300px;
    vertical-align: top;
  }
  .info {
    width: 50%;
    padding-left: 10%;
    .title {
      padding: 50px 0 40px 0;
      font-size: 30px;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .price {
      font-size: 28px;
      color: rgb(240, 38, 38);
      font-weight: bold;
      padding: 0 0 30px 0;
      span {
        font-size: 20px;
      }
    }
    .num {
      font-size: 20px;
      padding: 0 0 60px 0; 
      .number{
        height: 20px;
      }
    }
    .btn-box{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      .btn {
        width: 150px;
        font-size: 20px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
      }
      .cart {
        border: 1px solid rgb(240, 38, 38);
        color: rgb(240, 38, 38);
      }
      .cart:hover {
        background: rgb(240, 38, 38);
        color: #ffffff;
      }
      .buy {
        background: rgb(240, 38, 38);
        color: #ffffff;
        border: 1px solid rgb(240, 38, 38);
      }
      .buy:hover {
        background: #fff;
        color: rgb(240, 38, 38);
      }
    }
  }
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
.more {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .item {
    width: 20%;
    cursor: pointer;
    img {
      width: 100%;
    }
    .name {
      padding: 30px 0;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
      font-size: 18px;
    }
  }
}
</style>