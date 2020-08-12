<template>
  <div class="container">
    <navbar></navbar>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="item in bannerList" :key="item.i" class="slide-1">
        <img :src="'http://localhost:6741/'+item.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
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
        spaceBetween: 30,
        effect: "fade",
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
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