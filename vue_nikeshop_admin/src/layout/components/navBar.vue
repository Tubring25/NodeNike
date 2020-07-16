<template>
  <div class="nav">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path">
          <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    
    <div class="app-avatar">
      <el-dropdown>
          <el-avatar class="el-dropdown-link" :src="avatar"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>GitHub</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
  data() {
    return {
      levelList: []
    };
  },
  created() {
    this.getBread()
  },
  computed: {
    ...mapGetters([
      "avatar"
    ])
  },
  mounted() {
    if (this.avatar=='' || this.avatar == undefined || this.avatar == null) {
      this.$store.dispatch('user/getUserInfo')
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.getBread()
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    getBread() {
      console.log(111)
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];
      if (!this.isFirstPage(first)) {
        matched = [{ path: "/dashboard", meta: { title: "首页" } }].concat(
          matched
        );
      }
      this.levelList = matched;
      console.log(this.levelList);
    },
    isFirstPage(route) {
      let name = route && route.meta.title;
      if (!name) return false;
      return name.trim() == "首页";
    },
    handleLink(item) {
      if(item.path== '/dashborard') return
      if(this.$route.path==item.redirect) return
      console.log(this.$route.path)
      this.$router.push({path: item.path})
      console.log(item);
    }
  }
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .app-breadcrumb {
    width: 300px;
    height: 50px;
    line-height: 50px;
    padding-left: 15px;
  }
  .app-avatar {
    width: 50px;
    height: 50px;
    position: relative;
    padding-right: 20px;
    .el-dropdown {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
}
</style>