import Style from 'styled-components';
import logo from '../../assets/static/images/mi-logo.png';
import home from '../../assets/static/images/mi-home.png';


export const BarConent = Style.div`
  width: 100%;
  height: 100px;
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
`;
export const BarInner = Style.div`
  width: 1226px;
  margin: 0 auto;
  display: flex;
  .logo{
    background: 
  }
`;
export const Logo = Style.div`
  width: 55px;
  height: 55px;
  background-color: #ff6700;
  margin: 0 22px 0 0;
  overflow: hidden;
  margin-top: 26px;
`;
export const LogoA = Style.span`
  display: inline-block;
  width: 110px;
  height: 55px;
  &:before{
    content: '';
    display: inline-block;
    width: 55px;
    height: 55px;
    background: url(${logo}) no-repeat center;
    background-size: 55px;
    transition: all .2s;
  }
  &:after{
    content: '';
    display: inline-block;
    width: 55px;
    height: 55px;
    background: url(${home}) no-repeat center;
    background-size: 55px;
    transition: all .2s;
  }
  &:hover:before{
    margin-left: -55px;
    transition: margin .2s;
  }
`;
export const BarInfo = Style.div`
  flex: 8;
  margin-top: 26px;
  display: flex;
  align-items: center;
  .title{
    font-size: 28px;
    font-weight: normal;
    color: #424242;
  }
  .info{
    height: 20px;
    line-height: 20px;
    margin-left: 15px;
    font-size: 12px;
  }
`;
export const BarUser = Style.div`
  flex: 2;
  margin-top: 26px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .line{
    border-left: 1px solid #ccc;
    height: 10px;
    display: inline-block;
    margin: 0 10px;
  }
  .listcart{
    cursor: pointer;
    &:hover{
      color: #ff6700;
    }
  }
`;
