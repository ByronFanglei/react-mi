import Style from 'styled-components';

export const CarBar = Style.div`
  width: 100%;
  background: #f5f5f5;
  padding-top: 38px;
  padding-bottom: 38px;
`;
export const CarbarInner = Style.div`
  width: 1226px;
  margin: 0 auto;
  background: #fff;
`;
export const CarBarInner = Style.div`

`;
export const CartHeader = Style.div`
  display: flex;
  align-items: center;
  height: 70px;
  line-height: 70px;
  text-align: center;
  .alllist{
    flex: 1;
    .iconfont{
      display: inline-block;
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .img{
    flex: 1;
  }
  .proname{
    flex: 3;
    text-align: left;
  }
  .price{
    flex: 1;
  }
  .num{
    flex: 1;
  }
  .subtotal{
    flex: 1;
  }
  .operation{
    flex: 1;
  }
`;
export const ProductInner = Style.div`

`;
export const ProductCon = Style.li`
  display: flex;
  align-items: center;
  // height: 70px;
  line-height: 70px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  .alllist{
    flex: 1;
    .iconfont{
      display: inline-block;
      cursor: pointer;
      margin-right: 42px;
    }
  }
  .img{
    flex: 1;
    img{
      display: block;
      width: 80px;
      height: 80px;
    }
  }
  .proname{
    flex: 3;
    text-align: left;
  }
  .price{
    flex: 1;
  }
  .num{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
      width: 72px;
      height: 38px;
      line-height: 38px;
      color: #424242;
      font-size: 16px;
      text-align: center;
      border: none;
      border-top: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      outline: none;
    }
    span{
      display: inline-block;
      width: 38px;
      height: 38px;
      line-height: 38px;
      text-align: center;
      border: 1px solid #ccc;
      border-right: none;
      font-size: 20px;
      font-weight: bold;
    }
    .right{
      border-left: none;
      border-right: 1px solid #ccc;
    }
  }
  .subtotal{
    flex: 1;
    color: #ff6700;
  }
  .operation{
    flex: 1;
    transition: all .3s;
    cursor: pointer;
    &:hover{
      transform: scale(1.2);
      color: #ff6700;
    }
  }
`;
export const Allset = Style.div`
  width: 1226px;
  margin: 20px auto;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  font-size: 14px;
  .left{
    a{
      color: #424242; 
    }
    span{
      display: inline-block;
      margin-left: 20px;
    }
    .gotocart{
      &:hover{
        color: #ff6700;
        cursor: pointer;
      }
    }
    b{
      color: #ff6700;
    }
  }
  .right{
    display: flex;
    .btn{
      margin-left: 50px;
      width: 200px;
      height: 48px;
      line-height: 48px;
      font-size: 18px;
      margin-left: 50px;
      vertical-align: top;
      background: #ff6700;
      color: #fff;
      text-align: center;
      cursor: pointer;
      &:hover{
        background: #f25807
      }
    }
    .price{
      color: #ff6700;
      b{
        font-size: 30px;
      }
    }
  }
`;