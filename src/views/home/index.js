import React, { memo, Fragment } from 'react';
import Header from '../../common/header';
import Footer from '../../common/footer';
import Title from '../../common/title';
import SwiperCon from './components/swipercon';
import Sidebar from './components/sidebar';
import BannerBar from './components/bannerbar';
import Goods from './components/typegoods';
import { HomeContent } from './style';
const Home = memo(() => {
  return (
    <Fragment>
      <Header />
      <Title />
        <HomeContent>
          <SwiperCon></SwiperCon>
          <Sidebar></Sidebar>
          <BannerBar></BannerBar>
        </HomeContent>
        <Goods></Goods>
      <Footer />
    </Fragment>
  )
});

export default Home;
