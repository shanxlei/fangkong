<template>
  <div class="dashboard-container">
    <div class="contacts-wrap clearfix">
       <div class="tree-warp">
          <div>
            <el-tree 
              :data="data" 
              :props="defaultProps" 
              @node-click="handleNodeClick"
            >
            </el-tree>
          </div>
        </div>
        <div class="table-warp">
           <el-table
              :data="tableData"
              border
              style="width: 100%">
              <el-table-column
                type="index"
                  label="序号">
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
               <el-table-column
                prop="date"
                label="手机"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="单位">
              </el-table-column>
              <el-table-column
                prop="name"
                label="职务">
              </el-table-column>
               <el-table-column
                prop="name"
                label="职务">
              </el-table-column>
            </el-table>
        </div>

    </div>
     
       
      
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  data(){
    return{
       data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
          
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
          
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
           
          }, {
            label: '二级 3-2',
            
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  methods:{
    handleNodeClick(data){

    },
    getTreedta(){

    }
  }
}
</script>

<style>
.contacts-wrap{
 
}
.tree-warp{
  width:20%;
  float: left;
}
.table-warp{
  width:80%;
  float: left;
}

@media screen and (max-width: 700px) {
    body {
        background-color:lightblue;
    }
}
</style>



