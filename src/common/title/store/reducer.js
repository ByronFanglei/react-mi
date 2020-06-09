import { fromJS } from 'immutable';
import * as actionType from './actionType';

// 创建仓库
const defaultState = fromJS({
  data: [],
})

export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.INIT_DATA:
      return state.set('data', action.data)
    default: return state
  }
}