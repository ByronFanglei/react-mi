import * as actionType from './actionType';
import axios from '../../../tool/axios';
import { message} from 'antd';
import { fromJS } from 'immutable';

// import { fromJS } from 'immutable';
// 获取手机号code
export const SendCode = (rtel) => {
  return(dispatch) => {
    axios.post(`/user/sendsms/${rtel}`,).then(value => {
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
const updatalogin = (data) => ({
  type: actionType.UPDATA_LOGIN,
  data: fromJS(data)
})
export const register = (username, password, phone, phonecode) => {
  return(dispatch) => {
    axios.post(`/user/register/${phonecode}`, {
      username,
      password,
      phone
    }).then(value => {
      if(!value){
        message.success('注册失败！')
        return
      }else{
        message.success('注册成功!')
        dispatch(updatalogin(true))
      }
    }).catch(reason => {
      console.log(reason)
    })
  }
}
// 注册变为false
export const registerout = () => {
  return(dispatch) => {
    dispatch({
      type: actionType.OUTREGISTER_LOGIN,
      data: false
    })
  }
}