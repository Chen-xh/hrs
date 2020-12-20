<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <!--表单-->
        <el-form ref="form" :model="form" :rules="rules" label-width="120px" size="mini ">
          <el-row>
              <el-col :span="2" >
                <el-button @click="back()" size="mini ">返回</el-button>
              </el-col>

          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="薪酬标准编号" prop="sid">
                <el-input v-model="form.sid" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬标准名称" prop="standardName">
                <el-input v-model="form.standardName" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬总额" prop="sum">
                <el-input v-model.number="form.sum" disabled type="number" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="制定人" prop="maker">
                <el-input v-model="form.maker" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记人" prop="registrant">
                <el-input v-model="form.registrant" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记时间" prop="registrationTime">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.registrationTime"
                                style="width: 100%;" disabled></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="复核意见" prop="opinion">
              <el-input v-model="form.opinion" type="textarea"
                        :rows="3"disabled ></el-input>
            </el-form-item>
          </el-row>
          <div style="background: #e5e3e3;height: 2px;margin-bottom: 5px"></div>
          <el-row>
            <el-col :span="4">
              <el-form-item label="序号"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="薪酬项目名称"></el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="金额"></el-form-item>
            </el-col>
          </el-row>
          <div style="background: #e5e3e3;height: 2px;margin-bottom: 5px"></div>
          <el-row style="background: #fcfafa;">
            <el-col :span="4">
              <el-form-item label="1"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="基础工资">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="basicSalary" label-width="0">
                <el-input v-model.number="form.basicSalary" type="number" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item label="2"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="交通补助">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="transportationAllowance" label-width="0">
                <el-input v-model.number="form.transportationAllowance" type="number" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="background: #fcfafa;">
            <el-col :span="4">
              <el-form-item label="3"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="午餐补助">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="lunchAllowance" label-width="0">
                <el-input v-model.number="form.lunchAllowance" type="number" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item label="4"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="通信补助">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="communicationSubsidy" label-width="0">
                <el-input v-model.number="form.communicationSubsidy" type="number" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="background: #fcfafa;">
            <el-col :span="4">
              <el-form-item label="5"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="养老保险" prop="basicSalary">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="endowmentInsurance" label-width="0">
                <el-tooltip class="item" effect="dark" content="基本工资 * 8%" placement="right">
                  <el-input v-model.number="form.endowmentInsurance" disabled></el-input>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item label="6"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="医疗保险">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="medicalInsurance" label-width="0">
                <el-tooltip class="item" effect="dark" content="基本工资 * 2% + 3" placement="right">
                  <el-input v-model.number="form.medicalInsurance" disabled></el-input>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row style="background: #fcfafa;">
            <el-col :span="4">
              <el-form-item label="7"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="失业保险">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="unemploymentInsurance" label-width="0">
                <el-tooltip class="item" effect="dark" content="基本工资 * 0.5%" placement="right">
                  <el-input v-model.number="form.unemploymentInsurance" disabled></el-input>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="4">
              <el-form-item label="8"></el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="住房公积金">
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="" prop="housingProvidentFund" label-width="0">
                <el-tooltip class="item" effect="dark" content="基本工资 * 8%" placement="right">
                  <el-input v-model.number="form.housingProvidentFund" disabled></el-input>
                </el-tooltip>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {serverUrl} from '../assets/js/request.js';
import {
  nationality,
  ethnic,
  political_affiliation,
  political_status,
  education,
  professional
} from '../assets/js/data.js';
import {updateRecord, updateSalaryStandard} from "../assets/js/request";
import {rules, rules_salary} from "../assets/js/rules";

export default {
  name: 'salary_read',
  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬标准管理"},
        {name: "薪酬标准查询"},
        {name: "薪酬标准详情"}
      ],
      token: localStorage.getItem("token"),
      form: this.$route.query.form,
    }
  },
  mounted() {
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    back() {
      this.$router.push({
        path: '/salary3',
      })
    },


  },

}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

