<template>
  <div class="container">
    <navbar></navbar>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in bannerList" :key="item.id" class="slide-1">
        <img :src="'http://localhost:6741/'+item.imgUrl" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import navbar from "@/components/navbar/navbar";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.scss";
import { getBanner } from "@/api/common";
export default {
  components: { navbar, Swiper, SwiperSlide},
  data() {
    return {
      bannerList: [],
      swiperOption: {
        autoplay: true
      }
    };
  },
  created() {
    this.getBanner_();
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
  max-height: 500px;
  img{
    width: 100%;
    height: 100%;
    max-height: 500px;
  }
}
</style>