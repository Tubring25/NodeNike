<template>
  <div class="container">
    <navBar></navBar>
    <el-carousel :interval="4000" arrow="always" class="banner" height="650px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <!-- <img :src="item.url" alt=""> -->
        <el-image :src="item.url" fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
    <h3>热门商品</h3>
    <hr>
    <div class="goods-box">
      <div class="item" v-for="item in hotGoods" :key="item.id" @click="goodsDetail(item.id)">
        <el-image class="image" :src="item.imgurl" fit="fill"></el-image>
        <p class="name">{{item.name}}</p>
        <p class="price">¥{{item.price}}</p>
      </div>
    </div>
    <h3>最新商品</h3>
    <hr>
    <div class="goods-box">  
      <div class="item" v-for="item in newGoods" :key="item.id" @click="goodsDetail(item.id)">
        <el-image class="image" :src="item.imgurl" fit="fill"></el-image>
        <p class="name">{{item.name}}</p>
        <p class="price">¥{{item.price}}</p>
      </div>
    </div>

    <div class="activity-con">
      <h3 class="act-title"><img src="../static/mini-logo.png" alt=""> 至酷精选 玩转潮流</h3>
      <div class="activity-box">
        <div class="activity">
          <img class="img" src="../static/act1.jpg" alt="">
          <div class="name">ALL STAR</div>
          <div class="desc">查看更多 ></div>
        </div>
        <div class="activity">
          <img class="img" src="../static/act2.jpg" alt="">
          <div class="name">CHUCK 70</div>
          <div class="desc">查看更多 ></div>
        </div>
        <div class="activity">
          <img class="img" src="../static/act3.jpg" alt="">
          <div class="name">JACK PURCELL</div>
          <div class="desc">查看更多 ></div>
        </div>
      </div>
    </div>
    <div class="footer-box">
      <img class="footer" src="../static/logo.png" alt="">
    </div>
    <!-- dialog for login and register -->
  </div>
</template>

<script>
import {getCategoryGender, getCategorySeries, getBanner, getGoods, getHotGoods, getNewGoods} from '../api/goods'
import {register,login} from '../api/user.js'
import util from '../util/util'
import navBar from '../components/nav'
export default {
  name: "Home",
  components:{navBar},
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
      console.log(inx, indP)
    },
    // 前往商品详情页
    goodsDetail(goodsId){
      this.$router.push({path:'./goodsDetail', query:{goodsId: goodsId}})
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
        this.hotGoods = res.data.data
      })
    },
    // 获取最新商品
    getNewGoods_() {
      getNewGoods().then(res=>{
        this.newGoods = res.data.data
      })
    },
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
