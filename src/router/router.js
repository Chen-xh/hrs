import Vue from 'vue'
import Router from 'vue-router'
import login from "../components/login";
import index from "../components/index";
import record1 from "../components/record1";
import salary1_1 from "../components/salary1_1";
import record2 from "../components/record2";
import record_check from "../components/record_check";
import record3 from "../components/record3";
import record_read from "../components/record_read";
import record_update from "../components/record_update";
import record4 from "../components/record4";
import salary1_2 from "../components/salary1_2";
import salary_check from "../components/salary_check";
import salary1_3 from "../components/salary1_3";
import salary_read from "../components/salary_read";
import salary2_1 from "../components/salary2_1";
import salary_details from "../components/salary_details";
import salary2_2 from "../components/salary2_2";
import salary_details2 from "../components/salary_details2";
import salary2_3 from "../components/salary2_3";
import salary_details3 from "../components/salary_details3";
import indexMain from "../components/home";
import home from "../components/home";
import userMessage from "../components/userMessage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/record1',
      name: 'record1',
      component: record1
    },
    {
      path: '/record2',
      name: 'record2',
      component: record2
    },
    {
      path: '/record3',
      name: 'record3',
      component: record3
    },
    {
      path: '/record4',
      name: 'record4',
      component: record4
    },
    {
      path: '/salary1',
      name: 'salary1',
      component: salary1_1
    },
    {
      path: '/salary2',
      name: 'salary2',
      component: salary1_2
    },
    {
      path: '/salary3',
      name: 'salary3',
      component: salary1_3
    },
    {
      path: '/salary4',
      name: 'salary4',
      component: salary2_1
    },
    {
      path: '/salary5',
      name: 'salary5',
      component: salary2_2
    },
    {
      path: '/salary6',
      name: 'salary6',
      component: salary2_3
    },
    {
      path: '/recordCheck',
      name: 'record_check',
      component: record_check
    },
    {
      path: '/salaryCheck',
      name: 'salaryCheck',
      component: salary_check
    },
    {
      path: '/record_read',
      name: 'record_read',
      component: record_read
    },
    {
      path: '/salary_read',
      name: 'salary_read',
      component: salary_read
    },
    {
      path: '/record_update',
      name: 'record_update',
      component: record_update
    },
    {
      path: '/salary_details',
      name: 'salary_details',
      component: salary_details
    },
    {
      path: '/salary_details2',
      name: 'salary_details2',
      component: salary_details2
    },
    {
      path: '/salary_details3',
      name: 'salary_details3',
      component: salary_details3
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/userMessage',
      name: 'userMessage',
      component: userMessage
    }
  ]
})
