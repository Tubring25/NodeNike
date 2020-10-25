<template>
  <div class="sku-container">
    <el-card shadow="hover" class="box-card" v-loading="specLoading">
      <div slot="header">
        <span>Sku设置</span>
        <i class="icon el-icon-plus" style="float: right; padding: 3px 0" @click="addSku"></i>
      </div>

      <div class="content-box">
        <div class="item-box" v-for="(item, index) in skuList" :key="index">
          <div class="item">
            <span class="name">颜色</span>
            <el-select v-model="item.color" placeholder="请选择">
              <el-option
                class="opt-box"
                v-for="color in colorList"
                :key="color.id"
                :label="color.name"
                :value="color.id"
              >
                <span style="float: left">{{ color.name }}</span>
                <span
                  class="cube"
                  :style="'display:block; float: right; width:10px;height:10px;margin-top:12px; background:'+color.code"
                >{{ item.value }}</span>
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
          <div class="item">
            <el-button class="button" type="primary" size="mini">添加图片</el-button>
          </div>
          <div class="item">
            <i class="icon el-icon-remove-outline" @click="removeItem(index)"></i>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skuList: [
        {
          color: null,
          colorImg: null,
          size: null,
          inventory: null,
          price: null,
          is_sale: false,
          sale_price: null
        }
      ]
    };
  },
  methods: {
    addSku() {
      let singleItem = {
        color: null,
        colorImg: null,
        size: null,
        inventory: null,
        price: null,
        is_sale: false,
        sale_price: null
      };
      if (this.skuList.length >= 30) {
        this.$message.info("最多支持添加30条信息");
        return;
      }

      this.skuList.push(singleItem);
    },
    removeItem(ind) {
      if (ind == 0 && this.skuList.length == 1) {
        this.$message.info("至少保留一条规格");
        return;
      }
      this.skuList.splice(ind, 1);
    }
  }
};
</script>
<style lang="scss" scoped>
i:hover {
  cursor: pointer;
}
.content-box {
  .item-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    .item {
      margin-right: 25px;
      position: relative;
      min-width: 100px;
      span {
        margin-right: 15px;
        display: inline-block;
        height: 40px;
        line-height: 40px;
      }
      .el-select {
        width: 120px;
      }
      .el-input {
        width: 120px;
      }
      .button,
      .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>