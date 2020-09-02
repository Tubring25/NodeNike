<template>
  <div class="add-goods-container">
    <!-- 商品名称 -->
    <el-form :model="goodsInfo" :rules="rules"  label-width="100px">
      <!-- <el-form- -->
    </el-form>
    <!-- 基础分类 -->
    <!-- 性别属性 -->
    <!-- 运动分类 -->
    <!-- 品牌分类 -->
    <!-- 价格 -->
    <!-- 是否打折 -->
    <!-- 折扣价 -->
    <!-- 商品规格 -->
    <!-- 库存量 -->
    <!-- 是否上架 -->
    <!-- 商品图片上传 -->
    <!-- 商品介绍 -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      goodsInfo: {title: '', desc: '', imgList: '', gender_id: null, base_type_id: '', brand_id: '', sports_id:'',price: null, is_onsale: null, discounted_price: null, attribute_list: null, inventory: null, is_shelf: null},
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入活动描述', trigger: 'blur' },
        ],
      },
    }
  }
}
</script>