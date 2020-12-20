<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <!--表单-->
        <el-form ref="form" :model="form" label-width="90px" size="mini ">
          <el-row>
            <el-col :span="2">
              <el-button @click="back()" size="mini">返回</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="档案编号" prop="rid">
                <el-input v-model="form.rid" disabled></el-input>

              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="6">
              <el-form-item label="I级机构" prop="lo1">
                <el-input v-model="form.lo1" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="II级机构" prop="lo2">
                <el-input v-model="form.lo2" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="III级机构" prop="lo3">
                <el-input v-model="form.lo3" disabled></el-input>

              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="职位分类" prop="position_classification">
                <el-input v-model="form.position_classification" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职位名称" prop="position">
                <el-input v-model="form.position" disabled></el-input>

              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="form.gender" size="mini" disabled>
                  <el-radio border label="男"></el-radio>
                  <el-radio border label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="EMAIL" prop="email">
                <el-input v-model="form.email" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="电话" prop="telephone">
                <el-input v-model="form.telephone" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手机" prop="phone">
                <el-input v-model="form.phone" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="QQ" prop="qq">
                <el-input v-model="form.qq" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="住址" prop="address">
                <el-input v-model="form.address" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮编" prop="postcode">
                <el-input v-model="form.postcode" disabled></el-input>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="国籍" prop="nationality">
                <el-input v-model="form.nationality" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="出生地" prop="birth_place">
                <el-input v-model="form.birth_place" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="生日" prop="birth_date">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birth_date" value-format="yyyy-MM-dd"
                                style="width: 100%;" disabled></el-date-picker>
                <!--                <el-input v-model="form.birth_date"></el-input>-->
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="民族" prop="ethnic">
                <el-input v-model="form.ethnic" disabled></el-input>

              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="宗教信仰" prop="political_affiliation">
                                <el-input v-model="form.political_affiliation" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="政治面貌" prop="political_status">
                                <el-input v-model="form.political_status" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号码" prop="id_number" >
                <el-input v-model="form.id_number" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="社会保障号" prop="social_security_number">
                <el-input v-model="form.social_security_number" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="年龄" prop="age">
                <el-input v-model.number="form.age" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历" prop="education">
                                <el-input v-model="form.education" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历专业" prop="professional">
                                <el-input v-model="form.professional" disabled></el-input>

              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="薪酬标准" prop="salary_standard" >
                                <el-input v-model="form.salaryStandard.standardName" disabled></el-input>

              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="开户行" prop="bank_deposit">
                <el-input v-model="form.bank_deposit" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="账号" prop="account">
                <el-input v-model="form.account" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="复核人" prop="reviewer">
                <el-input v-model="form.reviewer" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="复核时间" prop="review_time">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.review_time"
                                style="width: 100%;" disabled="ture" ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="特长" prop="specialty">
                <el-input v-model="form.specialty" disabled></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="爱好" prop="hobby">
                <el-input v-model="form.hobby" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="个人履历" prop="personal_resume">
              <el-input v-model="form.personal_resume" type="textarea"
                        :rows="3" disabled></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="家庭信息" prop="family_relationship_information">
              <el-input v-model="form.family_relationship_information" type="textarea"
                        :rows="3" disabled></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="备注" prop="remarks">
              <el-input v-model="form.remarks" type="textarea"
                        :rows="3" disabled></el-input>
            </el-form-item>
          </el-row>

        </el-form>
        <div style="position: absolute; top: 10%;right: 2%">
          <img :src="imgUrl" alt="" class="upload-img"/>
          <span>IMAGES</span>
        </div>
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
  professional, rules
} from '../assets/js/data.js';
import {updateRecord} from "../assets/js/request";


export default {
  name: 'record_read',
  data() {
    return {
      tabs: [
        {name: "档案管理模块"},
        {name: "档案查询"},
        {name: "查询详情"}
      ],
      token: localStorage.getItem("token"),
      form: this.$route.query.form,
      imgUrl: "",
    }
  },
  mounted() {
    this.imgUrl = serverUrl + this.form.img_url;
  },
  methods: {
    back() {
      this.$router.back(-1)
    },

  },
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

