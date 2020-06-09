import { fromJS } from 'immutable';
// import * as actionType from './actionType';

// 创建仓库
const defaultState = fromJS({
  token: ''
})

export default(state=defaultState, action) => {
  return state
}