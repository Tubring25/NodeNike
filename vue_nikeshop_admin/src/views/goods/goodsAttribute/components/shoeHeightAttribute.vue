<template>
  <div class="material-attribute-container">
    <el-card class="box-card" v-loading="shoeLoading">
      <div slot="header" class="clearfix">
        <span>鞋高(鞋类)</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add"></i>
      </div>
      <div class="content-box">
        <div class="item" v-for="(item, index) in shoeList" :key="index">
          <span v-if="!item.isEdit" @dblclick="editItem(index)"><el-tag closable  @close="close(item)">{{item.name}}</el-tag></span>
          <el-input class="input" v-else size="small" v-model="item.name" maxlength="10" @keyup.enter.native="confirm(item)"></el-input>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getShoeHeight, addShoeHeight, deleteShoeHeight, editShoeHeight } from '@/api/goods'
export default {
  data() {
    return {
      shoeLoading: false,
      shoeList: [],
    }
  },
  created() {
    this.getList_()
  },
  methods: {
    getList_(){
      getShoeHeight().then(res=>{
        this.shoeLoading = true
        if(res.code == 1) {
          this.shoeLoading = false
          for (let i in res.data) {
            res.data[i].isEdit = false
          }
          this.shoeList = res.data
        }
      })
    },
    add(type) {
      let len = this.shoeList.length
      if(len == 0) {
        this.shoeList.push({id: null, name: '', type: type, isEdit: true})
        return
      }
      if(this.shoeList[len-1].id) {
        this.shoeList.push({id: null, name: '', type: type, isEdit: true})
      } else {
        this.$message.info('一次只可添加一条')
      }
    },
    editItem(ind){
      this.shoeList[ind].isEdit = true
    },
    confirm(item){
      if(!item.name.trim()) {
        this.$message.error('请输入完整')
        return
      }
      if(item.id) {
        this.shoeLoading = true
        editShoeHeight({id: item.id, name: item.name.trim()}).then(res=>{
          this.shoeLoading = false
          if(res.code == 1) {
            this.getList_()
          }
        })
      } else {
        this.shoeLoading = true
        addShoeHeight({name: item.name.trim()}).then(res=>{
          this.shoeLoading = false
          if(res.code == 1){
            this.getList_()
          }
        })
      }
    },
    close(item){
      this.$confirm('确认删除'+item.name+'吗?', '', {
        confirmButtonText: '删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.shoeLoading = true
        deleteShoeHeight({id: item.id}).then(res=>{
          this.shoeLoading = false
          if(res.code == 1) {
            this.$message.success('删除成功')
            this.getList_()
          }
        })
      })
    },
  },
}
</script>
<style lang="scss" scoped>
.icon {
  color: #264348;
}
.icon:hover {
  color: #a9b4b6;
}
.content-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .item {
    margin: 0 10px;
    .input {
      width: 100px;
    }
  }
}
.content-box /deep/ .el-card__body {
  padding: 0;
}
</style>