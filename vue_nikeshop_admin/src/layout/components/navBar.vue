<template>
  <div class="nav">
    <el-breadcrumb separator="/">
      <span v-for="item in pathList" :key="item.path">
        <el-breadcrumb-item><a :href="item.path">{{item.meta.title}}</a></el-breadcrumb-item>
      </span>
    </el-breadcrumb>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pathList: [],
    }
  },
  created() {
    this.getBread()
  },
  methods: {
    getBread(){
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      if(first.name.trim().toLocaleLowerCase() !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {title: '首页'}}].concat(matched)
      }
      this.pathList = matched
      console.log(matched)

    }
  },
}
</script>