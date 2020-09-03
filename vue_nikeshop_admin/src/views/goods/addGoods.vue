<template>
  <div class="add-goods-container">
    <!-- 商品名称 -->
    <el-form :model="goodsInfo" :rules="rules"  label-width="100px">
      <el-form-item label="商品名称" prop="title">
        <el-input v-model="goodsInfo.title" maxlength="50"></el-input>
      </el-form-item>
      <el-form-item label="商品类型" prop="base_type_id">
        <el-select v-model="goodsInfo.base_type_id" placeholder="请选择">
          <el-option v-for="item in goodsBaseType" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="性别" prop="gender_id">
        <el-select v-model="goodsInfo.gender_id" placeholder="请选择">
          <el-option label="男女同款" value="10"></el-option>
          <el-option label="女款" value="0"></el-option>
          <el-option label="男款" value="1"></el-option>
          <el-option label="儿童" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="品牌" prop="brand_id">
        <el-select v-model="goodsInfo.brand_id" placehoder="请选择品牌">
          <el-option v-for="item in goodsBrandsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="运动" prop="sports_id">
        <el-select v-model="goodsInfo.sports_id" placehoder="请选择品牌">
          <el-option v-for="item in goodsSportsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input type="number" v-model="goodsInfo.price" placeholder="请输入商品价格"></el-input>
      </el-form-item>
      <el-form-item label="是否打折" prop="is_onsale">
        <el-switch v-model="goodsInfo.is_onsale"></el-switch>
      </el-form-item>
      <el-form-item label="折后价" v-if="goodsInfo.is_onsale == 1">
        <div class="auto-discount">
          <p class="discount">打<el-input type="number" v-model="goodsInfo.discount" ></el-input>折</p>
          <p class="discounted" v-if="goodsInfo.price && goodsInfo.discounted_price">折后价: <span> {{(goodsInfo.price / goodsInfo.discount).toFixed(2)}}</span></p>
        </div>
        <el-button type="primary" size="mini" >手动输入</el-button>
        <div class="handle-discount">
          <el-input type="number" v-model="goodsInfo.discounted_price" placeholder="请输入折扣价"></el-input>
        </div>
      </el-form-item>
      <el-form-item label="商品属性" prop="attribute_list">
        <el-button type="primary" size="mini" icon="">设置商品规格</el-button>
      </el-form-item>
      <el-form-item label="商品库存" prop="inventory">
        <el-input type="number" v-model="goodsInfo.inventory" placeholder="请输入商品库存"></el-input>
      </el-form-item>
      <el-form-item label="是否上架" prop="is_onshelf">
        <el-switch v-model="goodsInfo.is_onshelf"></el-switch>
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
      goodsInfo: {title: '', desc: '', imgList: '', gender_id: null, base_type_id: '', brand_id: '', sports_id:'',price: null, is_onsale: null, discount:'', discounted_price: null, attribute_list: null, inventory: null, is_shelf: null},
      rules: {
        title: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        base_type_id: [{required: true, message: '请选择基础分类', trigger: 'change'}],
        gender_id: [{required: true, message: '请选择性别分类', trigger: 'change'}],
        brand_id: [{required: true, message: '请选择品牌分类', trigger: 'change'}],
        sports_id: [{required: true, message: '请选择运动分类', trigger: 'change'}],
        price: [{ required: true, message: '请输入价格', trigger: 'blur' }],
        inventory: [{ required: true, message: '请输入库存', trigger: 'blur' }],
        is_onsale: [{required: true}],
        is_onshelf: [{required: true}],
        attribute_list: [{required: true}]
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