import * as actionType from './actionType';
import axios from '../../../tool/axios';
import { fromJS } from 'immutable';


const initCartList = (data) => ({
  type: actionType.INIT_CART_LIST,
  allPrice: fromJS(data.cartTotalPrice),
  productList: fromJS(data.cartProductVoList),
  isAllSelect: fromJS(data.selectedAll),
  selectCount: fromJS(data.selectCount),
  totalCount: fromJS(data.totalCount)
})
export const cartList = (token) => {
  return(dispatch) => {
    axios.get('/cart').then((value) => {
      dispatch(initCartList(value))
    }).catch(reason => {
      console.log(reason)
    })
  }
}
  