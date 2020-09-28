<template>
  <div class="colorAttribute-container">
    <el-card class="box-card" v-loading="loading">
      <div slot="header" class="clearfix">
        <span>颜色设置</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add"></i>
      </div>
      <div class="content-box">
        <el-card shadow="hover" class="item" v-for="(item, index) in colorList" :key="index">
          <div class="delete-box">
          </div>
          <i class="delete-icon el-icon-close" @click="close(index)"></i>
          <div class="normal" v-if="!item.isEdit">
            <span class="name">{{item.name}}</span>
            <span class="color" :style="{background: item.code}"></span>
            <i class="icon el-icon-edit" @click="editItem(index)"></i>
          </div>
          <div class="edit-box" v-else>
            <el-input class="name" v-model="item.name"></el-input>
            <el-input class="code" v-model="item.code"></el-input>
            <el-color-picker class="picker" v-model="item.code"></el-color-picker>
            <i class="icon el-icon-check" @click="confirm(index)"></i>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getColorList, editColor, deleteColor, addColor } from '@/api/goods'
export default {
  data() {
    return {
      colorList: [],
      loading: false,
    }
  },
  created() {
    this.getColorList_()
  },
  methods: {
    getColorList_() {
      this.loading = true
      getColorList().then(res=>{
        this.loading = false
        if(res.code ==1) {
          for (let i in res.data) {
            res.data[i].isEdit = false
          }
          this.colorList = res.data
        }
      })
    },
    add() {
      if(this.colorList[this.colorList.length-1].id) {
        this.colorList.push({id: null, name: '', code: '', isEdit: true})
      } else {
        this.$message.info('一次只可添加一条')
      }
    },
    editItem(ind) {
      this.colorList[ind].isEdit = true
    },
    confirm(ind) {
      if(!this.colorList[ind].name.trim() || !this.colorList[ind].code.trim()) {
        this.$message.error('请填写完整')
        return
      }
      let reg = /^(#)\w{6}$/
      if(!reg.test(this.colorList[ind].code)) {
        this.$message.info('仅支持十六进制颜色码')
        return
      }
      this.loading = true
      if(this.colorList[this.colorList.length-1].id == null) {
        addColor(this.colorList[this.colorList.length-1]).then(res=>{
          if(res.code == 1) {
            this.loading= false
            this.colorList[ind].isEdit = false
            this.getColorList_()
          }
        })
      } else {
        editColor(this.colorList[ind]).then(res=>{
          if(res.code == 1) {
            this.loading= false
            this.colorList[ind].isEdit = false
            this.getColorList_()
          }
        })
      }   
    },
    close(ind) {
      if(this.colorList[ind].isEdit) {
        this.getColorList_()
      } else {
        this.$confirm("确认删除"+this.colorList[ind].name+"吗?", '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          deleteColor({id: this.colorList[ind].id}).then(res=>{
            if(res.code == 1) {
              this.$message.success('删除成功')
              this.getColorList_()
            }
          })
        })
      }
    }
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
    font-size: 15px;
    margin-left: 20px;
    position: relative;
    margin-top: 10px;
    .normal,
    .edit-box{
      margin: 25px;
    }
    .color {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 12px 0 8px;
    }
    .delete-icon,
    .delete-box {
      position: absolute;
      top: 0;
      right: 0;
    }
    .delete-icon {
      font-size: 10px;
      color: #fff;
      transform: rotate(0deg);
      transition:all .2s ease-in 0s;
    }
    .delete-icon:hover {
      color: rgb(224, 224, 224);
      transform: rotate(45deg);
    }
    .delete-box {
      width: 0;
      height: 0;
      border-top: solid #f77668;
      border-left: transparent solid;
      border-width: 20px;
    }
    .edit-box {
      .name, .code {
        width: 100px;
        padding-right: 15px;
        vertical-align: top;
      }
      .picker {
        width: 40px;
        height: 40px;
        padding-right: 15px;
      }
      .icon {
        vertical-align: top;
        display: inline-block;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
      }
    }
  }
}
.content-box /deep/ .el-card__body {
  padding: 0;
}
</style>