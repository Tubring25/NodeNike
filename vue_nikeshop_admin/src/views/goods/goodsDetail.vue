<template>
  <div class="goods-detail-container">
    <div class="info-box">
      <div class="item">
        <span class="title">商品Id</span>
        <span class="info">{{goodsInfo.goods_id}}</span>
      </div>
      <div class="item">
        <span class="title">商品名称</span>
        <span class="info">{{goodsInfo.title}}</span>
      </div>
      <div class="item">
        <span class="title">商品分类</span>
        <span class="info">{{goodsInfo.base_id | parseAllTypeId(base_type)}}</span>
      </div>
      <div class="item"><span class="title">性别</span><span class="info">{{goodsInfo.gender_id | parseAllTypeId(gender_type)}}</span></div>
      <div class="item"><span class="title">运动类别</span><span class="info">{{goodsInfo.sports_id | parseAllTypeId(sports_type)}}</span></div>
      <div class="item"><span class="title">品牌</span><span class="info">{{goodsInfo.brand_id | parseAllTypeId(brands_type)}}</span></div>
      <div class="item"><span class="title"></span></div>
      <div class="item"><span class="title"></span></div>
    </div>
    <table>
      <tr>
        <td>商品Id</td>
        <td>{{goodsInfo.goods_id}}</td>
        <td>商品名称</td>
        <td>{{goodsInfo.title}}</td>
        <td>商品分类</td>
        <td>{{goodsInfo.base_id | parseAllTypeId(base_type)}}</td>
      </tr>
      <tr>
        
      </tr>
    </table>
  </div>
</template>
<script>
import { getGoodsById } from "@/api/goods";
import { mapActions, mapGetters } from 'vuex';
import { tools } from '@/utils/tools';
import { getSession } from '@/utils/tools'
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
    if (!this.$route.query.goods_id) {
      this.$message.error("缺少商品Id");
        setTimeout(() => {
          this.$router.go(-1);
        }, 2000);
    }
    if(this.base_type.length == 0) {
      this.saveType({type:'base', data: getSession('base_type')})
      this.saveType({type:'gender', data: getSession('gender_type')})
      this.saveType({type:'brands', data: getSession('brands_type')})
      this.saveType({type:'sports', data: getSession('sports_type')})
    }
  },
  mounted() {
    setTimeout(() =>{
      this.getGoodsById_(this.$route.query.goods_id);
    }, 1000)
    
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
    ...mapActions([
      'saveType'
    ]),
  },
};
</script>
<style lang="scss" scoped>
.info-box {
  width: 80%;
  margin: 20px auto;
  border: 1px solid rgba($color: #000000, $alpha: 0.2);
  .item {
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid rgba(0,0,0,0.2);
    height: 50px;
    line-height: 50px;
    font-size: 17px;
    .title {
      display: inline-block;
      width: 100px;
      color: rgba($color: #000000, $alpha: 0.7);
      padding:0 20px;
    }
    .info {
      color: #111;
    }
  }
}
</style>