<template>
  <div class="size-attribute-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>尺码设置</span>
      </div>
      <div class="content-box">
        <el-card class="clothes-card" v-loading="cloLoading">
          <div class="clearfix" slot="header">
            <span>服饰</span>
            <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add(0)"></i>
          </div>
          <div class="content">
            <div class="item" v-for="(item, index) in infoList[0]" :key="index">
              <el-tag v-if="!item.isEdit" closable @close="deltet(index)">{{item.name}}</el-tag>
              <el-input class="input" v-else size="small" v-model="item.name" maxlength="10" @keyup.enter.native="confirm(0,index)"></el-input>
            </div>
          </div>
        </el-card>
        <el-card class="shohes-card" v-loading="ShoeLoading">
          <div class="clearfix" slot="header">
            <span>鞋类</span>
            <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add"></i>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getSizeList, addSize } from '@/api/goods'
export default {
  data() {
    return {
      cloLoading: false,
      ShoeLoading: false,
      infoList: [],
    }
  },
  created() {
    this.getSize_()
  },
  methods: {
    getSize_(){
      getSizeList().then(res=>{
        if(res.code == 1) {
          this.infoList = res.data
        }
      })
    },
    add(type) {
      let len = this.infoList[type].length
      if(len == 0) {
        this.infoList[type].push({id: null, name: '', type: type, isEdit: true})
        return
      }
      if(this.infoList[type][len-1].id) {
        this.infoList[type].push({id: null, name: '', type: type, isEdit: true})
      } else {
        this.$message.info('一次只可添加一条')
      }
    },
    editItem(){},
    confirm(type, ind){
      if(!this.infoList[type][ind].name.trim()) {
        this.$message.error('请输入完整')
        return
      }
      if(this.infoList[type][ind].id) {
        console.log('添加')
      } else {
        addSize({name: this.infoList[type][ind].name.trim(), type: type.toString()}).then(res=>{
          if(res.code == 1){
            this.infoList[type][ind].isEdit = false
            this.getSize_()
          }
        })
      }
    },
    close(){

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
  .content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    .item {
      margin: 0 10px;
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