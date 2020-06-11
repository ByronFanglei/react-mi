import React, { memo } from 'react';
import { ProductInner, ProductCon } from '../style';

const ProductList = memo(() => {
  return(
    <ProductInner>
      <ul>
        <ProductCon>
            <div className='alllist'>
            <span className='iconfont'>&#xe77b;</span>
          </div>
          <div className='img'>
            <img src={require('../../../assets/static/images/redmi.png')} alt=""/>
          </div>
          <div className='proname'>小米显示器1A 23.8英寸 黑色</div>
          <div className='price'>679元</div>
          <div className='num'>
            <span className='iconfont'>-</span>
            <input type="num" readOnly value='1' />
            <span className='iconfont right'>+</span>
          </div>
          <div className='subtotal'>679元</div>
          <div className='operation iconfont'>&#xe668;</div>
        </ProductCon>
        <ProductCon>
            <div className='alllist'>
            <span className='iconfont'>&#xe77b;</span>
          </div>
          <div className='img'>
            <img src={require('../../../assets/static/images/redmi.png')} alt=""/>
          </div>
          <div className='proname'>小米显示器1A 23.8英寸 黑色</div>
          <div className='price'>679元</div>
          <div className='num'>
            <span className='iconfont'>-</span>
            <input type="num" readOnly value='1' />
            <span className='iconfont right'>+</span>
          </div>
          <div className='subtotal'>679元</div>
          <div className='operation iconfont'>&#xe668;</div>
        </ProductCon>
        <ProductCon>
            <div className='alllist'>
            <span className='iconfont'>&#xe77b;</span>
          </div>
          <div className='img'>
            <img src={require('../../../assets/static/images/redmi.png')} alt=""/>
          </div>
          <div className='proname'>小米显示器1A 23.8英寸 黑色</div>
          <div className='price'>679元</div>
          <div className='num'>
            <span className='iconfont'>-</span>
            <input type="num" readOnly value='1' />
            <span className='iconfont right'>+</span>
          </div>
          <div className='subtotal'>679元</div>
          <div className='operation iconfont'>&#xe668;</div>
        </ProductCon>
      </ul>
    </ProductInner>
  )
});

export default ProductList;