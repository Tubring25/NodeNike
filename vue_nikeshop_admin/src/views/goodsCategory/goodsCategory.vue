<template>
  <div class="category-container">
    <el-table :data=" genderList">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="type_name" label="类别名称"></el-table-column>
      <el-table-column prop="type_desc" label="类别描述"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" @click="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="编辑" :visible.sync="editDialog" width="30%" center :close-on-click-modal="false">
      <p class="item">
        <span class="item-lable">类别名称</span>
        <el-input type="text" v-model="editItem.type_name"></el-input>
      </p>
      <p class="item">
        <span class="item-label">类别描述</span>
        <el-input type="text" v-model="editItem.type_desc"></el-input>
      </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog=false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getGoodsGenderType, editGoodsType, deleteGoodsType } from '../../api/goods'
export default {
  data() {
    return {
      genderList: [],
      editDialog: false,
      editItem: {},
    }
  },
  created() {
    this.getGoodsGenderType_()
  },
  methods: {
    getGoodsGenderType_() {
      getGoodsGenderType().then(res=>{
        this.genderList = res.data
      })
    },
    handleEdit(ind, row) {
      this.editDialog = true
      this.editItem = row
    },
    confirm() {
      if (this.editItem.type_name.trim() == '') {
        this.$message.error('类别名称不可为空');
        return
      }
      editGoodsType(this.editItem).then(res=>{
        res.code == 1 ? this.getGoodsGenderType_() : this.$message.error(res.data)
        this.editDialog = false
      })
    },
    deleteItem(row) {
      deleteGoodsType({id: row.id}).then(res=>{
        res.code == 1 ? this.getGoodsGenderType_() : this.$message.error(res.data)
      })
    }
  },
}
</script>