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
            <span style="color: #666666">当前等待复核的薪酬标准总数为：{{ size }}</span>
          </el-col>
        </el-row>
        <div style="background: #cbcbcb;height: 1px;width: 100%"></div>
        <!--        表格-->
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column
            prop="sid"
            label="薪酬标准编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="standardName"
            label="薪酬标准名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="maker"
            label="制定人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="sum"
            label="薪酬总额"
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
import {findSalaryStandardNoCheck} from "../assets/js/request";

export default {
  name: 'record1-2',
  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬标准管理"},
        {name: "薪酬标准复核"},
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
      findSalaryStandardNoCheck().then((response) => {
        this.tableData = response.data.extended.salaryStandards;
        this.size = response.data.extended.size;
      });
    },
    check(id) {
      this.$router.push({
        path: '/salaryCheck',
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

