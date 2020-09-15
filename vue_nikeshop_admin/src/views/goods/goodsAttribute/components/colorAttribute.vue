<template>
  <div class="colorAttribute-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>颜色设置</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0"></i>
      </div>
      <div class="content-box">
        <el-card shadow="hover" class="item" v-for="(item, index) in colorList" :key="index">
          <div class="normal" v-if="!item.isEdit">
            <span class="name">{{item.name}}</span>
            <span class="color" :style="{background: item.code}"></span>
            <i class="icon el-icon-edit"></i>
          </div>
          <div class="edit-box" v-else>
            <el-input class="name" v-model="item.name"></el-input>
            <el-input class="code" v-model="item.code"></el-input>
            <el-color-picker v-model="item.code"></el-color-picker>
            <i class="icon el-icon-check"></i>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
<script>
import { getColorList } from '@/api/goods'
export default {
  data() {
    return {
      colorList: [],
    }
  },
  created() {
    this.getColorList_()
  },
  methods: {
    getColorList_() {
      getColorList().then(res=>{
        if(res.code ==1) {
          for (let i in res.data) {
            res.data[i].isEdit = false
          }
          this.colorList = res.data
        }
      })
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
    .color {
      display: inline-block;
      width: 15px;
      height: 15px;
      margin: 0 12px 0 8px;
    }
  }
}
</style>