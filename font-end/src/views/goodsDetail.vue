<template>
  <div class="container">
    <div class="content">
      <img class="img" :src="goodsInfo.imgurl">
      <div class="info">
        <p class="title">{{goodsInfo.name}}</p>
        <p class="price"><span>价格：￥</span>{{goodsInfo.price}}</p>
        <p class="num"><span>数量： </span>
          <el-input-number class="number" v-model="num" :min="1" :max="100" size="small" :precision="0"></el-input-number>
        </p>
        <div class="btn-box">
          <div class="btn cart">加入购物车</div>
          <div class="btn buy">立即购买</div>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import {getSingleGood} from '../api/goods'
export default {
  data(){
    return {
      goodsId: '', // 商品id
      goodsInfo: {}, // 商品信息
      num: '', // 数量
    }
  },
  created() {
    // console.log(this.$route.query)
    this.goodsId = this.$route.query.goodsId
    this.getSingleGood_()
  },
  methods: {
    getSingleGood_() {
      getSingleGood({id: this.goodsId}).then(res=>{
        this.goodsInfo = res.data.data
      })      
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
</style>