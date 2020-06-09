import style from 'styled-components';
import logo from '../../assets/static/images/mi-logo.png';
import home from '../../assets/static/images/mi-home.png';

export const Sotr = style.div`
  width: 1226px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  border-top: 1px solid #e0e0e0;
  background: #fff;
`;
export const Logo = style.div`
  width: 55px;
  height: 55px;
  background-color: #ff6700;
  margin: 0 22px 0 0;
  overflow: hidden;
`;
export const LogoA = style.a`
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
export const Species = style.li`
  float: left;
  padding: 26px 10px 38px;
  cursor: pointer;
  transition: height .5s;
  &:hover{
    .item-product{
      display: block;
    }
  }
`;


