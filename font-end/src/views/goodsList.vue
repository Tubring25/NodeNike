<template>
  <div class="container">
    <navBar></navBar>
  </div>
</template>
<script>
import navBar from '../components/nav'
import {getGoods} from '../api/goods';
export default {
  components: {navBar},
  data() {
    return {
      searchData: {gid: '', sid: '', page: 1, pageSize: 10}, // 查询条件
    }
  },
  created() {
    console.log(this.$route.query)
    this.searchData.gid = this.$route.query.gid
    this.searchData.sid = this.$route.query.sid
    this.getGoods_(this.searchData)
  },
  methods: {
    getGoods_(data){
      getGoods(data).then(res=>{
        
      })
    }
  },
}
</script>