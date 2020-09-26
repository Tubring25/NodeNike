<template>
  <div class="add-goods-container">
    <el-card shadow="hover" class="box-card" v-loading="normalLoading">
      <div slot="header" class="clearfix">
        <span>通用设置</span>
      </div>
      <div class="content-box">
        <el-form class="add-form" :model="nomalAtt" :rules="rules" label-width="80px" label-position="left">
          <el-form-item label="商品名称" prop="title">
            <el-input v-model="nomalAtt.title" maxlength="50"></el-input>
          </el-form-item>
          <el-form-item label="商品类型" prop="base_type_id">
            <el-select v-model="nomalAtt.base_type_id" placeholder="请选择">
              <el-option v-for="item in goodsBaseType" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别" prop="gender_id">
            <el-select v-model="nomalAtt.gender_id" placeholder="请选择">
              <el-option label="男女同款" value="10"></el-option>
              <el-option label="女款" value="0"></el-option>
              <el-option label="男款" value="1"></el-option>
              <el-option label="儿童" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="品牌" prop="brand_id">
            <el-select v-model="nomalAtt.brand_id" placehoder="请选择品牌">
              <el-option v-for="item in goodsBrandsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="运动" prop="sports_id">
            <el-select v-model="nomalAtt.sports_id" placehoder="请选择品牌">
              <el-option v-for="item in goodsSportsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="是否上架" prop="is_onshelf">
            <el-switch v-model="nomalAtt.is_onshelf"></el-switch>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card shadow="hover" class="box-card" v-loading="specLoading">
      <div slot="header">
        <span>特殊设置</span>
      </div>
      <div class="content-box">
        <el-form class="add-form" :model="specAtt" :rules="rules" label-width="80px" label-position="left">
          <el-form-item lable="技术" prop="technique">

          </el-form-item>
          <el-form-item lable="贴合方式" prop="suit_way"></el-form-item>
          <el-form-item lable="特色" prop="special"></el-form-item>
          <el-form-item lable="材料" prop="material"></el-form-item>
          <el-form-item lable="长度" prop="length" v-if="goodsType==0"></el-form-item>
          <el-form-item lable="运动员" prop="sports_star" v-if="goodsType==1">></el-form-item>
          <el-form-item lable="鞋高" prop="shoes_height" v-if="goodsType==1">></el-form-item>
          <el-form-item lable="适用场地" prop="ground_type" v-if="goodsType==1">></el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import {getGoodsType, getMaterialList, getSpecialList, getTechniqueList, getSuitwayList, getLengthList, getShoeSportsStar, getShoeHeight, getShoeGroundType } from '@/api/goods'
export default {
  data(){
    return {
      goodsType: 0,
      nomalAtt: {title: '', desc: '', imgList: '', gender_id: null, base_type_id: '', brand_id: '', sports_id:'', is_shelf: null},
      specAtt: {color: '', technique: '', suit_way: '', special: '', material: '', length: '',},
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
      MaterialList: [],
      SpecialList: [],
      TechniqueList: [],
      SuitwayList: [],
      LengthList: [],
      ShoeSportsStar: [],
      ShoeHeight: [],
      ShoeGroundType: []
    }
  },
  created() {
    if (!this.$route.query.type){
      this.$message.error('缺少参数')
      this.$router.replace('/goods/goodsList')
    }
    this.goodsType = this.$route.query.type
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
      getMaterialList().then(res=>{
        if(res.code == 1) {
          this.MaterialList = res.data
        }
      })
      getSpecialList().then(res=>{
        if(res.code ==1) {
          this.SpecialList = res.data
        }
      })
      getSuitwayList().then(res=>{
        if(res.code ==1) {
          this.SuitwayList = res.data
        }
      })
      getTechniqueList().then(res=>{
        if(res.code == 1) {
          this.TechniqueList = res.data
        }
      })
      if(this.goodsType == 0) {
        getLengthList().then(res=>{
          if(res.code ==1) {
            this.LengthList = res.data
          }
        })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.add-goods-container{
  width: 100%;
  height: 100%;
  .box-card {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
  }
  .add-form {
    width: 100%;
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