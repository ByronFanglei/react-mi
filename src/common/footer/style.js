import style from 'styled-components';

export const BotommBar = style.div`
  background: #fff;
`;
export const ServerChild = style.li`
  text-align: center;
  border-left: 1px solid #e0e0e0;
  flex: 1;
  cursor: pointer;
  &:hover{
    color: #ff6700;
  }
  &:first-of-type{
    border-left: none;
  }
`;
export const Links = style.div`
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
`;
export const Link = style.div`
  display: flex;
  flex: 1;
`;
export const Contact = style.div`
  width: 250px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
  font-size: 12px;
`;
export const BotA = style.a`
  display: inline-block;
  color: #757575;
  font-size: 14px;
  cursor: pointer;
  &:hover{
    color: #ff6700;
  }
`;
export const BotSpan = style.span`
  display: inline-block;
  margin: 0 8px;
  color: #b0b0b0;
`;
export const InfoA = style.a`
  color: #757575;
  cursor: pointer;
  &:hover{
    color: #ff6700;
  }
`;
