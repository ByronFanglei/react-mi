// import * as actionType from './actionType';
import { fromJS } from 'immutable';
import { actionType } from '.';
const defaultState = fromJS({
  isCode: false
})

export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.CHANGE_ISCODE:
      return state.set('isCode', action.data)
    default: return state
  }
}