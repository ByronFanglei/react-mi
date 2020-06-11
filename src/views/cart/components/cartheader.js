import React, { memo } from 'react';
import { CarBarInner, CartHeader } from '../style';

const CartHead = memo(() => {
  return(
    <CarBarInner>
      <CartHeader>
        <div className='alllist'>
          <span className='iconfont'>&#xe77b;</span>
          全选
        </div>
        <div className='img'></div>
        <div className='proname'>商品名称</div>
        <div className='price'>单价</div>
        <div className='num'>数量</div>
        <div className='subtotal'>小计</div>
        <div className='operation'>操作</div>
      </CartHeader>
    </CarBarInner>
  )
});

export default CartHead;