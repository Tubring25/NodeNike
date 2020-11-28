<template>
  <div class="goods-detail-container">
    商品详情
  </div>
</template>
<script>
import {getGoodsById} from '@/api/goods'
export default {
  data() {
    return {
      goodsInfo: {}, 
    }
  },
  created() {
    if(this.$route.query.goods_id) {
      this.getGoodsById_(this.$route.query.goods_id)
    } else {
      this.$alert('缺少商品Id', '', {
        confirmButtonText: '确定',
        callbace: action => {
          // this.$router.go(-1)
          console.log(this.$router);
        }
      })
    }
  },
  methods: {
    getGoodsById_(id){
      getGoodsById({goods_id:id}).then(res=>{
        if(res.code == 1) {
          console.log(res);
        }
      })      
    }
  },
}
</script>