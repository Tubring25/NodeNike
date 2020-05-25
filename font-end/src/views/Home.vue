<template>
  <div class="container">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="navSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu :index="index" v-for="(item, index) in navGender" :key="item.id" :ref="item.id">
        <template slot="title">{{item.name}}</template>
        <div class="subTitle" v-for="(item2, index2) in navSeries" :key="item2.id">
          <el-menu-item :index="index+'-'+index2" :ref="item2.id">{{item2.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {getCategoryType} from '../api/user'
export default {
  name: "Home",
  data() {
    return {
      navGender: [
        { id: 1, name: "男子" },
        { id: 2, name: "女子" },
        { id: 3, name: "儿童" }
      ],
      navSeries: [
        { id: 1, name: "男子" },
        { id: 2, name: "女子" },
        { id: 3, name: "儿童" }
      ]
    };
  },
  created() {
    this.getCategoryType_()
    alert(123)
    console.log(3333)
  },
  methods: {
    navSelect(inx, indP){
    },
    getCategoryType_(){
      console.log(12333)
      getCategoryType()
    }
  },
};
</script>
<style lang="scss" scoped>
.el-menu-demo {
  display: flex;
  justify-content: space-around;
}
</style>
