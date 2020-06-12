import React, { memo } from 'react';
import { ProductInner, ProductCon } from '../style';

const ProductList = memo((props) => {
  return(
    <ProductInner>
      <ul>
        {
          props.productList.map(item => {
            return(
              <ProductCon key={item.id}>
              <div className='alllist'>
                <Select
                  product_selected={item.product_selected}
                ></Select>
              </div>
              <div className='img'>
                <img src={item.product_main_image} alt=""/>
              </div>
              <div className='proname'>{item.product_name}-{item.product_subtitle}</div>
              <div className='price'>{item.product_price / 100}元</div>
              <div className='num'>
                <span className='iconfont'>-</span>
                <input type="num" readOnly value={item.quantity} />
                <span className='iconfont right'>+</span>
              </div>
              <div className='subtotal'>{item.product_total_price / 100}元</div>
              <div className='operation iconfont'>&#xe668;</div>
            </ProductCon>
            )
          })
        }
        {/* <ProductCon>
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
        </ProductCon> */}
      </ul>
    </ProductInner>
  )
});

const Select = (props) => {
  console.log(props)
  if(props.product_selected){
    return(
      <span className='iconfont'>&#xe793;</span>
    )
  }else{
    return(
      <span className='iconfont'>&#xe77b;</span>
    )
  }
}

export default ProductList;