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
          <el-col :span="2">
            <el-button type="primary" icon="el-icon-search" @click="select()" size="mini">查询</el-button>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="3" align="left">
            <label class="label1">请输入薪酬单号</label>
          </el-col>
          <el-col :span="7">
            <el-input v-model.number="sid" size="small" placeholder="SG1000000000"></el-input>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="3" align="left">
            <label class="label1">请输入关键字</label>
          </el-col>
          <el-col :span="7">
            <el-input v-model="key" size="small" placeholder="key"></el-input>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="3" align="left">
            <span class="label1">请输入登记时间</span>
          </el-col>
          <el-col :span="8" align="left">
            <el-date-picker
              size="small"
              v-model="select_time"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <div style="background: #cbcbcb;height: 1px;width: 100%"></div>
        <!--        表格-->
        <el-table :data="tableData" stripe style="width: 100%;">
          <el-table-column
            prop="said"
            label="薪酬发放单编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="lo1Name"
            label="一级机构"
            width="150">
          </el-table-column>
          <el-table-column
            prop="lo2Name"
            label="二级机构"
            width="150">
          </el-table-column>
          <el-table-column
            prop="lo3Name"
            label="三级机构"
            width="150">
          </el-table-column>
          <el-table-column
            prop="number"
            label="人数"
            width="100">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="薪酬总额"
            width="150">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="查看详情">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="check(scope.$index)">详情</el-button>
            </template>
          </el-table-column>
        </el-table>

      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {findAllNoCheck, selectSalaryStandard} from '../assets/js/request.js'
import {getSalaryList, getSalaryListChecked, getSalaryListNoCheck, selectSalaryList} from "../assets/js/request";

export default {
  name: 'salary2_3',
  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬发放管理"},
        {name: "薪酬发放查询"}
      ],
      token: localStorage.getItem("token"),
      tableData: null,
      select_time: null,
      sid: null,
      key: null
    }
  },
  mounted() {
      this.init();
  },
  methods: {
    init() {
      getSalaryListChecked().then((response) => {
        this.tableData = response.data.extended.salaryLists;
      });
    },
    check(id) {
      this.$router.push({
        path: '/salary_details3',
        query: {
          form: this.tableData[id]
        }
      });
    },
    reload() {
      location.reload();
    },
    select() {
      selectSalaryList(this.select_time, this.sid, this.key).then((response) => {
        this.tableData = response.data.extended.salaryLists;
      });
    },
  },
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

