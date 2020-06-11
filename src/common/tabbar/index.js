import React, { memo } from 'react';
import  { BarConent, BarInner, Logo, LogoA, BarUser, BarInfo } from './style';
import { Link } from 'react-router-dom';

const Tabbar = memo((props) => {
  return(
    <BarConent>
      <BarInner>
        <Logo>
          <Link to='/'>
            <LogoA />
          </Link>
        </Logo>
        <BarInfo>
          <div className='title'>{props.title}</div>
          <div className='info'>{props.info}</div>
        </BarInfo>
        <BarUser>
          <div>user</div>
          <span className='line'></span>
          <div className='listcart'>我的订单</div>
        </BarUser>
      </BarInner>
    </BarConent>
  )
});

export default Tabbar;