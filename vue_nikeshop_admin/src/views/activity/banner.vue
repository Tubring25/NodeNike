<template>
  <div class="activity-container">
    <div class="header">
      <el-button type="primary" icon="el-icon-plus" @click="openDialog('add')" size="medium">添加Banner</el-button>
    </div>
    <el-table class="banner-table" :data="bannerList" border size="medium" :cell-style="cellStyle" :header-cell-style="cellStyle">
      <el-table-column prop="id" label="ID" width="60"></el-table-column>
      <el-table-column prop="title" label="标题" width="150"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
      <el-table-column prop="desc" label="类别">
        <template slot-scope="{row}">
          <span v-if="row.gender==10">首页</span>
          <span v-else-if="row.gender==1">男子</span>
          <span v-else-if="row.gender==0">女子</span>
          <span v-else>儿童</span>
        </template>
      </el-table-column>
      <el-table-column prop="imgUrl" label="图片" width="200">
        <template slot-scope="{row}">
          <img :src="'http://localhost:6741/'+row.imgUrl" alt="">
        </template>
      </el-table-column>
      <el-table-column prop="imgUrl" label="是否展示" width="100">
        <template slot-scope="{row}">
          <el-switch style="display: block;height:24px" @change="setTop(row)" v-model="row.is_top"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="创建时间" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.createdAt | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="修改时间" width="120">
        <template slot-scope="scope">
          <span>{{ scope.row.updatedAt | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" width="160">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" @click="openDialog('edit',row)">修改</el-button>
          <el-button type="danger" size="mini" @click="deleteBanner_(row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" width="40%" :close-on-click-modal="false" class="bannerDialog">
      <el-form :model="bannerFrom" :rules="rules" ref="ruleForm" label-width="100px">
        <el-form-item label="活动名称" prop="title">
          <el-input v-model="bannerFrom.title" maxlength="50" minlength="2"></el-input>
        </el-form-item>
        <el-form-item label="活动介绍" prop="desc">
          <el-input v-model="bannerFrom.desc" maxlength="50" minlength="2"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="desc">
          <el-radio-group v-model="bannerFrom.gender" size="medium">
            <el-radio-button label="10">首页</el-radio-button>
            <el-radio-button label="0">女子</el-radio-button>
            <el-radio-button label="1">男子</el-radio-button>
            <el-radio-button label="2">儿童</el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="首页展示">
          <el-switch v-model="bannerFrom.is_top"></el-switch>
        </el-form-item>
        <el-form-item lable="图片上传">
          <el-upload v-show="!bannerFrom.imgUrl" class="upload-box" action="http://localhost:6741/admin/upload"
            :on-success="uploadSuccess"
            :on-error="uploadError"
            :file-list="fileList"
            list-type="picture"
            :limit="1"
            :headers="uploadHeader">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过3M</div>
          </el-upload>
          <div v-show="bannerFrom.imgUrl" class="img-box">
            <img :src="'http://localhost:6741/'+bannerFrom.imgUrl" alt="">
            <el-tooltip class="item" effect="dark" content="删除" placement="top">
              <i class="icon el-icon-close" @click="removeImg"></i>
            </el-tooltip>
          </div>
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
      bannerFrom: {title: '', desc: '', imgUrl: '', gender:0, is_top: false},
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
        this.bannerFrom = {title: '', desc: '', imgUrl: '',gender: 0, is_top: false}
      } else {
        this.dialogTitle = '编辑'
        this.bannerFrom = Object.assign({},row)
      }
      this.dialogVisible=true
    },
    removeImg() {
      this.bannerFrom.imgUrl = ''
    },
    setTop(row) {
      this.bannerFrom = row
      editBanner(this.bannerFrom).then(res=>{
        console.log(res)
      })
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
    max-width: 200px;
    height: 100%;
    max-height: 50px;
  }
}
.img-box {
  position: relative;
  width: 300px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;  
  }
  .icon {
    position: absolute;
    top: 2px;
    right: 2px;
  }
  .icon:hover{
    color: #fff;
  }
}
</style>