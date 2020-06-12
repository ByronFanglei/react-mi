import React, { memo } from 'react';
import { Allset } from '../style';
import { Link } from 'react-router-dom';

const Settlement = memo((props) => {
  return(
    <Allset>
      <div className='left'>
        <Link to='/'>
          <span className='gotocart'>继续购物</span>
        </Link>
        <span className='line'></span>
        <span>共 <b>{props.selectCount}</b> 件商品，已选择 <b>{props.totalCount}</b>件</span>
      </div>
      <div className='right'>
        <span className='price'>合计：<b>{props.allPrice / 100}</b>元</span>
        <div className='btn'>去结算</div>
      </div>
    </Allset>
  )
});



export default Settlement;