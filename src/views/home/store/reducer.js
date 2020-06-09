import { fromJS } from 'immutable';
import * as actionType from './actionType';

const defaultState = fromJS({
  swiperData: []
})

export default(state=defaultState, action) => {
  switch(action.type){
    case actionType.INIT_SWIPER:
      return state.set('swiperData', action.data)
    default: return state
  }
}