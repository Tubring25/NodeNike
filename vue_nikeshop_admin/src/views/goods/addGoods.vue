<template>
  <div class="add-goods-container">
    <!-- 商品名称 -->
    <el-form :model="goodsInfo" :rules="rules"  label-width="100px">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsInfo.title" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="商品类型">
          <el-select v-model="goodsInfo.base_type_id" placeholder="请选择">
            <el-option v-for="item in goodsBaseType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="goodsInfo.gender_id" placeholder="请选择">
            <el-option label="男女同款" value="10"></el-option>
            <el-option label="女款" value="0"></el-option>
            <el-option label="男款" value="1"></el-option>
            <el-option label="儿童" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌">
          <el-select v-model="goodsInfo.brand_id" placehoder="请选择品牌">
            <el-option v-for="item in goodsBrandsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="运动">
          <el-select v-model="goodsInfo.sports_id" placehoder="请选择品牌">
            <el-option v-for="item in goodsSportsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否打折">
          <el-select v-model="goodsInfo.is_onsale" placeholder="请选择">
            <el-option label="是" value="1"></el-option>
            <el-option label="否" value="0"></el-option>
          </el-select>
        </el-form-item>
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
import {getGoodsType} from '@/api/goods'
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
      goodsBaseType: [],
      goodsSportsType: [],
      goodsBrandsType: [],
    }
  },
  created() {
    this.getAllTypes()
  },
  methods: {
    getAllTypes(){
      getGoodsType({type:1, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsBaseType = res.data
        }
      })
      getGoodsType({type:2, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsSportsType = res.data
        }
      })
      getGoodsType({type:3, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsBrandsType = res.data
        }
      })
    },
  },
}
</script>