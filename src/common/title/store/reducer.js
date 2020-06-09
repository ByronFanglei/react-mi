import { fromJS } from 'immutable';
import * as actionType from './actionType';

// 创建仓库
const defaultState = fromJS({
  data: [],
  xiaomiid: 0,
  redmiid: 0,
  tvid: 0,
  homeid: 0,
  noteid: 0,
})

export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.INIT_DATA:
      return state.merge({
        data: action.data
      })
    // case actionType.INIT_DATA_NAME:
    //   return state.merge({
    //     xiaomiid: action.
    //   })
    default: return state
  }
}