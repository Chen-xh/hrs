<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <!--表单-->
        <el-form ref="form" :model="form" :rules="rules" label-width="90px" size="mini ">
          <el-row>
            <el-form-item>
              <el-col :span="4" offset="18">
                <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
              </el-col>
              <el-col :span="2">
                <el-button @click="resetForm('form')">重置</el-button>
              </el-col>
            </el-form-item>

          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="I级机构" prop="lo1">
                <!--                <el-input v-model="form.lo1"></el-input>-->
                <el-select v-model.number="form.lo1" placeholder="请选择">
                  <el-option
                    v-for="item in ol1_options"
                    :key="item.organizationName"
                    :label="item.organizationName"
                    :value="item.ol1Id">{{ item.organizationName }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="II级机构" prop="lo2">
                <!--                <el-input v-model="form.lo2"></el-input>-->
                <el-select v-model="form.lo2" placeholder="请选择">
                  <el-option
                    v-for="item in ol2_options"
                    :key="item.organizationName"
                    :label="item.organizationName"
                    :value="item.ol2Id">{{ item.organizationName }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="III级机构" prop="lo3">
                <!--                <el-input v-model="form.lo3"></el-input>-->
                <el-select v-model="form.lo3" placeholder="请选择">
                  <el-option
                    v-for="item in ol3_options"
                    :key="item.organizationName"
                    :label="item.organizationName"
                    :value="item.ol3Id">{{ item.organizationName }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="职位分类" prop="position_classification">
                <!--                <el-input v-model="form.position_classification"></el-input>-->
                <el-select v-model="form.position_classification" placeholder="请选择">
                  <el-option
                    v-for="item in position_classification_options"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name">{{ item.name }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职位名称" prop="position">
                <!--                <el-input v-model="form.position"></el-input>-->
                <el-select v-model="form.position" placeholder="请选择">
                  <el-option
                    v-for="item in position_options"
                    :key="item.name"
                    :label="item.name"
                    :value="item.name">{{ item.name }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="姓名" prop="username">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="性别" prop="gender">
                <el-radio-group v-model="form.gender" size="mini">
                  <el-radio border label="男"></el-radio>
                  <el-radio border label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="EMAIL" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="电话" prop="telephone">
                <el-input v-model="form.telephone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="手机" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="QQ" prop="qq">
                <el-input v-model="form.qq"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="住址" prop="address">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="邮编" prop="postcode">
                <el-input v-model="form.postcode"></el-input>
              </el-form-item>
            </el-col>

          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="国籍" prop="nationality">
                <!--                <el-input v-model="form.nationality"></el-input>-->
                <el-select v-model="form.nationality" placeholder="请选择">
                  <el-option
                    v-for="item in nationality_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="出生地" prop="birth_place">
                <el-input v-model="form.birth_place"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="生日" prop="birth_date">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.birth_date"
                                style="width: 100%;"></el-date-picker>
                <!--                <el-input v-model="form.birth_date"></el-input>-->
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="民族" prop="ethnic">
                <!--                <el-input v-model="form.ethnic"></el-input>-->
                <el-select v-model="form.ethnic" placeholder="请选择">
                  <el-option
                    v-for="item in ethnic_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="宗教信仰" prop="political_affiliation">
                <!--                <el-input v-model="form.political_affiliation"></el-input>-->
                <el-select v-model="form.political_affiliation" placeholder="请选择">
                  <el-option
                    v-for="item in political_affiliation_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="政治面貌" prop="political_status">
                <!--                <el-input v-model="form.political_status"></el-input>-->
                <el-select v-model="form.political_status" placeholder="请选择">
                  <el-option
                    v-for="item in political_status_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号码" prop="id_number">
                <el-input v-model="form.id_number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="社会保障号" prop="social_security_number">
                <el-input v-model="form.social_security_number"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="年龄" prop="age">
                <el-input v-model.number="form.age"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历" prop="education">
                <!--                <el-input v-model="form.education"></el-input>-->
                <el-select v-model="form.education" placeholder="请选择">
                  <el-option
                    v-for="item in education_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="学历专业" prop="professional">
                <!--                <el-input v-model="form.professional"></el-input>-->
                <el-select v-model="form.professional" placeholder="请选择">
                  <el-option
                    v-for="item in professional_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="薪酬标准" prop="salary_standard">
                <!--                <el-input v-model="form.salary_standard"></el-input>-->
                <el-select v-model="form.salary_standard" placeholder="请选择">
                  <el-option
                    v-for="item in salary_standard_options"
                    :key="item.standardName"
                    :label="item.standardName"
                    :value="item.sid">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="开户行" prop="bank_deposit">
                <el-input v-model="form.bank_deposit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="账号" prop="account">
                <el-input v-model="form.account"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="登记人">
                <el-input v-model="form.registrant" disabled></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-form-item label="建档时间">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.registration_time"
                                style="width: 100%;" disabled="ture"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="特长" prop="specialty">
                <el-input v-model="form.specialty"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="爱好" prop="hobby">
                <el-input v-model="form.hobby"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="个人履历" prop="personal_resume">
              <el-input v-model="form.personal_resume" type="textarea"
                        :rows="3"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="家庭信息" prop="family_relationship_information">
              <el-input v-model="form.family_relationship_information" type="textarea"
                        :rows="3"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="备注" prop="remarks">
              <el-input v-model="form.remarks" type="textarea"
                        :rows="3"></el-input>
            </el-form-item>
          </el-row>

        </el-form>
        <div style="position: absolute; top: 10%;right: 2%">
          <el-upload class="upload-img"
                     :style="{backgroundImage:'url(' + imgUrl + ')', backgroundRepeat:'no-repeat', backgroundPosition:'center center', backgroundSize:'cover'}"
                     action="#"
                     ::limit="1"
                     :auto-upload="false"
                     :show-file-list="false"
                     :on-change="getLocalImg"
                     accept="image/png,image/gif,image/jpg,image/jpeg">
            <i v-if="isHidden" class="el-icon-plus "></i>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
          </el-upload>
          <span>IMAGES</span>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
import {arrPosition} from "../assets/js/data";
import {addRecord, findSalaryStandard} from '../assets/js/request.js'
import {
  nationality,
  ethnic,
  political_affiliation,
  political_status,
  education,
  professional
} from '../assets/js/data.js';
import {rules} from "../assets/js/rules";
import {findSalaryStandardChecked, getAllOrganization} from "../assets/js/request";

export default {
  name: 'record1',
  data() {
    return {
      tabs: [
        {name: "档案管理模块"},
        {name: "档案登记"},
      ],
      token: localStorage.getItem("token"),

      ol1_options: null,
      ol2_options: [],
      ol3_options: [],
      position_classification_options: arrPosition,
      position_options: [],

      salary_standard_options: null,
      ethnic_options: ethnic,
      political_affiliation_options: political_affiliation,
      political_status_options: political_status,
      education_options: education,
      professional_options: professional,
      nationality_options: nationality,

      form: {
        username: '',
        gender: '',
        email: '',
        phone: '',
        qq: '',
        telephone: '',
        address: '',
        postcode: '',
        nationality: '',
        birth_place: '',
        birth_date: '',
        ethnic: '',
        political_affiliation: '',
        political_status: '',
        id_number: '',
        social_security_number: '',
        age: '',
        education: '',
        professional: '',
        salary_standard: '',
        bank_deposit: '',
        account: '',
        specialty: '',
        registrant: localStorage.getItem("username"),
        registration_time: new Date(),
        hobby: '',
        personal_resume: '',
        family_relationship_information: '',
        remarks: '',
        position_classification: '',
        position: '',
        lo1: '',
        lo2: '',
        lo3: '',
      },
      rules: rules,
      imgUrl: null,
      isHidden: true,
      file: null,
    }
  },

  mounted() {
    this.init();
  },
  methods: {
    init(){
      findSalaryStandardChecked().then((response) => {
        this.salary_standard_options = response.data.extended.salaryStandards;
      });
      getAllOrganization().then((response) => {
        this.ol1_options = response.data.extended.organization;
      });
    },
    getLocalImg(event) {
      // 获取上传图片的本地url，用于上传前的本地预览
      let url = '';
      if (window.createObjectURL !== undefined) {
        url = window.createObjectURL(event.raw);
      } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(event.raw);
      } else if (window.webkitURL !== undefined) {
        url = window.webkitURL.createObjectURL(event.raw);
      }

      this.file = event.raw;
      this.imgUrl = url;
      this.isHidden = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          addRecord(this.form, this.file).then((response) => {
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
    updateOl2: function () {
      for (var i in this.ol1_options) {
        var obj = this.ol1_options[i];
        if (obj.organizationName) {
          if (obj.ol1Id === this.form.lo1) {
            this.ol2_options = obj.sub;
            break;
          }
        }
      }
      this.form.lo2 = this.ol2_options[0].ol2Id;
    },
    updateOl3: function () {
      for (var i in this.ol2_options) {
        var obj = this.ol2_options[i];
        if (obj.ol2Id === this.form.lo2) {
          this.ol3_options = obj.sub;
          break;
        }
      }
      if (this.ol3_options && this.ol3_options.length > 0 && this.ol3_options[0].organizationName) {
        this.form.lo3 = this.ol3_options[0].ol3Id;
      } else {
        this.form.lo3 = '';
      }
    },
    updatePn: function () {
      for (var i in this.position_classification_options) {
        var obj = this.position_classification_options[i];

        if (obj.name) {
          if (obj.name === this.form.position_classification) {
            this.position_options = obj.sub;
            break;
          }
        }
      }
      this.form.position = this.position_options[0].name;
    }
  },
  watch: {
    'form.lo1': function () {
      this.updateOl2();
      this.updateOl3();
    },
    'form.lo2': function () {
      this.updateOl3();
    },
    'form.position_classification': function () {
      this.updatePn();
    }
  },
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

