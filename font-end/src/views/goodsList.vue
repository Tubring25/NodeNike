<template>
  <div class="container">
    <navBar @changeList="changeList"></navBar>
    <div class="content">
      <div class="goods-box">
        <div class="item" v-for="item in goodsList" :key="item.id" @click="goodsDetail(item.id)">
          <el-image class="image" :src="item.imgurl" fit="fill"></el-image>
          <p class="name">{{item.name}}</p>
          <p class="price">¥{{item.price}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navBar from '../components/nav'
import {getGoods} from '../api/goods';
export default {
  components: {navBar},
  data() {
    return {
      searchData: {gid: '', sid: '', page: 1, pageSize: 10}, // 查询条件
      goodsList: [], // 商品数据
    }
  },
  created() {
    console.log(this.$route.query)
    this.searchData.gid = this.$route.query.gid
    this.searchData.sid = this.$route.query.sid
    this.getGoods_(this.searchData)
  },
  methods: {
    changeList(data){
      console.log(data)
      this.searchData.gid = data.gid
      this.searchData.sid = data.sid
      this.getGoods_(this.searchData)
    },
    getGoods_(data){
      getGoods(data).then(res=>{
        if(res.data.code == 0) {
          if(res.data.data.length == 0) {
            this.$message.info('暂无数据')
          } else {
            this.goodsList = res.data.data
          }
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    // 前往商品详情页
    goodsDetail(goodsId){
      this.$router.push({path:'./goodsDetail', query:{goodsId: goodsId}})
    },
  },
}
</script>
<style lang="scss" scoped>
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
      padding-top: 80px;
      font-size: 22px;
      text-align: center;
      overflow: hidden; 
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .price {
      padding: 20px 0;
      text-align: center;
      font-weight: bold;
      font-size: 20px;
    }
  }
  .item:hover {
    border: 1px solid #333;
  }
}
</style>