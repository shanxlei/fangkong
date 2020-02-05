<template>
  <div class="app-container">
    <el-form  :model="form" :rules="rules" ref="form"   label-width="120px">
      <el-form-item label="姓名" prop="name">
        <el-input placeholder="请输入姓名" v-model="form.name" />
      </el-form-item>
      <el-form-item label="手机"  prop="phone">
        <el-input placeholder="请输入手机号" v-model="form.phone" />
      </el-form-item>
       <el-form-item label="单位" prop="unit">
        <el-input placeholder="请输入单位" v-model="form.unit" />
      </el-form-item>
       <el-form-item label="职务" prop="dutyPosition">
        <el-input placeholder="请输入职务" v-model="form.dutyPosition" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    const validatePhone = (rule, value, callback) => {
      if (!(/^1[3456789]\d{9}$/.test(value))) {
        callback(new Error('请输入正确手机号'))
      } else {
        callback()
      }
    }
    return {
      form: {
        name: '',
        phone:"",
        unit:"",
        dutyPosition:""
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'change' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        unit: [
          { required: true, message: '请输入单位', trigger: 'change' },
        ],
        dutyPosition: [
          { required: true, message: '请输入职务', trigger: 'change' },
          { validator: validatePhone, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });


     
    },
    onCancel() {
      this.$router.push({ path: '/index' || '/' })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

