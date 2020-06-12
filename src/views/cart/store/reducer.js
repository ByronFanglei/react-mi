import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  allPrice: '', // 商品总价格
  productList: [], // 商品列表
  isAllSelect: false, // 是否全选
  selectCount: '', // 选中的数量
  totalCount: '', // 商品总数量
})

const cartlist = (state, action) => {
  return state.merge({
    allPrice: action.allPrice,
    productList: action.productList,
    isAllSelect: action.isAllSelect,
    selectCount: action.selectCount,
    totalCount: action.totalCount
  })
}
export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.INIT_CART_LIST:
      return cartlist(state, action)
    default: return state
  }
  
}