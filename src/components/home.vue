<template>
  <div class="record_container">
    <el-scrollbar class="el-scrollbar__wrap ">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item><span style="color: #000;font-weight: 700;">人力资源</span></el-breadcrumb-item>
        <el-breadcrumb-item v-for="tab in tabs" v-bind:key="tab.name">{{ tab.name }}</el-breadcrumb-item>
      </el-breadcrumb>
<!--      <div class="record_box" style="position:relative">-->


<!--      </div>-->


    </el-scrollbar>

  </div>
</template>
<script>
import {arrAll} from '../assets/js/data.js'
import {arrPosition} from "../assets/js/data";
import {deleteRecord, findAll, findAllChecked, findAllNoCheck, selectRecord, selectRecord2} from "../assets/js/request";

export default {
  name: 'indexMain',
  data() {
    return {
      tabs: [
        {name: "首页"},
      ],
      token: localStorage.getItem("token"),
    }
  },

  methods: {}
}
</script>
<style scoped>
@import '../assets/css/record.css';
</style>

