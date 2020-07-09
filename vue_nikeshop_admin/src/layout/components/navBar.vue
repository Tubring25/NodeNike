<template>
  <div class="nav">
    顶部导航
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  created() {
    this.getBread()
    console.log(1111)
  },
  methods: {
    getBread(){
      debugger
      // let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      // const first = matched[0]

    }
  },
}
</script>