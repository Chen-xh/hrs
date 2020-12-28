<template>
  <div class="index_container">
    <el-container>
      <el-header class="header" height="7vh">
        <div class="header_start"></div>
        <div style="float:right;">
          <button @click="exit()" class="heard_exit">退出</button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <el-scrollbar class="el-scrollbar__wrap ">
            <el-image class="logo_img" :src="logoUrl" v-on:click="drawer = true"></el-image>
            <h5>您好！{{ username }}</h5>
            <el-divider></el-divider>

            <el-menu default-active="0" class="el-menu-vertical-demo">
              <el-menu-item index="0" @click="to('home')">
                <i class="el-icon-menu"></i>
                <span slot="title" style="font-weight: 700;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;首页&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </el-menu-item>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-user"></i>
                  <span style="font-weight: 700;">用户管理模块</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="3-1" @click="to('userMessage')">用户信息</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-s-management"></i>
                  <span style="font-weight: 700;">系统管理模块</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="4-1" @click="to('system1')">系统设置</el-menu-item>

                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span style="font-weight: 700;">档案管理模块</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1" @click="recordM(1)">档案登记</el-menu-item>
                  <el-menu-item index="1-2" @click="recordM(2)">档案复核</el-menu-item>
                  <el-menu-item index="1-3" @click="recordM(3)">查询更新</el-menu-item>
                  <el-menu-item index="1-4" @click="recordM(4)">档案删除</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-check"></i>
                  <span style="font-weight: 700;">薪酬管理模块</span>
                </template>
                <el-menu-item-group>
                  <el-submenu index="2-1">
                    <template slot="title"><i class="el-icon-edit"></i>薪酬标准管理</template>
                    <el-menu-item index="2-1-1" @click="salaryM(1)" style="color: #a19e9e">薪酬标准登记</el-menu-item>
                    <el-menu-item index="2-1-2" @click="salaryM(2)" style="color: #a19e9e">薪酬标准复核</el-menu-item>
                    <el-menu-item index="2-1-3" @click="salaryM(3)" style="color: #a19e9e">薪酬标准查询</el-menu-item>
                  </el-submenu>
                  <el-submenu index="2-2">
                    <template slot="title"><i class="el-icon-bank-card"></i>薪酬发放管理</template>
                    <el-menu-item index="2-2-1" @click="salaryM(4)" style="color: #a19e9e">薪酬发放登记</el-menu-item>
                    <el-menu-item index="2-2-2" @click="salaryM(5)" style="color: #a19e9e">薪酬发放复核</el-menu-item>
                    <el-menu-item index="2-2-2" @click="salaryM(6)" style="color: #a19e9e">薪酬发放查询</el-menu-item>
                  </el-submenu>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-scrollbar>
        </el-aside>

        <el-main class="mainContent ">
          <div style="height: 100%">

            <iframe id="myFrame" v-bind:src="item" width="100%" height="100%" frameborder=0></iframe>
          </div>
        </el-main>
      </el-container>
    </el-container>
    <el-drawer
      title="用户信息"
      :visible.sync="drawer"
      :with-header="false"
      size="30%">
      <div>
        <el-image class="logo_img" :src="logoUrl"></el-image>
        <h5>您好！{{ username }}</h5>
        <el-divider></el-divider>
        <div>
          <span>用户名:</span>
          <span style="color: #666666">{{ username }}</span>
        </div>
        <div>
          <span>角色:</span>
          <span style="color: #666666">{{ role }}</span>
        </div>
      </div>
    </el-drawer>
  </div>

</template>
<script>
import {exit} from '../assets/js/request.js'
import {baseUrl} from '../assets/js/request.js'

export default {
  name: 'index',
  data() {
    return {
      token: localStorage.getItem("token"),
      username: localStorage.getItem("username"),
      role: localStorage.getItem("roles"),
      logoUrl: '/static/images/logo.png',
      baseUrl: baseUrl,
      item: this.baseUrl + "/#/home",
      drawer: false,
    }
  },
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (this.token == null) {
        alert("请先登录！")
        this.$router.push({
          path: '/',
        });
      }
    },
    to(path) {
      this.item = this.baseUrl + "/#/" + path;
    },

    recordM(i) {
      let b = false;
      switch (i) {
        case 1:
          if (this.role.indexOf("人事专员") >= 0) b = true;
          break;
        case 2:
          if (this.role.indexOf("人事经理") >= 0) b = true;
          break;
        case 3:
          if (this.role.indexOf("人事专员") >= 0) b = true;
          break;
        case 4:
          if (this.role.indexOf("人事经理") >= 0) b = true;
          break;
      }
      if (b) {
        this.item = this.baseUrl + "/#/record" + i;
      } else {
        alert("你没有权限!");
      }
    },
    salaryM(i) {
      let b = false;

      if (this.role.indexOf("薪酬专员") >= 0 || this.role.indexOf("薪酬经理") >= 0) b = true;

      if (b) {
        this.item = this.baseUrl + "/#/salary" + i;
      } else {
        alert("你没有权限!");
      }
    },

    exit() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      exit();
      this.$router.push({
        path: '/',
        params: {}
      });
    },


  }
  ,

}
</script>
<style scoped>
@import '../assets/css/index.css';
</style>

