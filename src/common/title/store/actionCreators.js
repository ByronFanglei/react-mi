import * as actionType from  './actionType';
import axios from '../../../tool/axios';
import { fromJS } from 'immutable';


const initData = (data) => ({
  type: actionType.INIT_DATA,
  data: fromJS(data)
})
// 初始化下拉数据
export const product = () => {
  return (dispatch) => {
    axios.get('/goods/category/findCP').then(value => {
      dispatch(initData(value))
    }).catch(reason => {
      console.log(reason)
    })
  }
}