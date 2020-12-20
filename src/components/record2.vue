<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <el-row>
          <el-col :span="1">
            <el-button icon="el-icon-refresh" @click="reload()" size="mini"></el-button>
          </el-col>
          <el-col :span="8">
            <span style="color: #666666">当前等待复核的人力资源档案总数为：{{ size }}</span>
          </el-col>
        </el-row>
        <div style="background: #cbcbcb;height: 1px;width: 100%"></div>
        <!--        表格-->
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column
            prop="rid"
            label="档案编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="100">
          </el-table-column>
          <el-table-column
            prop="lo1Name"
            label="一级机构"
            width="180">
          </el-table-column>
          <el-table-column
            prop="lo2Name"
            label="二级机构"
            width="180">
          </el-table-column>
          <el-table-column
            prop="lo3Name"
            label="三级机构"
            width="180">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="复核">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="check(scope.$index)">复核</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {findAllNoCheck} from '../assets/js/request.js'

export default {
  name: 'record2',
  data() {
    return {
      tabs: [
        {name: "档案管理模块"},
        {name: "档案复核"},
      ],
      token: localStorage.getItem("token"),
      size: null,
      tableData: null,
    }
  },
  mounted() {
      this.init();
  },
  methods: {
    init() {
      findAllNoCheck().then((response) => {
        this.tableData = response.data.extended.record;
        this.size = response.data.extended.size;
      });
    },
    check(id) {
      this.$router.push({
        path: '/recordCheck',
        query: {
          form: this.tableData[id]
        }
      });
    },
    reload() {
      location.reload();
    }
  },
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

