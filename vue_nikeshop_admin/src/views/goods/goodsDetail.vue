<template>
  <div class="goods-detail-container">
    <div class="info-box">
      <div class="item">
        <span class="title">商品Id</span>
        <span class="info">{{goodsInfo.goods_id}}</span>
      </div>
      <div class="item">
        <div class="item">
        <span class="title">商品名称</span>
        <span class="info">{{goodsInfo.title}}</span>
      </div>
      </div>
      <div class="item">
        <span class="title">商品分类</span>
      </div>
      <div class="item"><span class="title"></span></div>
      <div class="item"><span class="title"></span></div>
      <div class="item"><span class="title"></span></div>
      <div class="item"><span class="title"></span></div>
      <div class="item"><span class="title"></span></div>
    </div>
  </div>
</template>
<script>
import { getGoodsById } from "@/api/goods";
export default {
  data() {
    return {
      goodsInfo: {},
      infoKeys: [],
    };
  },
  created() {
    if (this.$route.query.goods_id) {
      this.getGoodsById_(this.$route.query.goods_id);
    } else {
      this.$message.error("缺少商品Id");
      setTimeout(() => {
        this.$router.go(-1);
      }, 2000);
    }
  },
  methods: {
    getGoodsById_(id) {
      getGoodsById({ goods_id: id }).then((res) => {
        if (res.code == 1) {
          this.goodsInfo = res.data[0];
          this.infoKeys = Object.keys(this.goodsInfo);
        }
      });
    },
  },
};
</script>