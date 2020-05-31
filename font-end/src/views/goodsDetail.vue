<template>
  <div class="container">
    <div class="content">

    </div>
  </div>
</template>
<script>
import {getSingleGood} from '../api/goods'
export default {
  data(){
    return {
      goodsId: '', // 商品id
      goodsInfo: {}, // 商品信息
    }
  },
  created() {
    // console.log(this.$route.query)
    this.goodsId = this.$route.query.goodsId
    this.getSingleGood_()
  },
  methods: {
    getSingleGood_() {
      getSingleGood({id: this.goodsId}).then(res=>{
        console.log(res.data.data)
      })      
    }
  },
}
</script>