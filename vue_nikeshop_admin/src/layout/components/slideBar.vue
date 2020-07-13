<template>
  <div class="slide">
    <el-menu
      mode="vertical"
      :collapse="isCollapse"
      background-color="#264348"
      text-color="#CCC"
      active-text-color="#22A7F0"
      :default-active="$route.path"
      @select="go"
    >
      <div v-for="item in routes" :key="item.path">
        <el-menu-item v-if="item.children.length==1" :index="item.redirect">
          <i :class="item.children[0].meta.icon"></i>
          <span slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
        <el-submenu v-else>
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <div v-for="child in item.children" :key="child.path">
            <el-menu-item :index="item.path+'/'+child.path">{{child.meta.title}}</el-menu-item>
          </div>
        </el-submenu>
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
      routes: [],
    };
  },
  created() {
    this.routes = router.options.routes.filter(item=>!item.hidden);
  },
  methods: {
    go(e){
      if(this.$route.path != e.split('').slice(1).join('') && this.$route.path != e) {
        if(e.split('')[0] =='/' && e.split('')[1]=='/'){
          this.$router.push(e.split('').slice(1).join(''))
        } else {
          this.$router.push(e)
        }
      }
    }
  },
};
</script>