import React,{ memo, useCallback, useRef } from 'react';
import { LoginAll, LoginFrom, LoginFooter } from './style';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';

const Login = memo((props) => {
  const username = useRef(null)
  const password = useRef(null)
  const dispatch = useDispatch()
  const Data = useSelector((state) => {
    return {
      token: state.getIn(['login', 'token'])
    }
  })
  if(Data.token){
    sessionStorage.setItem('token', Data.token)
  }
  if(sessionStorage.getItem('token')){
    props.history.push('/')
  }
  // 登录
  const handLogin = useCallback(() => {
    dispatch(actionCreators.Login(username.current.value, password.current.value))
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
          <input type="text" placeholder='请输入用户名' ref={username}/>
          <input type="password" ref={password} />
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


export default withRouter(Login);
