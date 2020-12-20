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
            <el-form-item>
              <el-col :span="4" offset="18">
                <el-button type="primary" @click="submitForm('form')">提交</el-button>
              </el-col>
              <el-col :span="2">
                <el-button @click="resetForm('form')">重置</el-button>
              </el-col>
            </el-form-item>

          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="薪酬标准名称" prop="standardName">
                <el-input v-model="form.standardName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="薪酬总额" prop="sum">
                <el-input v-model.number="form.sum" readonly type="number" oninput="value=value.replace(/[^\d]/g,'')"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="制定人" prop="maker">
                <el-input v-model="form.maker"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记人" prop="registrant">
                <el-input v-model="form.registrant"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="登记时间" prop="registrationTime">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.registrationTime"
                                style="width: 100%;" disabled="true"></el-date-picker>
              </el-form-item>
            </el-col>
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
                <el-input v-model.number="form.basicSalary" type="number"></el-input>
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
                <el-input v-model.number="form.transportationAllowance" type="number"></el-input>
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
                <el-input v-model.number="form.lunchAllowance" type="number"></el-input>
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
                <el-input v-model.number="form.communicationSubsidy" type="number"></el-input>
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
                  <el-input v-model.number="form.endowmentInsurance" readonly></el-input>
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
                  <el-input v-model.number="form.medicalInsurance" readonly></el-input>
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
                <el-input v-model.number="form.unemploymentInsurance" readonly></el-input>
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
                <el-input v-model.number="form.housingProvidentFund" readonly></el-input>
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
import {addRecord} from '../assets/js/request.js'
import {rules_salary} from "../assets/js/rules";
import {addSalaryStandard, addSalatyStandard} from "../assets/js/request";

export default {
  name: 'salary1-1',

  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬标准管理"},
        {name: "薪酬标准登记"}
      ],
      form: {
        standardName: '',
        maker: '',
        registrant: localStorage.getItem("username"),
        registrationTime: new Date(),
        sum: 0.00,
        basicSalary: 0,
        transportationAllowance: 0,
        lunchAllowance: 0,
        communicationSubsidy: 0,
        endowmentInsurance: 0,
        medicalInsurance: 0,
        unemploymentInsurance: 0,
        housingProvidentFund: 0,
        opinion: '',
        target: '',
      },
      rules: rules_salary,
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addSalaryStandard(this.form).then((response) => {
            alert(response.data.message)
          });
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getSum() {
      if (this.form.sum === -3) this.form.basicSalary = 0;
      if (this.form.basicSalary === "") this.form.basicSalary = 0;
      if (this.form.transportationAllowance === "") this.form.transportationAllowance = 0;
      if (this.form.lunchAllowance === "") this.form.lunchAllowance = 0;
      if (this.form.communicationSubsidy === "") this.form.communicationSubsidy = 0;
      this.form.sum=parseFloat(this.form.basicSalary) + parseFloat(this.form.transportationAllowance) +
        parseFloat(this.form.lunchAllowance) + parseFloat(this.form.communicationSubsidy) -
        parseFloat(this.form.endowmentInsurance) - parseFloat(this.form.medicalInsurance) -
        parseFloat(this.form.unemploymentInsurance) - parseFloat(this.form.housingProvidentFund)
    }
  },
  watch: {
    "form.basicSalary": function () {
      if (this.form.basicSalary === "") this.form.basicSalary = 0;
      let tem = this.form.basicSalary;
      this.form.endowmentInsurance = tem * 0.08
      this.form.medicalInsurance = tem * 0.02 + 3
      this.form.unemploymentInsurance = tem * 0.005
      this.form.housingProvidentFund = tem * 0.08
      this.getSum()
    },
    "form.transportationAllowance": function () {
      this.getSum()
    },
    "form.housingProvidentFund": function () {
      this.getSum()
    },
    "form.lunchAllowance": function () {
      this.getSum()
    },
    "form.communicationSubsidy": function () {
      this.getSum()
    },
    "form.endowmentInsurance": function () {
      this.getSum()
    },
    "form.medicalInsurance": function () {
      this.getSum()
    },
    "form.unemploymentInsurance": function () {
      this.getSum()
    },
  }
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

