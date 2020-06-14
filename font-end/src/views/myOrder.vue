<template>
  <div class="container">
    <navBar></navBar>
    <div class="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="order_time" label="下单时间" width="180"></el-table-column>
        <el-table-column prop="order_name" label="收件人姓名" width="180"></el-table-column>
        <el-table-column prop="phone" label="收件人电话" width="180"></el-table-column>
        <el-table-column prop="address" label="收件人地址" width="180"></el-table-column>
        <el-table-column prop="is_finish" label="订单状态" width="180">
          <el-tag>进行中</el-tag>
          <el-tag type="success">已完成</el-tag>
          <el-tag type="danger">已取消</el-tag>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import navBar from "../components/nav";
import { getOrder } from "../api/order";
export default {
  components: { navBar },
  data() {
    return {
      orderList: [] // 订单列表
    };
  },
  created() {
    if (!JSON.parse(localStorage.getItem("userInfo"))) {
      this.$message.info("请先登录");
      return;
    }
    this.getOrder_();
  },
  methods: {
    getOrder_() {
      getOrder({ uid: JSON.parse(localStorage.getItem("userInfo")).id }).then(
        res => {
          if (res.data.code == 0) {
            this.orderList = res.data.data;
          } else {
            this.$message.error(res.data.msg);
          }
        }
      );
    }
  }
};
</script>