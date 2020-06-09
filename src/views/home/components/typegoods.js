import React,{ memo } from 'react';
import { AllGoods, Bigbanner, GoodTitle, GoodShow } from '../style';

const Goods = memo(() => {
  return(
    <AllGoods>
      <Bigbanner>
        <img src='https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/96681ef128730fe2970795cbbc327d4a.jpg?thumb=1&w=1226&h=120&f=webp&q=90' alt=""/>
      </Bigbanner>
      <GoodTitle>手机</GoodTitle>
      <GoodShow>
        <div className='banner'>
          <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90" alt=""/>
        </div>
        <ul className='goodtype'>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
          <li>
            <img src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8729282b199b3ec51e31c1b6b15f3f93.jpg?thumb=1&w=200&h=200&f=webp&q=90" alt=""/>
            <div className='name'>小米手机青春版</div>
            <div className='dis'>50倍变焦</div>
            <div className='price'>2000元</div>
          </li>
        </ul>
      </GoodShow>
    </AllGoods>
  )
})


export default Goods;