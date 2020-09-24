<template>
  <div class="material-attribute-container">
    <el-card class="box-card" v-loading="cloLoading">
      <div slot="header" class="clearfix">
        <span>长度设置(服饰)</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add"></i>
      </div>
      <div class="content-box">
        <div class="item" v-for="(item, index) in clothesList" :key="index">
          <span v-if="!item.isEdit" @dblclick="editItem(index)"><el-tag closable  @close="close(item)">{{item.name}}</el-tag></span>
          <el-input class="input" v-else size="small" v-model="item.name" maxlength="10" @keyup.enter.native="confirm(item)"></el-input>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getLengthList, addLength, deleteLength, editLength } from '@/api/goods'
export default {
  data() {
    return {
      cloLoading: false,
      clothesList: [],
    }
  },
  created() {
    this.getList_()
  },
  methods: {
    getList_(){
      this.cloLoading = true
      getLengthList().then(res=>{
        this.cloLoading = false
        if(res.code == 1) {
          for (let i in res.data) {
            res.data[i].isEdit = false
          }
          this.clothesList = res.data
        }
      })
    },
    add(type) {
      let len = this.clothesList.length
      if(len == 0) {
        this.clothesList.push({id: null, name: '', type: type, isEdit: true})
        return
      }
      if(this.clothesList[len-1].id) {
        this.clothesList.push({id: null, name: '', type: type, isEdit: true})
      } else {
        this.$message.info('一次只可添加一条')
      }
    },
    editItem(ind){
      this.clothesList[ind].isEdit = true
    },
    confirm(item){
      if(!item.name.trim()) {
        this.$message.error('请输入完整')
        return
      }
      this.cloLoading = true
      if(item.id) {
        editLength({id: item.id, name: item.name.trim()}).then(res=>{
          this.cloLoading = false
          if(res.code == 1) {
            this.getList_()
          }
        })
      } else {
        addLength({name: item.name.trim()}).then(res=>{
          this.cloLoading = false
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
        deleteLength({id: item.id}).then(res=>{
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