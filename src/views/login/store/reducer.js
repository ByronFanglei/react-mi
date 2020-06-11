import { fromJS } from 'immutable';
import * as actionType from './actionType';

// 创建仓库
const defaultState = fromJS({
  token: ''
})

export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.SAVE_TOKEN:
      return state.set('token', action.data)
    default: return state
  }
}