<template>
  <div class="Suitway-attribute-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>贴合方式</span>
      </div>
      <div class="content-box">
        <el-card class="clothes-card" v-loading="cloLoading">
          <div class="clearfix" slot="header">
            <span>服饰</span>
            <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add(0)"></i>
          </div>
          <div class="content">
            <div class="item" v-for="(item, index) in clothesList" :key="index">
              <span v-if="!item.isEdit" @dblclick="editItem(0, index)"><el-tag closable  @close="close(item)">{{item.name}}</el-tag></span>
              <el-input class="input" v-else size="small" v-model="item.name" maxlength="10" @keyup.enter.native="confirm(0,item)"></el-input>
            </div>
          </div>
        </el-card>
        <el-card class="shohes-card" v-loading="ShoeLoading">
          <div class="clearfix" slot="header">
            <span>鞋类</span>
            <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add(1)"></i>
          </div>
          <div class="content">
            <div class="item" v-for="(item, index) in shoeList" :key="index">
              <span v-if="!item.isEdit" @dblclick="editItem(1, index)"><el-tag closable  @close="close(item)">{{item.name}}</el-tag></span>
              <el-input class="input" v-else size="small" v-model="item.name" maxlength="10" @keyup.enter.native="confirm(1,item)"></el-input>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getSuitwayList, addSuitway, deleteSuitway, editSuitway } from '@/api/goods'
export default {
  data() {
    return {
      cloLoading: false,
      ShoeLoading: false,
      infoList: [],
      clothesList: [],
      shoeList: [],
    }
  },
  created() {
    this.getList_()
  },
  methods: {
    getList_(){
      this.cloLoading = true
      this.ShoeLoading = true
      getSuitwayList().then(res=>{
        this.ShoeLoading = false
        this.cloLoading = false
        if(res.code == 1) {
          for (let i in res.data) {
            if(res.data[i].length != 0) {
              for(let j in res.data[i]) {
                res.data[i][j].isEdit = false
              }
            }
          }
          this.clothesList = res.data[0]
          this.shoeList = res.data[1]
        }
      })
    },
    add(type) {
      if(type ==0) {
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
      } else {
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
      }
    },
    editItem(type, ind){
      console.log(type, ind)
      switch(type) {
        case 0:
          this.clothesList[ind].isEdit = true
          break
        case 1: 
          this.shoeList[ind].isEdit = true
          break
      }
    },
    confirm(type, item){
      if(!item.name.trim()) {
        this.$message.error('请输入完整')
        return
      }
      type == 0 ? this.cloLoading = true : this.ShoeLoading = true
      if(item.id) {
        editSuitway({id: item.id, name: item.name.trim(), type: type.toString()}).then(res=>{
          type == 0 ? this.cloLoading = false : this.ShoeLoading = false
          if(res.code == 1) {
            this.getList_()
          }
        })
      } else {
        addSuitway({name: item.name.trim(), type: type.toString()}).then(res=>{
          type == 0 ? this.cloLoading = false : this.ShoeLoading = false
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
        deleteSuitway({id: item.id}).then(res=>{
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
  .shohes-card {
    margin-top: 15px;
  }
  .content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    .item {
      margin: 5px 10px;
      .input {
        width: 100px;
      }
    }
  }
}
.content-box /deep/ .el-card__body {
  padding: 0;
}
</style>