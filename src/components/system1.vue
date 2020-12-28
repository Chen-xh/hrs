<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="record_box" style="position:relative">
        <el-row style="margin-bottom: 10px">
          <el-col :span="3">
            <label>机构关系</label>
          </el-col>
          <el-col :span="3">
            <el-input type="text" size="small" v-model="ol1" placeholder="新一级机构"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addG()" size="small">添加</el-button>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 10px">
          <el-col :span="3" offset="3">
            <el-input type="text" size="small" v-model="ol2" placeholder="新二级机构"></el-input>
          </el-col>
          <el-col :span="9">
            <div class="block">
              <el-select v-model="value11" placeholder="上级机构" size="small">
                <el-option
                  v-for="item in options11"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
              <el-button type="primary" @click="submit11()" size="small">关联</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin-bottom: 10px">
          <el-col :span="3" offset="3">
            <el-input type="text" size="small" v-model="ol3" placeholder="新三级机构"></el-input>
          </el-col>
          <el-col :span="9">
            <div class="block">
              <el-select v-model="value12" placeholder="上级机构" size="small">
                <el-option
                  v-for="item in options12"
                  :key="item"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
              <el-button type="primary" @click="submit12()" size="small">关联</el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row style="margin-bottom: 10px">
          <el-col :span="3">
            <label>职位关系</label>
          </el-col>
          <el-col :span="3">
            <el-input type="text" size="small" v-model="newPosition.name" placeholder="新职位分类"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="addP()" size="small">添加</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3" offset="3">
            <el-input type="text" size="small" v-model="newPositionName" placeholder="新职位"></el-input>
          </el-col>
          <el-col :span="9">
            <div class="block">
              <el-select v-model="value2" placeholder="职位分类" size="small">
                <el-option
                  v-for="item in options2"
                  :key="item.name"
                  :label="item.name"
                  :value="item.name">
                </el-option>
              </el-select>
              <el-button type="primary" @click="submit2()" size="small">关联</el-button>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col :span="3">
            <label>薪酬项目</label>
          </el-col>
          <el-col :span="21" offset="3" align="left">
            <el-tag
              :key="tag"
              v-for="tag in dynamicTags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{ tag }}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New </el-button>
          </el-col>
        </el-row>
      </div>


    </el-scrollbar>

  </div>
</template>
<script>

import {arrPosition} from "../assets/js/data";
import {getOrganization23} from "../assets/js/request";

export default {
  name: 'indexMain',
  data() {
    return {
      tabs: [
        {name: "系统设置"},
      ],
      token: localStorage.getItem("token"),
      value2: "",
      options2: arrPosition,
      newPosition: {
        name: "",
      },
      newPositionName: "",

      options11: [],
      options12: [],
      value11: "",
      value12: "",
      ol1: "",
      ol2: "",
      ol3: "",


      dynamicTags: ['基本工资', '交通补助', '午餐补助','通信补助','养老保险','医疗保险','失业保险','住房公积金'],
      inputVisible: false,
      inputValue: ''
    }
  },
  mounted() {

    getOrganization23().then((response) => {
      this.options11 = response.data.extended.list2;
      this.options12 = response.data.extended.list3;
    });

  },
  methods: {
    addP() {
      this.options2.push(this.newPosition);
    },
    submit2() {
      alert(this.value2 + "/" + this.newPositionName)
    },
    addG() {
      this.options11.push(this.ol1);
    },
    submit11() {
      this.options12.push(this.ol2);
      alert(this.ol1 + "/" + this.ol2)
    },
    submit12() {
      alert(this.ol1 + "/" + this.ol2 + "/" + this.ol3)
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    }
  }
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

