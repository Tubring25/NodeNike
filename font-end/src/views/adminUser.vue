<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="content">
      <el-table class="table" :data="userList" style="width: 80%">
        <el-table-column prop="id" label="ID" width="180"></el-table-column>
        <el-table-column prop="name" label="用户名"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="" label="操作" width="180">
          <template slot-scope="{row}">
            <el-button type="danger" @click="deleteUser_(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import NavBar from '../components/nav2'
import {getGoods} from '../api/goods'
import {getUser, deleteUser} from '../api/admin'
import {getOrder} from '../api/order'

export default {
  components:{NavBar},
  data() {
    return {
      userList: [], // 用户列表
    }
  },
  created() {
    this.getUser_()
  },
  methods: {
    getUser_(){
      getUser().then(res=>{
        this.userList= res.data.data
      })
    },
    deleteUser_(row){
      deleteUser({id:row.id}).then(res=>{
        if(res.data.code == 0) {
          this.$message.success('删除成功')
          this.getUser_()
        } else {
          this.$message.error('删除失败')
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