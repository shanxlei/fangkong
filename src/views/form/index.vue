<template>
  <div class="app-container">
    <el-form>
      <el-form-item class="title">
        <h3>XX县应对新型冠状病毒感染肺炎疫情数据填报表</h3>
      </el-form-item>
    </el-form>
    <el-form ref="form" :model="form" label-width="80px" class="content">
      <el-row>
        <el-col :span="8">
          <el-form-item label="审核人:">
            <el-input v-model="form.auditor" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="签发人:">
            <el-input v-model="form.issuer" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="填报日期:">
            <el-date-picker
              v-model="form.date1"
              type="date"
              placeholder="Pick a date"
              style="width: 100%;"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <ul class="icon-list">
        <el-row>
          <el-col :span="2" class="bt">
            <li>
              <el-form-item label="确诊人数:"></el-form-item>
            </li>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="新 增:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="累 计:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="2" class="bt">
            <li>
              <el-form-item label="疑似人数"></el-form-item>
            </li>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="新 增:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="累 计:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="2" class="bt">
            <li>
              <el-form-item label="治愈人数:"></el-form-item>
            </li>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="新 增:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="累 计:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="2" class="bt">
            <li>
              <el-form-item label="死亡人数:"></el-form-item>
            </li>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="新 增:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
          <el-col :span="11" class="bt">
            <el-form-item label="累 计:">
              <el-input v-model="form.issuer" />
            </el-form-item>
          </el-col>
        </el-row>
      </ul>
      <el-form-item class="btn_content">
        <el-button type="primary" @click="onSubmit">
          <i class="el-icon-circle-check" /> 确 定
        </el-button>
        <el-button @click="onCancel">
          <i class="el-icon-refresh-right" /> 重 置
        </el-button>
      </el-form-item>
    </el-form>

    <!-- 弹窗 -->
    <el-dialog
      title="XX县应对新型冠状病毒感染肺炎疫情数据填报表（2020年2月5日）"
      :visible.sync="centerDialogVisible"
      width="52.8%"
      center
    >
      <div>
        <p>填报单位:XXX县</p>
        <el-table :data="tableData" stripe style="width: 100%">
          <el-table-column label="确诊人数">
            <el-table-column prop="province" label="新增" width="120"></el-table-column>
            <el-table-column prop="city" label="累计" width="120"></el-table-column>
          </el-table-column>
          <el-table-column label="疑似人数">
            <el-table-column prop="province" label="新增" width="120"></el-table-column>
            <el-table-column prop="city" label="累计" width="120"></el-table-column>
          </el-table-column>
          <el-table-column label="治愈人数">
            <el-table-column prop="province" label="新增" width="120"></el-table-column>
            <el-table-column prop="city" label="累计" width="120"></el-table-column>
          </el-table-column>
          <el-table-column label="死亡人数">
            <el-table-column prop="province" label="新增" width="120"></el-table-column>
            <el-table-column prop="city" label="累计" width="120"></el-table-column>
          </el-table-column>
        </el-table>
        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        auditor: "",
        issuer: "",
        reportingtime: "",
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      centerDialogVisible: false,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
      this.centerDialogVisible = true;
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    }
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}
.title {
  text-align: center;
}
.title h3 {
  font-size: 20px;
  color: #384b73;
}
.content {
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
}
ul {
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-bottom: 30px;
}
ul.icon-list {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}
.icon-list .bt {
  float: left;
  text-align: center;
  height: 100px;
  line-height: 100px;
  color: #666;
  font-size: 13px;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  margin-right: -1px;
  margin-bottom: -1px;
  padding: 30px;
}
.btn_content {
  text-align: center;
}
.dialog-footer {
  text-align: center;
  display: block;
  margin-top: 50px;
}
.el-dialog{
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content {
    padding: 0px;
  }
  .icon-list .bt {
    float: left;
    text-align: center;
    height: 50px;
    line-height: 50px;
    color: #666;
    font-size: 13px;
    margin-right: -1px;
    margin-bottom: -1px;
    padding: 5px;
  }
  .app-container {
    padding: 10px;
  }
  .el-col-8 {
    width: 100%;
  }
  .el-col-2 {
    width: 100%;
  }
  .el-col-11 {
    width: 100%;
  }
  .content {
    padding: 20px 5px;
  }
  h3 {
    display: block;
    font-size: 1.17em;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
}
</style>

