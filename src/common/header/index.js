import React,{ memo, Fragment, useCallback } from 'react';
import { TopBanner, Nav, NavContent, ContentLeft, ContentRight, NavA, NavSpan } from './style';
import '../../assets/style/scss/single/header.scss';
import { Link } from 'react-router-dom';
const Header = memo(() => {
  return(
    <Fragment>
      <TopBanner />
      <Nav>
        <NavContent>
          <ContentLeft>
            <NavA>小米商场</NavA>
            <NavSpan>|</NavSpan>
            <NavA>MIUI</NavA>
            <NavSpan>|</NavSpan>
            <NavA>IoT</NavA>
            <NavSpan>|</NavSpan>
            <NavA>云服务</NavA>
            <NavSpan>|</NavSpan>
            <NavA>金融</NavA>
            <NavSpan>|</NavSpan>
            <NavA>有品</NavA>
            <NavSpan>|</NavSpan>
            <NavA>小爱开放平台</NavA>
            <NavSpan>|</NavSpan>
            <NavA>企业团购</NavA>
            <NavSpan>|</NavSpan>
            <NavA>资质证照</NavA>
            <NavSpan>|</NavSpan>
            <NavA>协议规则</NavA>
            <NavSpan>|</NavSpan>
            <NavA>下载APP</NavA>
            <NavSpan>|</NavSpan>
            <NavA>Select Location</NavA>
          </ContentLeft>
          <ContentRight>
            <User></User>
            <NavSpan>|</NavSpan>
            <NavA>通知消息</NavA>
            <Link to='/cart'>
              <NavA className='cart'>
                <span className='iconfont'>&#xe63f;</span>
                购物车（0）
              </NavA>
            </Link>
          </ContentRight>
        </NavContent>
      </Nav>
    </Fragment>
  )
})

const User = memo(() => {
  const outLogin = useCallback(() => {
    sessionStorage.setItem('token', '')
    window.location.reload()
  }, [])
  if(sessionStorage.getItem('token')){
    return(
      <NavA onClick={outLogin}>退出</NavA>
    )
  }else{
    return(
      <Fragment>
        <Link to='/login'>
          <NavA>登录</NavA>
        </Link>
        <NavSpan>|</NavSpan>
        <Link to='/register'>
          <NavA>注册</NavA>
        </Link>
      </Fragment>
    )
  }
})

export default Header;