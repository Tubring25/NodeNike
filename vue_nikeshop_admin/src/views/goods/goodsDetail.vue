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
        <span class="info">{{goodsInfo.base_id | parseAllTypeId(base_type)}}</span>
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
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      goodsInfo: {},
      infoKeys: [],
    };
  },
  filters: {
    parseAllTypeId(id, type) {
      return (type.filter(a=>a.id == id))[0].name
    }
  },
  computed: {
    ...mapGetters([
      'base_type',
      'gender_type',
      'brands_type',
      'sports_type'
    ])
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
          setTimeout(()=>{
            console.log(this.base_type)
          },3000)
        }
      });
    },
  },
};
</script>