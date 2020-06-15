<template>
  <div class="container">
    <NavBar></NavBar>
  </div>
</template>
<script>
import NavBar from '../components/nav2'
import {getGoods} from '../api/goods'
import {getUser} from '../api/admin'
import {getOrder} from '../api/order'

export default {
  components:{NavBar},
  data() {
    return {
      goodsLen: 0, // 商品数量
      userLen: 0, // 用户数量
      orderLen: 0, // 订单数量
    }
  },
  methods: {
    getGoods_(){
      getGoods().then(res=>{
        if(res.data.code == 0)
      })
    }
  },
}
</script>