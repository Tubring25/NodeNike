<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="content">
      <el-table class="table" :data="orderList" style="width: 80%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="order_time" label="下单时间"></el-table-column>
        <el-table-column prop="order_name" label="收件人姓名"></el-table-column>
        <el-table-column prop="phone" label="收件人电话"></el-table-column>
        <el-table-column prop="address" label="收件人地址"></el-table-column>
        <el-table-column prop="is_finish" label="订单状态">
          <template slot-scope="{row}">
            <el-tag v-show="row.is_finish==0">进行中</el-tag>
            <el-tag v-show="row.is_finish==1" type="success">已完成</el-tag>
            <el-tag v-show="row.is_finish==2" type="danger">已取消</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_finish" label="操作" width="180">
          <template slot-scope="{row}">
            <el-button type="primary" v-show="row.is_finish==0" @click="handleGoods(row, 1)">完成</el-button>
            <el-button type="info" v-show="row.is_finish==1" @click="handleGoods(row, 0)">取消</el-button>
            <el-button type="danger" @click="deleteOrder_(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/nav2'
import {getGoods} from '../api/goods'
import {deleteOrder,updateOrder} from '../api/admin'
import {getOrder} from '../api/order'

export default {
  components:{NavBar},
  data(){
    return {
      orderList:[], // 订单列表
    }
  },
  created() {
    this.getOrder_()
  },
  methods: {
    getOrder_(){
      getOrder().then(res=>{
        if(res.data.code ==0){
          this.orderList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    deleteOrder_(row){
      deleteOrder({id:row.id}).then(res=>{
        if(res.data.code == 0) {
          this.$message.success('删除成功')
          this.getOrder_()
        } else {
          this.$message.error('删除失败')
        }
      })
    },
    handleGoods(row, type) {
      updateOrder({id: row.id, status: type}).then(res=>{
        if(res.data.code == 0) {
          this.$message.success('更新成功')
          this.getOrder_()
        } else {
          this.$message.error('更新失败')
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.table {
  width: 80%;
  margin: 0 auto;
  border: 1px solid lightgray;
  margin-top: 50px;
}
</style>