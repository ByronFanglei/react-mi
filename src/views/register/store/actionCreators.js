import * as actionType from './actionType';
import axios from '../../../tool/axios';
import { message} from 'antd';

// import { fromJS } from 'immutable';
// 获取手机号code
export const SendCode = (rtel) => {
  return(dispatch) => {
    axios.post(`/user/user/sendsms/${rtel}`,).then(value => {
      message.success('发送成功！请查收！')
    }).catch(reason => {
      console.log(reason)
    })
  }
}
// 获取验证码iscode值更改
export const changeIscode = (data) => ({
  type: actionType.CHANGE_ISCODE,
  data
})
// 注册
export const register = (username, password, phone, phonecode) => {
  return(dispatch) => {
    axios.post(`/user/user/register/${phonecode}`, {
      username,
      password,
      phone
    }).then(value => {
      console.log(value)
    }).catch(reason => {
      console.log(reason)
    })
  }
}