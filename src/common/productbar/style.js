import Style from 'styled-components';

export const TitleBar = Style.div`
background: #fff;
border-top: 1px solid #e0e0e0;
border-bottom: 1px solid #e0e0e0;
box-shadow: 0 5px 5px rgba(0,0,0,.07);
`;
export const TitleBarInner = Style.div`
  width: 1226px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  color: #424242;
  .btn{
    width: 118px;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #fff;
    cursor: pointer;
    transition: all .4s;
    background: #ff6700;
    text-align: center;
  }
`;