<template>
  <div class="container">
    <navbar></navbar>
    <div class="banner-box">
      <el-carousel class="swiper">
        <el-carousel-item v-for="item in bannerList" :key="item.imgUrl">
          <img :src="'http://localhost:6741/'+item.imgUrl" alt="">
          <div class="title-box">
            <p class="title">{{item.title}}</p>
            <p class="desc">{{item.desc}}</p>
            <p class="btn">立即选购</p>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar/navbar";
import { getBanner } from "@/api/common";
export default {
  components: {navbar},
  data() {
    return {
      bannerList: [],
      currentPath: '',
    };
  },
  watch: {
    $route() {
      this.getBanner_()
    }
  },
  created() {
    this.getBanner_();
  },
  methods: {
    getBanner_() {
      this.currentPath = this.$route.path
      let query = {gender: ''}
      switch(this.currentPath) {
        case '/women':
          query.gender = '0'
          break
        case '/men':
          query.gender = '1'
          break
        case '/child':
          query.gender = '2'
          break
      }
      if(this.currentPath == '/') {
        getBanner().then(res => {
          if (res.code == 1) {
            this.bannerList = res.data;
          }
        });
      } else {
        getBanner(query).then(res=> {
          if (res.code == 1) {
            this.bannerList = res.data;
          }
        })
      }  
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 500px;
  img{
    width: 100%;
    height: 100%;
    height: 500px;
  }
}
.el-carousel /deep/.el-carousel__container{
  height: 100% !important;
  position: relative;
  .title-box {
    position: absolute;
    bottom: 10px;
    left: 50px;
    background: rgba(221, 221, 221, .5);
    border-radius: 10px;
    p{
      margin: 10px 15px;
    }
    .title {
      height: 50px;
      line-height: 50px;
      font-size: 30px;
    }
    .desc{
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      color: #333;
    }
    .btn {
      width: 130px;
      height: 40px;
      font-size: 17px;
      line-height: 40px;
      border-radius: 20px;
      background: #000;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
    .btn:hover {
      background: #333;
    }
  }
}
</style>