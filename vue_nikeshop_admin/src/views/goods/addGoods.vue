<template>
  <div class="add-goods-container">
    <el-form class="add-form" :model="goodsInfo" :rules="rules" label-width="80px" label-position="left">
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
      <el-form-item label="是否上架" prop="is_onshelf">
        <el-switch v-model="goodsInfo.is_onshelf"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {getGoodsType} from '@/api/goods'
export default {
  data(){
    return {
      goodsInfo: {title: '', desc: '', imgList: '', gender_id: null, base_type_id: '', brand_id: '', sports_id:'', is_shelf: null},
      rules: {
        title: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
        base_type_id: [{required: true, message: '请选择基础分类', trigger: 'change'}],
        gender_id: [{required: true, message: '请选择性别分类', trigger: 'change'}],
        brand_id: [{required: true, message: '请选择品牌分类', trigger: 'change'}],
        sports_id: [{required: true, message: '请选择运动分类', trigger: 'change'}],
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

    addAttribute() {
      console.log(12313123)
    },
  },
}
</script>
<style lang="scss" scoped>
.add-goods-container{
  width: 100%;
  height: 100%;
  .add-form {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex-direction: left;
    .el-form-item {
      width: 300px;
      margin-left: 20px;
    }
  }
}
</style>