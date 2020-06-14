<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      
    </div>
  </div>
  
</template>
<script>
import navBar from "../components/nav";
import {getOrder} from '../api/order'
export default {
  components: { navBar },
  data(){
    return {
      orderList: [], // 订单列表
    }
  },
  created() {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      this.$message.info("请先登录");
      return;
    }
    this.getOrder_()
  },
  methods: {
    getOrder_() {
      getOrder({uid: JSON.parse(localStorage.getItem("userInfo")).id}).then(res=>{
        if(res.data.code == 0) {
          this.orderList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    }
  },

}
</script>