<template>
  <div class="category-container">
    <el-tabs v-model="tabActive" @tab-click="tabClick" :stretch="true">
      <el-tab-pane label="鞋类/服装" name="base"></el-tab-pane>
      <el-tab-pane label="运动" name="sports"></el-tab-pane>
      <el-tab-pane label="品牌" name="brands"></el-tab-pane>
    </el-tabs>

    <el-table :data="baseList" border size="medium" :cell-style="cellStyle" :header-cell-style="cellStyle">
      <el-table-column prop="id" label="ID" width="60"></el-table-column>
      <el-table-column prop="name" label="类别名称"></el-table-column>
      <el-table-column prop="desc" label="类别描述"></el-table-column>
      <el-table-column prop="type" label="详细分类" v-if="currentTab==1" width="100">
        <template slot-scope="scope">
          <span>{{scope.row.type == 0 ? "鞋类": "服装"}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    
    <el-pagination class="pagination" background layout="sizes, prev, pager, next" :total="total" :page-sizes="[10, 20]" :page-size="10" @size-change="handleSizeChange"
      @current-change="handleCurrentChange"></el-pagination>
    <el-dialog title="编辑" :visible.sync="editDialog" width="30%" center :close-on-click-modal="false">
      <p class="item">
        <span class="item-lable">类别名称</span>
        <el-input type="text" v-model="editItem.name"></el-input>
      </p>
      <p class="item">
        <span class="item-label">类别描述</span>
        <el-input type="text" v-model="editItem.desc"></el-input>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog=false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getGoodsType, editGoodsType, deleteGoodsType } from '../../api/goods'
export default {
  data() {
    return {
      genderList: [],
      baseList: [],
      editDialog: false,
      editItem: {},
      cellStyle: {textAlign: 'center'},
      tabActive: 'base',
      total: 0,
      currentTab: 1,
      page: 1,
      pageSize: 10,
    }
  },
  created() {
    this.getGoodsType_()
  },
  methods: {
    getGoodsType_() {
      getGoodsType({type:this.currentTab, page: this.page, pageSize: this.pageSize}).then(res=>{
        this.baseList = res.data
        this.total = res.total
      })
    },
    handleEdit(ind, row) {
      this.editDialog = true
      this.editItem = row
      this.editItem.type = this.currentTab
    },
    confirm() {
      if (this.editItem.name.trim() == '') {
        this.$message.error('类别名称不可为空');
        return
      }
      editGoodsType(this.editItem).then(res=>{
        res.code == 1 ? this.getGoodsType_() : this.$message.error(res.data)
        this.editDialog = false
      })
    },
    deleteItem(row, type) {
      deleteGoodsType({id: row.id, type: type}).then(res=>{
        res.code == 1 ? this.getGoodsType_() : this.$message.error(res.data)
      })
    },
    tabClick(tab){
      this.currentTab = Number(tab.index) + 1
      this.page = 1
      this.pageSize = 10
      this.getGoodsType_()
    },
    handleSizeChange(val){
      this.pageSize = val
      this.getGoodsType_()
    },
    handleCurrentChange(val) {
      this.page= val
      this.getGoodsType_()
    }
  },
}
</script>
<style lang="scss" scoped>
.el-table {
  width: 50%;
  margin-left: 20px;
}
h1{
  text-align: center;
}
.el-tabs__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.pagination {
  padding: 0;
  margin: 20px;
}

</style>