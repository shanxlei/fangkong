<template>
  <div class="app-container">
    <el-form>
      <el-form-item class="tabletitle">
        <h3>XX县应对新型冠状病毒感染肺炎疫情数据填报表</h3>
      </el-form-item>
    </el-form>
    <div class="table">
     <el-table
        style="width: 100%"
        :data="tableData"
        class="content"
        >
        <el-table-column
          prop="date"
          label="日期"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          prop="reported"
          label="上报时间"
          align="center"
          width="100">
        </el-table-column>

        <el-table-column 
          label="确诊人数"
          align="center"
        >
          <el-table-column
            prop="comfirmedAdd"
            label="新增"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            prop="comfirmedAll"
            label="累计"
            align="center"
            width="60">
          </el-table-column>
         </el-table-column>

         <el-table-column 
          label="疑似人数"
          align="center"
        >
          <el-table-column
            prop="suspectedAdd"
            label="新增"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            prop="suspectedAll"
            label="累计"
            align="center"
            width="60">
          </el-table-column>
         </el-table-column>

         <el-table-column 
          label="治愈人数"
          align="center"
        >
          <el-table-column
            prop="cureAdd"
            label="新增"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            prop="cureAll"
            label="累计"
            align="center"
            width="60">
          </el-table-column>
         </el-table-column>

        <el-table-column 
          label="死亡人数"
          align="center"
        >
          <el-table-column
            prop="deathAdd"
            label="新增"
            align="center"
            width="60">
          </el-table-column>
          <el-table-column
            prop="deathAll"
            label="累计"
            align="center"
            width="60">
          </el-table-column>
         </el-table-column>

        <el-table-column
          prop="tbPerson"
          label="填报人"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          prop="shPerson"
          label="审核人"
          align="center"
          width="80">
        </el-table-column>
         <el-table-column
          prop="qfPerson"
          label="签发人"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          align="center"
          width="80">
          <template slot-scope="scope">
          <span :class="scope.row.status === '已提交' ? 'primary' : 'success'">
            {{scope.row.status}}
          </span>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-edit"
              :type="scope.row.type | statusFilter"
              @click="handleEdit(scope.$index, scope.row)"
              >修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  filters: {
    statusFilter(type) {
      const statusMap = {
        true: 'primary',
        false: 'info',
      }
      return statusMap[type]
    },
    typeFilter(type) {
      const typeMap = {
        true: '',
        false: 'disabled',
      }
      return typeMap[type]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
       tableData: [{
          date: '2020-01-16',
          reported: '2020-01-16 21:38:11',
          comfirmedAdd: '1',
          comfirmedAll: '23',
          suspectedAdd: '1',
          suspectedAll: '23',
          cureAdd:  '1',
          cureAll: '23',
          deathAdd: '1',
          deathAll: '5',
          tbPerson: '张三',
          shPerson: '李四',
          qfPerson: '王五',
          status: '已提交',
          type: false
        },{
          date: '2020-01-19',
          reported: '2020-01-16 21:38:11',
          comfirmedAdd: '1',
          comfirmedAll: '23',
          suspectedAdd: '1',
          suspectedAll: '23',
          cureAdd:  '1',
          cureAll: '23',
          deathAdd: '1',
          deathAll: '5',
          tbPerson: '张三',
          shPerson: '李四',
          qfPerson: '王五',
          status: '未提交',
          type: true,
        },{
          date: '2020-01-20',
          reported: '2020-01-16 21:38:11',
          comfirmedAdd: '1',
          comfirmedAll: '23',
          suspectedAdd: '1',
          suspectedAll: '23',
          cureAdd:  '1',
          cureAll: '23',
          deathAdd: '1',
          deathAll: '5',
          tbPerson: '张三',
          shPerson: '李四',
          qfPerson: '王五',
          status: '已提交',
          type: false
        } ]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
     handleEdit(index, row) {
        console.log(index, row);
    }
   
  }
}
</script>
<style>
.content {
  -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 30px;
}
.tabletitle {
  text-align: center;
}
.tabletitle h3 {
  font-size: 20px;
  color: #384b73;
}
.table .el-table thead {
  color: #323232;
}
.table .el-table td, .el-table th.is-leaf,.table .el-table--border, .el-table--group
,.table .el-table--border th, .el-table__fixed-right-patch
,.table .el-table--border th.gutter:last-of-type{
  border-color: #D1D1D3;
}
.table .el-table--enable-row-hover .el-table__body tr:hover>td{
  background-color:#EAF7FF; 
}
.table .el-table td, .el-table th{
  padding: 7px 0;
}
.table .primary{
  color: #409EFF;
}
.el-table--border, .el-table--group{
  border: none;
}
</style>
