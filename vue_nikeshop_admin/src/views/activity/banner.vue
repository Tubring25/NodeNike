<template>
  <div class="activity-container">
    <div class="header">
      <el-button type="primary" icon="el-icon-plus" @click="dialogVisible=true">添加Banner</el-button>
    </div>
    

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
            :on-preview="imgPreview"
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
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
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
    }
  },
  created() {
    this.uploadHeader = {'x-token': getToken()}
  },
  methods: {
    imgPreview() {

    }
  },
}
</script>
<style lang="scss" scoped>
.bannerDialog {
  .el-input {
    width: 400px;
  }
  .upload-box {
    width: 400px;
  }
}
</style>