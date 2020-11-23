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
        <el-button type="primary" @click="searchGoods">搜索</el-button>
        <el-button @click="resetSearch">重置</el-button>
        <span class="showall" @click="showAllQueryCon">{{searchStatus.status}}<i :class="searchStatus.icon"></i></span>
      </div>
    </div>


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
import {getGoodsType, getGoodsList} from '@/api/goods'
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
      goodsType: 0
    }
  },
  created() {
    this.getAllTypes()
    this.searchGoods()
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
    searchGoods() {

      getGoodsList(Object.assign(this.search, {pageSize: 50, page: 1})).then(res=>{
        console.log(res)
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
    }
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
  .search-form {
    // width: 1000px;
  }
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
</style>