<template>
  <div class="slide">
    侧边导航
    <el-menu
      :collapse="isCollapse"
      :unique-opened="false"
      :collapse-transition="false"
      mode="vertical"
    >
      <div v-for="(item,index) in routes" :key="index">
        <el-menu-item v-if="item.children.length==1">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.children[0].name}}</span>
        </el-menu-item>
        <el-submenu ></el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
import router from "../../router/index";
export default {
  data() {
    return {
      isCollapse: false,
      routes: []
    };
  },
  created() {
    this.routes = router.options.routes;
  }
};
</script>