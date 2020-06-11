import React, { memo } from 'react';
import { TitleBar, TitleBarInner } from './style';

const ProductBar = memo(() => {
  return(
    <TitleBar>
      <TitleBarInner>
        <div>小米10 青春版 5G</div>
        <div className='btn'>立即购买</div>
      </TitleBarInner>
    </TitleBar>
  )
});

export default ProductBar;