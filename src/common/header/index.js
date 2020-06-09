import React,{ memo, Fragment } from 'react';
import { TopBanner, Nav, NavContent, ContentLeft, ContentRight, NavA, NavSpan } from './style';
import '../../assets/style/scss/single/header.scss';
import { Link } from 'react-router-dom';
const Header = memo((props) => {
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
            <Link to='/login'>
              <NavA>登录</NavA>
            </Link>
            <NavSpan>|</NavSpan>
            <NavA>注册</NavA>
            <NavSpan>|</NavSpan>
            <NavA>通知消息</NavA>
            <NavA className='cart'>
              <span className='iconfont'>&#xe63f;</span>
              购物车（0）
            </NavA>
          </ContentRight>
        </NavContent>
      </Nav>
    </Fragment>
  )
})

export default Header;