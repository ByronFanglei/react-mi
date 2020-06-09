import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import "swiper/css/swiper.css";
import { SwiperContent } from '../style';
import ReactSwiper from 'reactjs-swiper';

const SwiperCon = memo(() => {
  const Data = useSelector((state) => {
    return{
      data: state.getIn(['home', 'swiperData']).toJS()
    }
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.swiperdata()) 
  }, [dispatch])
  const swiperOptions = {
    preloadImages: true,
    autoplay: 4000,
    autoplayDisableOnInteraction: false
  };
  return (
    <SwiperContent>
      <ReactSwiper swiperOptions={swiperOptions} showPagination items={Data.data}
                 className="swiper-example" />
    </SwiperContent>
  )
})

export default SwiperCon;