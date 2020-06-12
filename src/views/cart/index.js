import React, { memo, Fragment, useEffect } from 'react';
import Tabbar from '../../common/tabbar';
import Fotter from '../../common/footer';
import CartHead from './components/cartheader';
import ProductList from './components/productList';
import Settlement from './components/settlement';
import { CarBar, CarbarInner } from './style';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from './store';

const Cart = memo(() => {
  let token = sessionStorage.getItem('token')
  const Data = useSelector(state => state.getIn(['cart']).toJS())
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.cartList(token))
  }, [])


  if(token){
    return(
      <Fragment>
        <Tabbar 
          title={'我的购物车'}
          info={'温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算'}
        ></Tabbar>
        <CarBar>
          <CarbarInner>
            <CartHead
              isAllSelect={Data.isAllSelect}
            ></CartHead>
            {/* 购物车列表 */}
            <ProductList 
              productList={Data.productList}
            ></ProductList>
          </CarbarInner>
          {/* 购物车底部 */}
          <Settlement
            allPrice={Data.allPrice}
            selectCount={Data.selectCount}
            totalCount={Data.totalCount}
          ></Settlement>
        </CarBar>
        <Fotter></Fotter>
      </Fragment>
    )
  }else{
    return <Redirect to='/login' />
  }
  
});

export default Cart;