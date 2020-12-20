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
          <el-col :span="2" align="left">
            <label class="label1">机构</label>
          </el-col>
          <el-col :span="15" align="left">
            <el-select v-model.number="ol1_option" size="small " placeholder="一级机构">
              <el-option v-for="option in ol1_options" :key="option.organizationName" :label="option.organizationName" :value="option.ol1Id">
                {{ option.organizationName }}
              </el-option>
            </el-select>
            <el-select v-model.number="ol2_option" size="small " placeholder="二级机构">
              <el-option v-for="option in ol2_options" :key="option.organizationName" :label="option.organizationName" :value="option.ol2Id">
                {{ option.organizationName }}
              </el-option>
            </el-select>
            <el-select v-model.number="ol3_option" size="small " placeholder="三级机构">
              <el-option v-for="option in ol3_options" :key="option.organizationName" :label="option.organizationName" :value="option.ol3Id">
                {{ option.organizationName }}
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="2" align="left">
            <label class="label1">职位</label>
          </el-col>
          <el-col :span="10" align="left">
            <el-select v-model="position_classify_options" size="small " placeholder="职位分类">
              <el-option v-for="option in position" :key="option.name" :label="option.name" :value="option.name">
                {{ option.name }}
              </el-option>
            </el-select>
            <el-select v-model="position_name_options" size="small " placeholder="职位名称">
              <el-option v-for="option in pnArr" :key="option.name" :label="option.name" :value="option.name">
                {{ option.name }}
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row class="row">
          <el-col :span="2" align="left">
            <span class="label1">创建时间</span>
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
            prop="rid"
            label="档案编号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="username"
            label="姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="gender"
            label="性别"
            width="50">
          </el-table-column>
          <el-table-column
            prop="lo1Name"
            label="一级机构"
            width="140">
          </el-table-column>
          <el-table-column
            prop="lo2Name"
            label="二级机构"
            width="140">
          </el-table-column>
          <el-table-column
            prop="lo3Name"
            label="三级机构"
            width="140">
          </el-table-column>
          <el-table-column
            prop="position"
            label="职位名称"
            width="140">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="查看详情">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="check(scope.$index)">查看详情</el-button>
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="删除">
            <template slot-scope="scope">
                <el-button @click="deleteRecord(scope.$index)" type="danger" size="mini" >删除</el-button>
            </template>
          </el-table-column>

        </el-table>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>

import {
  deleteRecord,
  findAll,
  findAllChecked,
  findAllNoCheck,
  getAllOrganization,
  selectRecord,
  selectRecord2
} from "../assets/js/request";
import {arrPosition} from "../assets/js/data";

export default {
  name: 'record4',
  data() {
    return {
      tabs: [
        {name: "档案管理模块"},
        {name: "档案删除"},
      ],
      token: localStorage.getItem("token"),
      tableData: null,
      ol1_options: null,
      ol2_options: [],
      ol3_options: [],
      ol1_option:null,
      ol2_option:null,
      ol3_option:null,

      position: arrPosition,
      position_classify_options: null,
      position_name_options: null,
      pnArr: [],
      select_time: null,

    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      findAllChecked().then((response) => {
        this.tableData = response.data.extended.record;
      });
      getAllOrganization().then((response) => {
        this.ol1_options = response.data.extended.organization;
      });
    },
    check(id) {
      this.$router.push({
        path: '/record_read',
        query: {
          form: this.tableData[id]
        }
      });
    },
    deleteRecord(id) {
      deleteRecord(this.tableData[id].rid).then(
        window.location.reload()
      );
    },
    reload() {
      location.reload();
    },
    select() {
      selectRecord2(this.ol1_option, this.ol2_option, this.ol3_option, this.position_classify_options, this.position_name_options, this.select_time).then((response) => {
        this.tableData = response.data.extended.record;
        this.size = response.data.extended.size;
      });
    },

    updateOl2: function () {
      for (var i in this.ol1_options) {
        var obj = this.ol1_options[i];
        if (obj.organizationName) {
          if (obj.ol1Id === this.ol1_option) {
            this.ol2_options = obj.sub;
            break;
          }
        }
      }
      this.ol2_option = this.ol2_options[0].ol2Id;
    },
    updateOl3: function () {
      for (var i in this.ol2_options) {
        var obj = this.ol2_options[i];
        if (obj.ol2Id === this.ol2_option) {
          this.ol3_options = obj.sub;
          break;
        }
      }
      if (this.ol3_options && this.ol3_options.length > 0 && this.ol3_options[0].organizationName) {
        this.ol3_option= this.ol3_options[0].ol3Id;
      } else {
        this.ol3_option = '';
      }
    },
    updatePn: function () {
      for (var i in this.position) {
        var obj = this.position[i];

        if (obj.name) {
          if (obj.name === this.position_classify_options) {
            this.pnArr = obj.sub;
            break;
          }
        }
      }
      this.position_name_options = this.pnArr[0].name;
    }
  },

  watch: {
    ol1_option: function () {
      this.updateOl2();
      this.updateOl3();
    },
    ol2_option: function () {
      this.updateOl3();
    },
    position_classify_options: function () {
      this.updatePn();
    }
  },
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

