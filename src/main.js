import Vue from 'vue'
import App from './App'
import router from './router/router'

// 导入字体图标
import './assets/fonts/iconfont.css'
//导入element-ui 库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//粒子背景
import VueParticles from 'vue-particles'

Vue.config.productionTip = false
Vue.use(VueParticles);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
