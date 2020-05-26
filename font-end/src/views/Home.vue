<template>
  <div class="container">
    <el-menu class="el-menu-demo" mode="horizontal" @select="navSelect" background-color="#333" text-color="#fff" active-text-color="#ffd04b">
      <el-submenu :index="index" v-for="(item, index) in navGender" :key="item.id" :ref="item.id">
        <template slot="title">{{item.name}}</template>
        <div class="subTitle" v-for="(item2, index2) in navSeries" :key="item2.id">
          <el-menu-item :index="index+'-'+index2" :ref="item2.id">{{item2.name}}</el-menu-item>
        </div>
      </el-submenu>
    </el-menu>
    <el-carousel :interval="4000" arrow="always" class="banner" height="750px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <!-- <img :src="item.url" alt=""> -->
        <el-image :src="item.url" :fit="fill"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import apiGoods from '../api/goods'
export default {
  name: "Home",
  data() {
    return {
      navGender: [], // 性别分类
      navSeries: [], // 系列分类
      banner: [], // 轮播图
    };
  },
  created() {
    this.getCategoryType_()
    this.getCategoryGender_()
    this.getCategorySeries_()
    this.getBanner_()
  },
  methods: {
    navSelect(inx, indP){
    },
    // 获取商品分类: 分类(服饰 | 鞋类 | 背包)
    getCategoryType_(){
      apiGoods.getCategoryType().then(res=>{
        console.log(typeof(res.data.data[0].cid))
      })
    },
    // 获取商品分类: 性别
    getCategoryGender_() {
      apiGoods.getCategoryGender().then(res => {
        this.navGender = res.data.data
      })
    },
    // 获取商品分类: 系列
    getCategorySeries_() {
      apiGoods.getCategorySeries().then(res=>{
        this.navSeries = res.data.data
      })
    },
    getBanner_(){
      apiGoods.getBanner().then(res=>{
        this.banner = res.data.data
      })
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
