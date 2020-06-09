import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';
import 'antd/dist/antd.css';

// 设置全局请求头
axios.defaults.baseURL = '/byron';
// 设置请求时间
axios.defaults.timeout = 8000;
// 请求后拦截
axios.interceptors.response.use(function(response){
  let res = response.data
  showLoading ()
  if(res.flag){
    setTimeout(() => {
      hideLoading ()
    },1000)
  }
  return res.data
}, error => {
  message.warning('请求失败')
  return Promise.reject(error)
})

// 显示loading
function showLoading () {
  var dom = document.createElement('div')
  dom.setAttribute('id', 'loading')
  document.body.appendChild(dom)
  ReactDOM.render(<Spin tip="加载中..." size="large"/>, dom)
}
// 隐藏loading
function hideLoading () {
  document.body.removeChild(document.getElementById('loading'))
}

export default axios