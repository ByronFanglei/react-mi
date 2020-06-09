import Style from 'styled-components';


export const LoginAll = Style.div`
  width: 1226px;
  margin: 0 auto;
`;
export const LoginFrom = Style.div`
  float: right;
  width: 410px;
  font-size: 14px;
  color: #999;
  margin-top: 30px;
  background: #fff;
  .title{
    display: flex;
    padding: 27px 0 24px;
    font-size: 24px;
    color: #666;
    div{
      margin: 0 auto;
    }
    div:first-of-type{
      color: #ff6700;
    }
    span{
      height: 24px;
      border: 1px solid #e0e0e0;
    }
  }
  .userinp{
    input{
      width: 338px;
      height: 50px;
      line-height: 22px;
      padding: 13px 16px 13px 14px;
      display: block;
      border: 1px solid #e0e0e0;
      outline: none;
      margin: 0 auto 20px;
    }
  }
  .btn{
    width: 338px;
    height: 50px;
    line-height: 50px;
    background: #ff6700;
    text-align: center;
    font-size: 14px;
    margin: 0 auto 14px;
    color: #fff;
    cursor: pointer;
  }
  .userregister{
    display: flex;
    width: 338px;
    margin: 0 auto 14px;
    input{
      height: 50px;
      border: 1px solid #e0e0e0;
      outline: none;
      padding: 13px 16px 13px 14px;
      box-sizing: border-box;
    }
    div{
      width: 152px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #e0e0e0;
      border-left: none;
      cursor: pointer;
    }
    .noclick{
      pointer-events: none;
    }
  }
  .loginInfo{
    width: 338px;
    margin: 0 auto;
    display: flex;
    justify-content:flex-end;
    cursor: pointer;
    &:hover{
      color: #ff6700;
    }
  }
`;
export const LoginFooter = Style.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%);
  color: #999;
`;