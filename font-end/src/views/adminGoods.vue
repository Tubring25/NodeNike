<template>
  <div class="container">
    <NavBar></NavBar>
    <div class="content">
      <el-table class="table" :data="goodsList" style="width: 100%">
        <el-table-column prop="id" label="ID" width="50"></el-table-column>
        <el-table-column prop="name" label="商品名称" width="280">
          <template slot-scope="{row}">
            <el-tooltip class="item" effect="dark" :content="row.name" placement="top-start">
              <span>{{row.name}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="desc" label="描述" width="250">
           <template slot-scope="{row}">
            <el-tooltip class="item" effect="dark" :content="row.desc" placement="top-start">
              <span>{{row.desc}}</span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column prop="cidName" label="分类"></el-table-column>
        <el-table-column prop="gidName" label="性别"></el-table-column>
        <el-table-column prop="sidName" label="系列"></el-table-column>
        <el-table-column prop="is_finish" label="操作" width="200">
          <template slot-scope="{row}">
            <!-- <el-button type="primary" @click="editGoods(row)">编辑</el-button> -->
            <el-button type="danger" @click="deleteGoods(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import NavBar from "../components/nav2";
import { getGoods } from "../api/goods";
import { getUser, deleteGoods } from "../api/admin";
import { getOrder } from "../api/order";

export default {
  components: { NavBar },
  data(){
    return {
      goodsList: [], // 商品列表
    }
  },
  created() {
    this.getGoods_()
  },
  methods: {
    getGoods_(){
      getGoods().then(res=>{
        if(res.data.code == 0) {
          for(const i in res.data.data) {
            switch (res.data.data[i].cid) {
              case 1:
                res.data.data[i].cidName = '鞋类'
                break;
              case 2:
                res.data.data[i].cidName = '服饰'
                break;
              case 3:
                res.data.data[i].cidName = '背包'
                break;
              default:
                break;
            }
            switch (res.data.data[i].gid) {
              case 1:
                res.data.data[i].gidName = '男子'
                break;
              case 2:
                res.data.data[i].gidName = '女子'
                break;
              case 3:
                res.data.data[i].gidName = '儿童'
                break;
              default:
                res.data.data[i].gidName = '男女同款'
                break;
            }
            switch (res.data.data[i].sid) {
              case 1:
                res.data.data[i].sidName = '经典款'
                break;
              case 2:
                res.data.data[i].sidName = 'JACK PURCELL'
                break;
              case 3:
                res.data.data[i].sidName = 'CHUNK 70'
                break;
              case 4:
                res.data.data[i].sidName = 'ALL STAR'
                break;
              case 5:
                res.data.data[i].sidName = 'ONE STAR'
                break;
              case 6:
                res.data.data[i].sidName = 'CONS'
                break;
              default:
                res.data.data[i].sidName = 'PRO LEATHER'
                break;
            }
          }
          this.goodsList = res.data.data
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },
    deleteGoods(row) {
      console.log(row)
      deleteGoods({id: row.id}).then(res=>{
        if(res.data.code ==0) {
          this.$message.success('删除成功')
          this.getGoods_()
        } else {
          this.$message.error('删除失败,请稍后重试')
        }
      })
    }
  },
};
</script>
<style lang="scss" scoped>
.table {
  margin: 0 auto;
  border: 1px solid lightgray;
  margin-top: 50px;
}
</style>