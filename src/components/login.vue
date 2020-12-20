<template>
  <div class="login_container">
    <div class="login_box">

      <!-- 登录表单区域 -->
      <el-form size="mini">

        <el-image class="logo_img" :src="logoUrl"></el-image>

        <h3 style="color: #d9d9d9">登录</h3>
        <el-divider></el-divider>
        <!-- 用户名 -->
        <el-form-item>
          <el-input class="input_l" size="large" v-model="input_name" placeholder="username"
                    prefix-icon="iconfont icon-user" ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item>
          <el-input class="input_l" size="large" v-model="input_pass" placeholder="password" show-password
                    prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- 登录按钮 -->
        <el-form-item>
          <el-button class=" submitBtn " type="primary" @click="loginUser">login</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--    粒子背景-->
    <vue-particles
      colvue-particlesor="#fff"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#fff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      style="height:100%"
    >
    </vue-particles>
  </div>
</template>
<script>
import {login} from '../assets/js/request.js'

export default {
  name: 'login',
  data() {
    return {
      input_name: '',
      input_pass: '',
      logoUrl: '/static/images/logo.png',
    }
  },
  methods: {
    loginUser: function () {
      let input_name = this.input_name;
      let input_pass = this.input_pass;
      let message = null;
      let token = null;
      let roles = null;
      login(input_name, input_pass)
        .then((response) => {
          token = response.data.extended.token;
          roles=response.data.extended.roles;
          localStorage.setItem("token", token);
          localStorage.setItem("username", input_name);
          localStorage.setItem("roles", roles);
          message = response.data.message;
          if (token == null) {
            alert(message);
          } else {
            this.$router.push({
              path: '/index',
              params: {}
            });
          }
        });
    },
  },
}
</script>
<style scoped>
@import '../assets/css/login.css';
</style>

