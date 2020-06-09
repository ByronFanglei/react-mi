import React, { memo } from 'react';
import { Banners } from '../style';

const BannerBar = memo(() => {
  return(
    <Banners>
      <img src={require('../../../assets/static/images/bannerone.jpg')} alt=""/>
      <img src={require('../../../assets/static/images/bannerone.jpg')} alt=""/>
      <img src={require('../../../assets/static/images/bannerone.jpg')} alt=""/>
      <img src={require('../../../assets/static/images/bannerone.jpg')} alt=""/>
    </Banners>
  )
})

export default BannerBar;