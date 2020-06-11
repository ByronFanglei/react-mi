import * as actionType  from './actionType';
import axios from '../../../tool/axios';
import { fromJS } from 'immutable';
import { message } from 'antd';


const saveTolem = (data) => ({
  type: actionType.SAVE_TOKEN,
  data: fromJS(data)
})
// 登录
export const Login = (username, password) => {
  return(dispatch) => {
    axios.post('/user/login', {
      username,
      password
    }).then(value => {
      if(value){
        message.success('登陆成功')
        dispatch(saveTolem(value))
      }else{
        message.success('用户名或密码错误！！！')
      }
    }).catch(reason => {
      console.log(reason)
    })
  }
}