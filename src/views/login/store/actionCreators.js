// import * as actionType  from './actionType';
import axios from '../../../tool/axios';
// import { fromJS } from 'immutable';

// 登录
export const Login = (username, password) => {
  return(dispatch) => {
    axios.post('/user/user/login', {
      username,
      password
    }).then(value => {
      console.log(value)
    }).catch(reason => {
      console.log(reason)
    })
  }
}