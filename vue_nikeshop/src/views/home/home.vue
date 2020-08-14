<template>
  <div class="container">
    <navbar></navbar>
    <el-carousel class="swiper">
      <el-carousel-item v-for="item in bannerList" :key="item.imgUrl">
        <img :src="'http://localhost:6741/'+item.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>
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
    };
  },
  created() {
    this.getBanner_();
    console.log(this.$route.path)
  },
  methods: {
    getBanner_() {
      getBanner().then(res => {
        if (res.code == 1) {
          this.bannerList = res.data;
        }
      });
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
}
</style>