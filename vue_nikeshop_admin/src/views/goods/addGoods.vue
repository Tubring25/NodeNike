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
    <el-card shadow="hover" class="box-card" v-loading="normalLoading">
      <div slot="header">
        <span>特殊设置</span>
      </div>
      <div class="content-box">
        <el-form class="add-form" :model="specAtt" :rules="rules" label-width="80px" label-position="left">
          <el-form-item label="技术" prop="technique">
            <el-select v-model="specAtt.technique" placehoder="请选择技术" clearable>
              <el-option v-for="item in TechniqueList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="贴合方式" prop="suit_way">
            <el-select v-model="specAtt.suit_way" placehoder="请选择贴合方式" clearable>
              <el-option v-for="item in SuitwayList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="特色" prop="special">
            <el-select v-model="specAtt.special" placehoder="请选择特色" clearable>
              <el-option v-for="item in SpecialList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="材料" prop="material">
            <el-select v-model="specAtt.material" placehoder="请选择材料" clearable>
              <el-option v-for="item in MaterialList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="长度" prop="length" v-if="goodsType==0" clearable>
            <el-select v-model="specAtt.length" placehoder="请选择长度">
              <el-option v-for="item in LengthList" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="运动员" prop="sports_star" v-if="goodsType==1" clearable>
            <el-select v-model="specAtt.sports_star" placehoder="请选择运动员">
              <el-option v-for="item in ShoeSportsStar" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="鞋高" prop="shoes_height" v-if="goodsType==1" clearable>
            <el-select v-model="specAtt.shoes_height" placehoder="请选择鞋高">
              <el-option v-for="item in ShoeHeight" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="适用场地" prop="ground_type" v-if="goodsType==1" clearable>
            <el-select v-model="specAtt.ground_type" placehoder="请选择适用场地">
              <el-option v-for="item in ShoeGroundType" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
    <el-card shadow="hover" class="box-card" v-loading="specLoading">
      <div slot="header">
        <span>Sku设置</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="add(0)"></i>
      </div>
      <div class="content-box">
        <div class="item-box" v-for="(item, index) in skuList" :key="index">
          <div class="item">
            <span class="name">颜色</span>
            <el-select v-model="item.color" placeholder="请选择">
              <el-option class="opt-box" v-for="color in colorList" :key="color.id" :label="color.name" :value="color.id">
                <span style="float: left">{{ color.name }}</span>
                <span class="cube" :style="'display:block; float: right; width:10px;height:10px;margin-top:12px; background:'+color.code">{{ item.value }}</span>
              </el-option>
            </el-select>
          </div>
          <div class="item">
            <span class="name">价格</span>
            <el-input v-model="item.price" type="number" max="100000" min="0"></el-input>
          </div>
          <div class="item">
            <span class="name">是否打折</span>
            <el-switch v-model="item.is_sale"></el-switch>
          </div>
          <div class="item" v-show="item.is_sale">
            <span class="name">折后价</span>
            <el-input v-model="item.sale_price" type="number" max="100000" min="0"></el-input>
          </div>
          <div class="item" >
            <el-button type="primary" size="mini" >添加图片</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import {getGoodsType, getMaterialList, getSpecialList, getTechniqueList, getSuitwayList, getLengthList, getShoeSportsStar, getShoeHeight, getShoeGroundType, getColorList, getTempGoodsId } from '@/api/goods'
export default {
  data(){
    return {
      normalLoading: false,
      specLoading: false,
      goodsType: 0,
      nomalAtt: {title: '', desc: '', imgList: '', gender_id: null, base_type_id: '', brand_id: '', sports_id:'', is_shelf: null},
      specAtt: {color: '', technique: '', suit_way: '', special: '', material: '', length: '', sports_star: '', shoes_height: '', ground_typel: ''},
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
      ShoeGroundType: [],
      colorList: [],
      skuList: [{color: null, colorImg: null, size: null, inventory: null, price: null, is_sale: false, sale_price: null}],
      tempId: null,
    }
  },
  created() {
    if (!this.$route.query.type){
      this.$message.error('缺少参数')
      this.$router.replace('/goods/goodsList')
    }
    this.goodsType = this.$route.query.type
    this.getAllTypes()
    this.getTempGoodsId_(this.$route.query.type)
  },
  methods: {
    getAllTypes(){
      this.normalLoading = true
      this.specLoading = true
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
      getMaterialList({type: this.goodsType}).then(res=>{
        if(res.code == 1) {
          this.MaterialList = res.data
        }
      })
      getSpecialList({type: this.goodsType}).then(res=>{
        if(res.code ==1) {
          this.SpecialList = res.data
        }
      })
      getSuitwayList({type: this.goodsType}).then(res=>{
        if(res.code ==1) {
          this.SuitwayList = res.data
        }
      })
      getTechniqueList({type: this.goodsType}).then(res=>{
        if(res.code == 1) {
          this.TechniqueList = res.data
        }
      })
      getColorList().then(res=>{
        if(res.code == 1) {
          this.colorList = res.data
        }
      })
      if(this.goodsType == 0) {
        getLengthList().then(res=>{
          if(res.code ==1) {
            this.LengthList = res.data
          }
        })
      }
      if(this.goodsType == 1) {
        getShoeSportsStar().then(res => {
          if(res.code==1) {
            this.ShoeSportsStar = res.data
          }
        })
        getShoeHeight().then(res=>{
          if(res.code == 1) {
            this.ShoeHeight = res.data
          }
        })
        getShoeGroundType().then(res=>{
          if(res.code == 1) {
            this.ShoeGroundType = res.data
          }
        })
      }
      this.normalLoading = false
      this.specLoading = false
    },
    getTempGoodsId_(type){
      getTempGoodsId({type:type}).then(res=>{
        if(res.code == 1) {
          this.tempId = res.data
        }
      })
    }
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
    .content-box{
      .item-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: left;
        .item {
          margin-right: 25px;
          span {
            margin-right: 15px;
            display: inline-block;
            height: 40px;
            line-height: 40px;
          }
          .el-select {
            width: 160px;
          }
          .el-input{
            width: 160px;
          }
        }
      }
    }
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