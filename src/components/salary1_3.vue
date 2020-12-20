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
            <label class="label1">请输入标准编号</label>
          </el-col>
          <el-col :span="7">
            <el-input v-model.number="sid" size="small" placeholder="100000000000"></el-input>
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
            width="150">
          </el-table-column>
          <el-table-column
            prop="registrant"
            label="登记人"
            width="150">
          </el-table-column>
          <el-table-column
            prop="reviewer"
            label="复核人"
            width="150">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="查看详情">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="check(scope.$index)">查看详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {arrAll} from '../assets/js/data.js'
import {arrPosition} from "../assets/js/data";
import {findAll, findAllNoCheck, findSalaryStandard, selectRecord, selectSalaryStandard} from "../assets/js/request";

export default {
  name: 'record3',
  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬标准管理"},
        {name: "薪酬标准查询"}
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
      findSalaryStandard().then((response) => {
        this.tableData = response.data.extended.salaryStandards;
      });

    },
    check(id) {
      this.$router.push({
        path: '/salary_read',
        query: {
          form: this.tableData[id]
        }
      });
    },
    reload() {
      location.reload();
    },
    select() {
      selectSalaryStandard(this.select_time, this.sid, this.key).then((response) => {
        this.tableData = response.data.extended.salaryStandards;
      });
    },

  }
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

