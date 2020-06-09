import React,{ memo, useCallback } from 'react';
import { LoginAll, LoginFrom, LoginFooter } from './style';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionCreators } from './store';

const Login = memo(() => {
  let username, password;
  const dispatch = useDispatch()
  // 登录
  const handLogin = useCallback(() => {
    dispatch(actionCreators.Login(username.value, password.value))
  }, [])
  return(
    <LoginAll>
      <div>
        <Link to='/'>
          <img src={require('../../assets/static/images/login-logo.png')} alt=""/>
        </Link>
      </div>
      <LoginFrom>
        <div className='title'>
          <div>帐号登录</div>
          <span></span>
          <div>扫码登录</div>
        </div>
        <div className='userinp'>
          <input type="text" placeholder='请输入用户名' ref={input => username = input}/>
          <input type="password" ref={input => password = input} />
        </div>
        <div className='btn' onClick={handLogin}>登录</div>
        <div className='loginInfo'>
          <Link to='/register'>
            <div>立即注册</div>
          </Link>
        </div>
      </LoginFrom>
      <LoginFooter>
        永远相信美好的事情即将发生
      </LoginFooter>
    </LoginAll>
  )
});


export default Login;
