<template>
  <div class="category-container">
    <h1>顶部分类</h1>
    <el-table :data="genderList" border size="medium" :cell-style="cellStyle" :header-cell-style="cellStyle">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="类别名称"></el-table-column>
      <el-table-column prop="desc" label="类别描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row,'1')">编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteItem(scope.row,'1')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <h1>通用分类</h1>
    <el-table :data="baseList" border size="medium" :cell-style="cellStyle" :header-cell-style="cellStyle">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="类别名称"></el-table-column>
      <el-table-column prop="desc" label="类别描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row,'2')">编辑</el-button>
          <el-button type="danger" size="mini" @click="deleteItem(scope.row,'2')">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

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
    }
  },
  created() {
    this.getGoodsType_()
  },
  methods: {
    getGoodsType_() {
      getGoodsType({type:1}).then(res=>{
        this.genderList = res.data
      })
      getGoodsType({type:2}).then(res=>{
        this.baseList = res.data
      })
    },
    handleEdit(ind, row, type) {
      this.editDialog = true
      this.editItem = row
      this.editItem.type = type
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

</style>