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

    }
  },
  created() {
    console.log(this.$route.query)
  },
  methods: {
    getGoods_(data){
      getGoods(data).then(res=>{
        
      })
    }
  },
}
</script>