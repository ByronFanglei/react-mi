import React, { memo } from 'react';
import { Allset } from '../style';
import { Link } from 'react-router-dom';

const Settlement = memo(() => {
  return(
    <Allset>
      <div className='left'>
        <Link to='/'>
          <span className='gotocart'>继续购物</span>
        </Link>
        <span className='line'></span>
        <span>共 <b>2</b> 件商品，已选择 <b>2</b>件</span>
      </div>
      <div className='right'>
        <span className='price'>合计：<b>123213</b>元</span>
        <div className='btn'>去结算</div>
      </div>
    </Allset>
  )
});



export default Settlement;