import * as actionType from  './actionType';
import axios from '../../../tool/axios';
import { fromJS } from 'immutable';


const initData = (data) => ({
  type: actionType.INIT_DATA,
  data: fromJS(data)
})
// const initName = (data) => ({
//   type: actionType.INIT_DATA_NAME,
//   xiaomi: fromJS(data.id),
//   redmi: fromJS(data.)
// })
// 初始化下拉名称
export const productname = () => {
  return (dispatch) => {
    axios.get('/goods/category').then(value => {
      // console.log(value.data.data)
      // dispatch(initName(value.data.data))
    }).catch(reason => {
      console.log(reason)
    })
  }
}
// 初始化下拉数据
export const product = () => {
  return (dispatch) => {
    axios.get('/goods/product').then(value => {
      const data = value.data.data
      dispatch(initData(data))
    }).catch(reason => {
      console.log(reason)
    })
  }
}