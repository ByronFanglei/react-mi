import * as actionType  from './actionType';
import axios from 'axios';
import { fromJS } from 'immutable';


const initSwiper = (data) => ({
  type: actionType.INIT_SWIPER,
  data: fromJS(data)
})
export const swiperdata = () => {
  return(dispatch) => {
    axios.get('/ad/ad/swipe').then(value => {
      dispatch(initSwiper(value))
    }).catch(reason => {
      console.log(reason)
    })
  }
}