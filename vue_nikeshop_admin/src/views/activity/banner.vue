<template>
  <div class="activity-container">
    <div class="header">
      <el-button type="primary" icon="el-icon-plus" @click="openDialog('add')" size="medium">添加Banner</el-button>
    </div>
    <el-table class="banner-table" :data="bannerList" border size="medium" :cell-style="cellStyle" :header-cell-style="cellStyle">
      <el-table-column prop="id" label="ID" width="60"></el-table-column>
      <el-table-column prop="title" label="标题" width="200"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="imgUrl" label="图片" width="200">
        <template slot-scope="{row}">
          <img :src="'http://localhost:6741'+row.imgUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="imgUrl" label="是否展示" width="100">
        <template slot-scope="{row}">
          <el-switch style="display: block;height:24px" v-model="row.is_top"></el-switch>
        </template>
      </el-table-column>
      <el-table-column lable="操作" width="200">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="openDialog('edit',row)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteBanner_(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%" :close-on-click-modal="false" class="bannerDialog">
      <el-form :model="bannerFrom" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="活动名称" prop="title">
          <el-input v-model="bannerFrom.title"></el-input>
        </el-form-item>
        <el-form-item label="活动介绍" prop="desc">
          <el-input v-model="bannerFrom.desc"></el-input>
        </el-form-item>
        <el-form-item label="首页展示">
          <el-switch v-model="bannerFrom.is_top"></el-switch>
        </el-form-item>
        <el-form-item lable="图片上传">
          <el-upload class="upload-box" action="http://localhost:6741/admin/upload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :file-list="fileList"
            list-type="picture"
            :limit="1"
            :headers="uploadHeader">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过3M</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth';
import { addBanner, getBanerList, deleteBanner, editBanner } from '@/api/banner';
export default {
  data() {
    return {
      dialogTitle: '添加',
      dialogVisible: false,
      bannerFrom: {title: '', desc: '', imgUrl: '', is_top: false},
      rules: {
        title: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入活动描述', trigger: 'blur' },
        ],
      },
      fileList: [],
      uploadHeader: {},
      bannerList: [],
      cellStyle: {textAlign: 'center'},
      page:1,
      pageSize: 10,
    }
  },
  created() {
    this.uploadHeader = {'x-token': getToken()}
    this.getBanerList_()
  },
  methods: {
    getBanerList_(){
      getBanerList({page:1,pageSize: 10}).then(res=>{
        if(res.code == 1) {
          this.bannerList = res.data
        }
      })
    },
    uploadSuccess(res) {
      if(res.code ==1) this.bannerFrom.imgUrl = res.data.url
    },
    uploadError(err) {
      this.$message.error(err)
    },
    confirmDialog(){
      for (let key in this.bannerFrom) {
        console.log(this.bannerFrom[key])
        if(this.bannerFrom[key] == null) {
          console.log(111)
        } else {
          if (this.bannerFrom[key].toString().trim() == '') {
            this.$message.info('请填写完整')
            return
          }
        }
      }
      if(this.dialogTitle == '添加') {
        addBanner(this.bannerFrom).then(res=>{
          if(res.code==1) {
            this.$message.success(this.dialogTitle+'成功')
            this.dialogVisible = false
            this.getBanerList_()
          }
        })
      } else {
        editBanner(this.bannerFrom).then(res=>{
          if(res.code==1) {
            this.$message.success(this.dialogTitle+'成功')
            this.dialogVisible = false
            this.getBanerList_()
          }
        })
      }
    },
    deleteBanner_(id) {
      deleteBanner({id: id}).then(res=> {
        if(res.code ==1) {
          this.$message.success('删除成功')
          this.getBanerList_()
        }
      })
    },
    openDialog(type, row) {
      if (type=='add') {
        this.dialogTitle = '添加'
        this.bannerFrom = {title: '', desc: '', imgUrl: '', is_top: false}
      } else {
        this.dialogTitle = '编辑'
        this.bannerFrom = Object.assign({},row)
      }
      this.dialogVisible=true
    }
  },
}
</script>
<style lang="scss" scoped>
.bannerDialog {
  .el-input {
    width: 70%;
  }
  .upload-box {
    width: 70%;
  }
}
.activity-container {
  margin: 20px 0 0 20px;
}
.banner-table {
  margin-top: 15px;
  img{
    width: 100%;
    height: 100%;
  }
}
</style>