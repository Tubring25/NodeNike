<template>
  <div class="navbar-container">
    <div class="header">
      <div class="left">
        <span class="nike">NIKE会员</span>
        <span class="jordan">AIR JORDAN</span>
      </div>
      <div class="right">
        <span>{{username}}</span>
        <span>帮助</span>
      </div>
    </div>
    <div class="guide">
      <div class="left">
        <img src="../../assets/logo.png" alt="" srcset="">
      </div>
      <div class="center" @mouseenter="showDrop=true">
        <span>男子</span>
        <span>女子</span>
        <span>儿童</span>
      </div>
      <div class="right">
        <el-input placeholder="" v-model="search">
          <i slot="prepend" class="el-icon-search"></i>
        </el-input>
      </div>
    </div>
    <transition name="fade">
      <div v-show="showDrop" class="drop" @mouseleave="showDrop=false">
        <div class="left">
          <ul>
            <li>人气热销</li>
            <li>最新上市</li>
            <li>SNKRS新品预览</li>
            <li>会员限定</li>
            <li>折扣优惠</li>
            <li>篮球街头穿搭</li>
          </ul>
        </div>
        <div class="center">
          <div>
            <p class="title">所有鞋类</p>
            <ul>
              <li v-for="item in shoesList" :key="item.id">{{item.name}}</li>
            </ul>
          </div>
          <div>
            <p class="title">所有服装</p>
            <ul>
              <li v-for="item in clothesList" :key="item.id">{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="right">
          <div>
            <p class="title">运动</p>
            <ul>
              <li v-for="item in sportsList" :key="item.id">{{item.name}}</li>
            </ul>
          </div>
          <div>
            <p class="title">品牌</p>
            <ul v-for="item in brandsList" :key="item.id">
              <li>{{item.name}}</li>
            </ul>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth';
import { getGoodsCategory } from '@/api/goods/goods'
export default {
  data() {
    return {
      username: '',
      clothesList: [],
      shoesList: [],
      brandsList: [],
      sportsList: [],
      search: '',
      showDrop: false,
    }
  },
  created() {
    if (!getToken()) this.username='加入/登录 Nike 会员帐户'
    this.getGoodsCategory_()
  },
  methods: {
    getGoodsCategory_() {
      getGoodsCategory().then(res=> {
        if(res.code == 1) {
          this.shoesList = res.data[0].filter(a=>a.type==0)
          this.clothesList = res.data[0].filter(a=>a.type==1)
          this.sportsList = res.data[1] 
          this.brandsList = res.data[2]
          console.log(this.shoesList)
        }
      })
    }
  },
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid rgba($color: #999, $alpha: 0.3);
  height: 40px;
  span{
    height: 40px;
    line-height: 40px;
    display: inline-block;
    font-size: 12px;
  }
  .left {
    margin-left: 20px;
    color: rgba($color: #111, $alpha: 0.7);
    span {
      padding: 0 20px;
    }
    .nike {
      border-right: 1px solid rgba($color: #999, $alpha: 0.3);
    }
    .nike:hover{
      color: #111;
      cursor: pointer;
    }
    .jordan:hover{
      color: #CE114F;
      cursor: pointer;
    }
  }
  .right:hover {
    cursor: pointer;
  }
  .right{
    margin-right: 20px;
    span {
      padding: 0 10px;
      margin: 0 10px;
    }
    span:hover{
      border-bottom: 2px solid #111;
    }
  }
}
.guide {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba($color: #999, $alpha: 0.3);
  .left{
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    img{
      width: 80px;
      height: 30px;
    }
  }
  .center {
    span {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
      padding: 0 15px;
      margin: 0 20px;
      font-weight: lighter;
    }
    span:hover {
      border-bottom: 2px solid #111;
    }
  }
  .right {
    width: 200px;
    padding-right: 30px;
  }
}
.drop {
  position: absolute;
  top: 102px;
  z-index: 10;
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid rgba($color: #999, $alpha: 0.3);

  div {
    padding: 0 30px;
  }
  ul{
    padding: 0;
  }
  li {
    list-style: none;
    padding-top: 15px;
    font-size: 13px;
    font-weight: lighter;
    color: #111;
    cursor: pointer;
  }
  li:hover{
    color: rgba($color: #111, $alpha: 0.8);
  }
  p{
    margin: 0;
  }
  .left{
    width:200px;
    border-right: 1px solid rgba($color: #999, $alpha: 0.3);
    li {
      font-size: 18px;
    }
  }
  .center{
    widows: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-right: 1px solid rgba($color: #999, $alpha: 0.3);
    li {
      padding: 5px 0;
    }
    .title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
  .right{
    width: 400px;
    display: flex;
    flex-direction: row;
    li {
      padding: 5px 0;
    }
    .title {
      margin-top: 10px;
      font-size: 18px;
      font-weight: lighter;
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
<style>
.el-input-group__prepend {
  background: none;
}
</style>