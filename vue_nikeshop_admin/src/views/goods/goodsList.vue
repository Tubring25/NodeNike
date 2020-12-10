<template>
  <div class="goods-list-container">
    <div class="add-box"><el-button type="primary" class="add-goods" @click="addGoodsDialog=true"   icon="el-icon-plus" circle></el-button></div>
    <div class="search-box">
      <el-form :inline="true" :model="search" class="search-form">
        <el-form-item label="商品名称">
          <el-input v-model="search.title" maxlength="100" placeholder="请输入商品名称" ></el-input>
        </el-form-item>
        <el-form-item label="商品类型">
          <el-select v-model="search.baseType" placeholder="请选择">
            <el-option v-for="item in goodsBaseType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="search.gender" placeholder="请选择">
            <el-option label="男女同款" value=10></el-option>
            <el-option label="女款" value=0></el-option>
            <el-option label="男款" value=1></el-option>
            <el-option label="儿童" value=2></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="searchStatus.status=='收起'"  label="品牌">
          <el-select v-model="search.brand" placehoder="请选择品牌">
            <el-option v-for="item in goodsBrandsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="searchStatus.status=='收起'"  label="运动">
          <el-select v-model="search.sport" placehoder="请选择品牌">
            <el-option v-for="item in goodsSportsType" :key="item.id" :label="item.name" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="searchStatus.status=='收起'"  label="是否打折">
          <el-select v-model="search.isOnSale" placeholder="请选择">
            <el-option label="是" value=1></el-option>
            <el-option label="否" value=0></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="handle-box">
        <el-button type="primary" @click="getGoodList_">搜索</el-button>
        <el-button @click="resetSearch">重置</el-button>
        <span class="showall" @click="showAllQueryCon">{{searchStatus.status}}<i :class="searchStatus.icon"></i></span>
      </div>
    </div>

    <el-table :data="goodsList" border class="goods-table" fit style="width: 95%;margin: 0 auto;">
      <el-table-column prop="goods_id" label="商品id" align="center" fixed width="200"></el-table-column>
      <el-table-column prop="title" label="商品名称" align="center" width="150">
        <template slot-scope="{row}">
           <el-tooltip effect="dark" :content="row.title" placement="top">
             <span style="display:inline-block;width:100%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">{{row.title}}</span>
          </el-tooltip>
        </template>
      </el-table-column>
      <el-table-column label="商品分类" align="center" width="120">
        <template slot-scope="{row}">
          <span>{{row.base_id | parseAllTypeId(goodsBaseType)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="性别" align="center" width="120">
        <template slot-scope="{row}">
          <span>{{row.gender_id | parseAllTypeId(goodsGenderType)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="运动类别" align="center" width="120">
        <template slot-scope="{row}">
          <span>{{row.sports_id | parseAllTypeId(goodsSportsType)}}</span>
        </template>
      </el-table-column> 
      <el-table-column label="品牌" align="center" width="150">
        <template slot-scope="{row}">
          <span>{{row.brand_id | parseAllTypeId(goodsBrandsType)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="是否上架" align="center" width="120" >
        <template slot-scope="{row}">
            <el-switch v-model="row.is_onshelf" active-color="#13ce66" ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="添加时间" align="center" width="120">
        <template slot-scope="{row}">
          <span>{{row.createdAt | parseTime('{y}-{m}-{d}')}}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" align="center" width="120">
        <template slot-scope="{row}">
          <span>{{row.updatedAt | parseTime('{y}-{m}-{d}')}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="250">
        <template slot-scope="{row}">
          <el-button size="mini" type="info" @click="goGoodsDetail(row.goods_id)">查看详情</el-button>
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button size="mini" type="danger" @click="deleteGoods_(row.goods_id)">删除</el-button>
        </template>
      </el-table-column>

      
    </el-table>    

    <el-dialog title="请选择商品类别" :visible.sync="addGoodsDialog" width="30%" center>
      <el-radio-group v-model="goodsType">
        <el-radio :label="0">服装</el-radio>
        <el-radio :label="1">鞋类</el-radio>
      </el-radio-group>
      <div slot="footer">
        <el-button @click="addGoodsDialog=false">取消</el-button>
        <el-button @click="addConfirm" type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {getGoodsType, getGoodsList, deleteGoods, getShoeGroundType, getShoeHeight, getShoeSportsStar, getLengthList, getSuitwayList, getTechniqueList, getSpecialList, getMaterialList, getSizeList, getColorList } from '@/api/goods';
import { parseTime } from '@/utils/filter';
import { mapActions, mapGetters } from 'vuex';
import { setSession } from '@/utils/tools'
export default {
  data() {
    return {
      goodsList: [],
      currentGoods: {},
      showDetail: false,
      search: {title: '', gender: null, baseType: '', brand: '', sport:'', isOnSale: null, sales: null},
      searchStatus: {status: '展开', icon: 'el-icon-arrow-down'},
      goodsBaseType: [],
      goodsSportsType: [],
      goodsBrandsType: [],
      addGoodsDialog: false,
      goodsType: 0,
      goodsGenderType: [{id: 10, name: '男女同款'}, {id: 0, name: '女'}, {id: 1, name: '男'}, {id: 2, name: '儿童'}]
    }
  },
  filters: {
    parseAllTypeId(id, type) {
      if(!id) return '暂无'
      return (type.filter(a=>a.id == id))[0].name
    }
  },
  created() {
  },
  computed: {
    ...mapGetters([
      'base_type',
      'gender_type',
      'brands_type',
      'sports_type'
    ])
  },
  mounted() {
    if(this.base_type.length == 0) {
      this.getAllTypes()
    }
    this.getGoodList_()
    this.getSkuTypes()
  },
  methods: {
    getAllTypes(){
      getGoodsType({type:1, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsBaseType = res.data
          this.saveType({type:'base', data: res.data})
          setSession('base_type', res.data)
        }
      })
      getGoodsType({type:2, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsSportsType = res.data
          this.saveType({type:'sports', data: res.data})
          setSession('sports_type', res.data)

        }
      })
      getGoodsType({type:3, pageSize: 50, page: 1}).then(res=>{
        if(res.code == 1) {
          this.goodsBrandsType = res.data
          this.saveType({type:'brands', data: res.data})
          setSession('brands_type', res.data)
        }
      })
      this.saveType({type:'gender', data: this.goodsGenderType})
      setSession('gender_type', this.goodsGenderType)
    },
    getSkuTypes() {
      getShoeGroundType().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'shoe_ground', data: res.data})
          setSession('shoe_ground', res.data)
        }
      })
      getShoeHeight().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'shoe_height', data: res.data})
          setSession('shoe_height', res.data)
        }
      })
      getShoeSportsStar().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'shoe_sport', data: res.data})
          setSession('shoe_sport', res.data)
        }
      })
      getLengthList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'length', data: res.data})
          setSession('length', res.data)
        }
      })
      getSuitwayList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'suitway', data: res.data})
          setSession('suitway', res.data)
        }
      })
      getTechniqueList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'technique', data: res.data})
          setSession('technique', res.data)
        }
      })
      getSpecialList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'sepcial', data: res.data})
          setSession('sepcial', res.data)
        }
      })
      getMaterialList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'material', data: res.data})
          setSession('material', res.data)
        }
      })
      getSizeList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'size', data: res.data})
          setSession('size', res.data)
        }
      })
      getColorList().then(res=>{
        if(res.code == 1) {
          this.saveType({type:'color', data: res.data})
          setSession('color', res.data)
        }
      })
    },
    getGoodList_() {
      getGoodsList(Object.assign(this.search, {pageSize: 50, page: 1})).then(res=>{
        if(res.code == 1 ) {
          this.goodsList = res.data.rows
        }
      })
    },
    showAllQueryCon(){
      this.searchStatus.status == '展开' ? this.searchStatus = {status: '收起', icon: 'el-icon-arrow-up'} : this.searchStatus = {status: '展开', icon: 'el-icon-arrow-down'}
    },
    resetSearch() {
      this.search = {title: '', gender: null, baseType: '', brand: '', sport:'', isOnSale: null, inventory: null, sales: null}
    },
    addConfirm() {
      this.addGoodsDialog = false
      this.$router.push({path: '/goods/addGood', query: {type: this.goodsType.toString()}})
    },
    deleteGoods_(goods_id) {
      deleteGoods({goods_id: goods_id}).then(res=>{
        if(res.code==1) {
          this.$message.success('删除成功')
          this.getGoodList_()
        }
      })
    },
    goGoodsDetail(id){
      if(!id) return
      this.$router.push({path: '/goods/goodsDetail', query: {goods_id: id}})
    },
    ...mapActions([
      'saveType'
    ]),
  },
}
</script>
<style lang="scss" scoped>
.goods-list-container {
  width: 100%;
  position: relative;
}
.add-box {
  width: 50px;
  height: 50px;
  top: 120px;
  left: 230px;
  position: fixed;
  .add-goods {
    transform: scale(.5);
    opacity: .2;
  }
}
.add-box:hover {
  .add-goods {
    left: 250px;
    transform: scale(1);
    transition:all .2s ease-in 0s;
    opacity: 1;
  }
}
.search-box {
  width: 95%;
  padding: 30px 0 30px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .handle-box {
    min-width: 300px;
    .el-button{
      margin-right: 20px;
    }
    span {
      color: #333;
      cursor: pointer;
    }
    span:hover {
      opacity: .7;
    }
  }
}
.goods-table {
  text-align: center;
}
</style>