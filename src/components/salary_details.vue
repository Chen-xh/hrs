<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <!--表单-->
        <el-form ref="form" :model="form" :rules="rules" label-width="70px" size="mini ">
          <el-row>
            <el-form-item>
              <el-col :span="2" offset="18">
                <el-button type="primary" @click="submitForm('form')">登记</el-button>
              </el-col>
              <el-col :span="2">
                <el-button @click="back()">返回</el-button>
              </el-col>
            </el-form-item>

          </el-row>
          <el-row>
            <el-col :span="3" align="left" class="label1">薪酬发放单编号:</el-col>
            <el-col :span="5" align="left" class="label1">{{ form.said }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="1" align="left" class="label1">机构:</el-col>
            <el-col :span="10" align="left" class="label1">{{ form.lo1Name }} / {{ form.lo2Name }} / {{ form.lo3Name }}</el-col>
          </el-row>
          <el-row>
            <el-col :span="2" align="left" class="label1">总人数:</el-col>
            <el-col :span="1" align="left" class="label1">{{ form.number }},</el-col>
            <el-col :span="3" align="left" class="label1">基本薪酬总额:</el-col>
            <el-col :span="2" align="left" class="label1">{{ form.amount }},</el-col>
            <el-col :span="5" align="left" class="label1">实发总额:</el-col>
          </el-row>
          <el-row>
            <el-col :span="4" align="left">
              <el-form-item label="登记人" prop="registrant">
                <el-input v-model="form.registrant" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5" offset="15">
              <el-form-item label="登记时间" prop="registrationTime">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.registrationTime"
                                style="width: 100%;" disabled="ture"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <div style="background: #e5e3e3;height: 2px;margin-bottom: 5px"></div>
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="rid"
              fixed="left"
              label="档案标号"
              width="120">
            </el-table-column>
            <el-table-column
              prop="username"
              fixed="left"
              label="姓名"
              width="100">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.basicSalary"
              label="基本工资">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.transportationAllowance"
              label="交通补助">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.lunchAllowance"
              label="午餐补助">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.communicationSubsidy"
              label="通信补助">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.endowmentInsurance"
              label="养老保险">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.medicalInsurance"
              label="医疗保险">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.unemploymentInsurance"
              label="失业保险">
            </el-table-column>
            <el-table-column
              prop="salaryStandard.housingProvidentFund"
              label="失业保险">
            </el-table-column>
            <el-table-column
              prop="bonus"
              width="200"
              label="奖励奖金">
              <template slot-scope="scope">
                <el-input  type="number" size="mini" v-model.number="scope.row.bonus" ></el-input>
              </template>
            </el-table-column>
            <el-table-column
              prop="deductionBonus"
              width="200"
              label="扣除奖金">
              <template slot-scope="scope">
                <el-input  type="number" size="mini" v-model.number="scope.row.deductionBonus"></el-input>
              </template>
            </el-table-column>
          </el-table>
        </el-form>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {addSalaryList, updateSalaryStandard} from "../assets/js/request";
import {rules_salary} from "../assets/js/rules";

export default {
  name: 'salary_details',
  data() {
    return {
      tabs: [
        {name: "薪酬管理模块"},
        {name: "薪酬发放管理"},
        {name: "薪酬发放登记"},
        {name: "登记复核详情"}
      ],
      token: localStorage.getItem("token"),
      form: this.$route.query.form,
      tableData:this.$route.query.form.salaryDetails,
      rules: rules_salary,
    }
  },
  mounted() {
    this.form.registrationTime = new Date();
    this.form.registrant = localStorage.getItem("username");
    this.form.realAmount=0;
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addSalaryList(this.form).then((response) => {
            alert(response.data.message)
            this.back();
          });
        } else {
          return false;
        }
      });
    },
    back() {
      this.$router.push({
        path: '/salary4',
      })
    },
    getSum() {
      if (this.form.sum === -3) this.form.basicSalary = 0;
      if (this.form.basicSalary === "") this.form.basicSalary = 0;
      if (this.form.transportationAllowance === "") this.form.transportationAllowance = 0;
      if (this.form.lunchAllowance === "") this.form.lunchAllowance = 0;
      if (this.form.communicationSubsidy === "") this.form.communicationSubsidy = 0;
      this.form.sum = parseFloat(this.form.basicSalary) + parseFloat(this.form.transportationAllowance) +
        parseFloat(this.form.lunchAllowance) + parseFloat(this.form.communicationSubsidy) -
        parseFloat(this.form.endowmentInsurance) - parseFloat(this.form.medicalInsurance) -
        parseFloat(this.form.unemploymentInsurance) - parseFloat(this.form.housingProvidentFund)
    }

  },


}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

