import React, { memo, Fragment } from 'react';
import Tabbar from '../../common/tabbar';
import Fotter from '../../common/footer';
import CartHead from './components/cartheader';
import ProductList from './components/productList';
import Settlement from './components/settlement';
import { CarBar, CarbarInner } from './style';

const Cart = memo(() => {
  return(
    <Fragment>
      <Tabbar 
        title={'我的购物车'}
        info={'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'}
      ></Tabbar>
      <CarBar>
        <CarbarInner>
          <CartHead></CartHead>
          <ProductList></ProductList>
        </CarbarInner>
        <Settlement></Settlement>
      </CarBar>
      <Fotter></Fotter>
    </Fragment>
  )
});

export default Cart;