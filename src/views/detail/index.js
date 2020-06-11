import React, { memo, Fragment } from 'react';
import Header  from '../../common/header';
import Title from '../../common/title';
import Fotter from '../../common/footer';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { SwiperBox } from './style';
import ProductBar from '../../common/productbar';

const Detail = memo(() => {

  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    effect : 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    loop: true
  }
  return(
    <Fragment>
      <Header></Header>
      <Title></Title>
      {/* 头部信息 */}
      <ProductBar />
      {/* 轮播部分 */}
      <SwiperBox>
        <Swiper {...params}>
          <div>
            <img src={require('../../assets/static/images/one.jpg')} alt=""/>
          </div>
          <div>
            <img src={require('../../assets/static/images/two.jpg')} alt=""/>
          </div>
          <div>
            <img src={require('../../assets/static/images/three.jpg')} alt=""/>
          </div>
        </Swiper>
      </SwiperBox>
      <Fotter></Fotter>
    </Fragment>
  )
})

export default Detail;