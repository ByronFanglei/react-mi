import style from 'styled-components';
import topbanner from '../../assets/static/images/topbanner.jpg';

export const TopBanner = style.div`
  background: url(${topbanner}) no-repeat center;
  background-size: auto 120px;
  height: 120px;
`;
export const Nav =  style.div`
  background: #333;
`;
export const NavContent = style.div`
  width: 1226px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
export const ContentLeft = style.div`
  backgropund: #f5f5f5;
`;
export const ContentRight = style.div`
  backgropund: skyblue;
`;
export const NavA = style.span`
  display: inline-block;
  color: #b0b0b0;
  font-size: 12px;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
`;
export const NavSpan = style.span`
  display: inline-block;
  padding: 0 3.6px;
  color: #424242;
`;
