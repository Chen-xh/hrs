import axios from 'axios'
import qs from 'qs'

// export let serverUrl = "http://118.178.125.139:9090";
export let serverUrl = "http://localhost:9090";

export let baseUrl = "http://localhost:8080";
// export let baseUrl = "http://118.178.125.139:9091";
let config = {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
}

export const login = (username, password) =>
  axios.post(serverUrl + "/login", qs.stringify({
    username: username,
    password: password
  }));

export const exit = () =>
  axios.post(serverUrl + "/logout");

export const addRecord = function (form, file) {
  if (file == null) return false;
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  fd.append('file', file, file.name);
  return axios.post(serverUrl + "/admin/record/add", fd, config);
}


export const updateRecord = function (form, file) {
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  fd.delete("salaryStandard");
  if (file == null) {
    fd.append('file', new Blob(), "");t
  } else {
    fd.append('file', file, file.name);
  }
  return axios.post(serverUrl + "/admin/record/update", fd, config);
}
export const updateRecord2 = function (form, file) {
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  fd.delete("salaryStandard");
  if (file == null) {
    fd.append('file', new Blob(), "");
  } else {
    fd.append('file', file, file.name);
  }
  return axios.post(serverUrl + "/admin/record/update2", fd, config);
}
export const findAllNoCheck = () =>
  axios.get(serverUrl + "/admin/record/findAllNoCheck");
export const findAllChecked = () =>
  axios.get(serverUrl + "/admin/record/findAllChecked");
export const findSalaryStandardNoCheck = () =>
  axios.get(serverUrl + "/admin/salary/findAllNoCheck");
export const findSalaryStandardChecked = () =>
  axios.get(serverUrl + "/admin/salary/findAllChecked");
export const findAll = () =>
  axios.get(serverUrl + "/admin/record/findAll");
export const findSalaryStandard = () =>
  axios.get(serverUrl + "/admin/salary/findAll");
export const deleteRecord = (id) =>
  axios.get(serverUrl + "/admin/record/delete?rid=" + id);
export const getAllOrganization = () =>
  axios.get(serverUrl + "/admin/organization/getAll");
export const getSalaryList = () =>
  axios.get(serverUrl + "/admin/salaryList/findAll");
export const getSalaryListNoCheck = () =>
  axios.get(serverUrl + "/admin/salaryList/findAllNoCheck");
export const getSalaryListChecked = () =>
  axios.get(serverUrl + "/admin/salaryList/findAllChecked");

export const selectRecord = function (lo1, lo2, lo3, po1, po2, time) {
  let fd = new FormData()
  if (lo1 !== null) fd.append('lo1', lo1);
  if (lo2 !== null) fd.append('lo2', lo2);
  if (lo3 !== null) fd.append('lo3', lo3);
  fd.append('po1', po1);
  fd.append('po2', po2);
  fd.append('time', time);
  return axios.post(serverUrl + "/admin/record/selectRecord", fd);
}

export const selectRecord2 = function (lo1, lo2, lo3, po1, po2, time) {
  let fd = new FormData()
  if (lo1 !== null) fd.append('lo1', lo1);
  if (lo2 !== null) fd.append('lo2', lo2);
  if (lo3 !== null) fd.append('lo3', lo3);
  fd.append('po1', po1);
  fd.append('po2', po2);
  fd.append('time', time);
  fd.append('target', "已复核");
  return axios.post(serverUrl + "/admin/record/selectRecord", fd);
}

export const selectSalaryStandard = function (select_time, sid, key) {
  let fd = new FormData()
  if (sid !== null) fd.append('sid', sid);
  if (key !== null) fd.append('key', key);
  fd.append('time', select_time);
  return axios.post(serverUrl + "/admin/salary/selectSalaryStandard", fd);
}
export const selectSalaryList = function (select_time, sid, key) {
  let fd = new FormData()
  if (sid !== null) fd.append('sid', sid);
  if (key !== null) fd.append('key', key);
  fd.append('time', select_time);
  return axios.post(serverUrl + "/admin/salaryList/selectSalaryList", fd);
}
export const addSalaryStandard = function (form) {
  let fd = new FormData()
  for (let key in form) {
    fd.append(key, form[key])
  }
  return axios.post(serverUrl + "/admin/salary/addStandard", fd);
}
export const updateSalaryStandard = function (form) {
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  return axios.post(serverUrl + "/admin/salary/update", fd);
}
export const addSalaryList = function (form) {
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  fd.delete("salaryDetails")
  let details=""
  if(form.salaryDetails.length > 0){
    for(let i = 0; i < form.salaryDetails.length; i++){
      let item =form.salaryDetails[i]
      let bonus=item.bonus
      if(bonus===null)bonus=0
      let deductionBonus=item.deductionBonus
      if(deductionBonus===null)deductionBonus=0
      let amount=item.salaryStandard.sum+bonus-deductionBonus
      details=details+"@chen"+item.rid+"#chen"+item.username+"#chen"+bonus+"#chen"+deductionBonus+"#chen"+form.said+"#chen"+item.salary_standard+"#chen"+amount
    }
  }
  fd.append("details",details)
  return axios.post(serverUrl + "/admin/salaryList/add", fd);
}

export const checkSalaryList = function (form) {
  form.registrationTime = new Date();
  let fd = new FormData()
  // 将form表单中的值都赋值给FormData传递给后台
  for (let key in form) {
    fd.append(key, form[key])
  }
  fd.delete("salaryDetails")
  let details=""
  if(form.salaryDetails.length > 0){
    for(let i = 0; i < form.salaryDetails.length; i++){
      let item =form.salaryDetails[i]
      let bonus=item.bonus
      if(bonus===null)bonus=0
      let deductionBonus=item.deductionBonus
      if(deductionBonus===null)deductionBonus=0
      let amount=item.salaryStandard.sum+bonus-deductionBonus
      details=details+"@chen"+item.rid+"#chen"+item.username+"#chen"+bonus+"#chen"+deductionBonus+"#chen"+form.said+"#chen"+item.salary_standard+"#chen"+amount
    }
  }
  fd.append("details",details)
  return axios.post(serverUrl + "/admin/salaryList/check", fd);
}
