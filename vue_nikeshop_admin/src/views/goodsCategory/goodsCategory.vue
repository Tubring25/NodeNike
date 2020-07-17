<template>
  <div class="category-container">
    
  </div>
</template>
<script>
import { getGoodsGenderType } from '../../api/goods'
export default {
  data() {
    return {
      genderList: [],
    }
  },
  created() {
    this.getGoodsGenderType_()
  },
  methods: {
    getGoodsGenderType_() {
      getGoodsGenderType().then(res=>{
        console.log(res)
      })
    }
  },
}
</script>